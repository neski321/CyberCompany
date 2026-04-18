import { Request, Response, NextFunction } from "express";
import { log } from "./index";

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const ipHistory = new Map<string, RateLimitEntry>();
const globalHistory = { count: 0, resetTime: Date.now() + 3600000 };

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_PER_IP = 3;
const GLOBAL_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_GLOBAL = 30;

export function rateLimit(req: Request, res: Response, next: NextFunction) {
  const now = Date.now();
  const ip = req.ip || req.headers["x-forwarded-for"]?.toString() || "unknown";

  // Cleanup old entries periodically (every 100 requests roughly)
  if (ipHistory.size > 1000) {
    Array.from(ipHistory.entries()).forEach(([key, entry]) => {
      if (now > entry.resetTime) ipHistory.delete(key);
    });
  }

  // Global rate limit check
  if (now > globalHistory.resetTime) {
    globalHistory.count = 0;
    globalHistory.resetTime = now + GLOBAL_WINDOW_MS;
  }
  
  if (globalHistory.count >= MAX_GLOBAL) {
    log(`Global rate limit exceeded (IP: ${ip})`, "rate-limit");
    return res.status(429).json({
      message: "Server is receiving too many requests. Please try again in an hour."
    });
  }

  // Per-IP rate limit check
  let entry = ipHistory.get(ip);
  if (!entry || now > entry.resetTime) {
    entry = { count: 0, resetTime: now + WINDOW_MS };
    ipHistory.set(ip, entry);
  }

  if (entry.count >= MAX_PER_IP) {
    log(`Rate limit exceeded for IP: ${ip}`, "rate-limit");
    return res.status(429).json({
      message: "Too many requests from this IP. Please try again in 15 minutes."
    });
  }

  entry.count++;
  globalHistory.count++;
  next();
}
