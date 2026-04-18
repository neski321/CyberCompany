import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Archive, 
  Clock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RefreshCcw,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string;
  status: 'new' | 'read' | 'archived';
  created_at: string;
  email_sent: number;
  confirmation_sent: number;
}

interface Assessment extends Submission {
  primary_concern: string;
  timeline: string;
  message: string;
  phone?: string;
  industry: string;
  company_size: string;
}

interface Consultation extends Submission {
  date: string;
  time_slot: string;
  datetime: string;
  message?: string;
}

export default function Admin() {
  const [pin, setPin] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [activeTab, setActiveTab] = useState("assessments");
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const { toast } = useToast();

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      const data = await res.json();
      if (data.success) {
        setApiKey(data.key);
        setIsAuthorized(true);
        localStorage.setItem("admin_key", data.key);
        toast({ title: "Welcome back", description: "Authorization successful" });
      } else {
        toast({ title: "Access Denied", description: "Invalid PIN", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Error", description: "Server unreachable", variant: "destructive" });
    }
  };

  const fetchData = async () => {
    if (!apiKey) return;
    setLoading(true);
    try {
      const headers = { "x-admin-key": apiKey };
      const [assessRes, consultRes, statsRes] = await Promise.all([
        fetch("/api/admin/assessments", { headers }),
        fetch("/api/admin/consultations", { headers }),
        fetch("/api/admin/stats", { headers }),
      ]);

      const [assessData, consultData, statsData] = await Promise.all([
        assessRes.json(),
        consultRes.json(),
        statsRes.json(),
      ]);

      setAssessments(assessData);
      setConsultations(consultData);
      setStats(statsData);
    } catch (err) {
      toast({ title: "Error", description: "Failed to fetch data", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (type: 'assessments' | 'consultations', id: number, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/${type}/${id}`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-key": apiKey 
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchData();
        toast({ title: "Status Updated", description: `Marked as ${newStatus}` });
      }
    } catch (err) {
      toast({ title: "Update Failed", description: "Try again later", variant: "destructive" });
    }
  };

  useEffect(() => {
    const savedKey = localStorage.getItem("admin_key");
    if (savedKey) {
      setApiKey(savedKey);
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) fetchData();
  }, [isAuthorized]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 bg-grid-pattern">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold">Admin Portal</h1>
              <p className="text-muted-foreground mt-2">Enter your security PIN to continue</p>
            </div>
            <form onSubmit={handleVerifyPin} className="w-full space-y-4">
              <Input
                type="password"
                placeholder="••••"
                className="text-center text-2xl tracking-[0.5em] h-14"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                autoFocus
                maxLength={8}
              />
              <Button type="submit" className="w-full h-12 text-lg font-bold">
                Unlock System
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const filteredAssessments = assessments.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    a.company.toLowerCase().includes(search.toLowerCase())
  );

  const filteredConsultations = consultations.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30">
      <header className="border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-xl tracking-tight">RISKWISE <span className="text-primary">ADMIN</span></span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={fetchData} disabled={loading}>
              <RefreshCcw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Sync
            </Button>
            <Button variant="outline" size="sm" onClick={() => {
              localStorage.removeItem("admin_key");
              setIsAuthorized(false);
            }}>Logout</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <StatCard title="Total Submissions" value={stats.total} icon={<Mail className="text-primary" />} />
            <StatCard title="New Requests" value={stats.new} icon={<AlertCircle className="text-amber-500" />} color="amber" />
            <StatCard title="Assessments" value={stats.assessments} icon={<Shield className="text-cyan-500" />} />
            <StatCard title="Consultations" value={stats.consultations} icon={<Calendar className="text-indigo-500" />} />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name or company..." 
              className="pl-10" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="assessments" onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-white/10 p-1 rounded-xl">
            <TabsTrigger value="assessments" className="rounded-lg px-6 data-[state=active]:bg-primary/20">Assessments</TabsTrigger>
            <TabsTrigger value="consultations" className="rounded-lg px-6 data-[state=active]:bg-primary/20">Consultations</TabsTrigger>
          </TabsList>

          <TabsContent value="assessments">
            <Card className="bg-slate-900/50 border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="hover:bg-transparent border-white/5">
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Concern</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAssessments.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="text-center py-12 text-muted-foreground">No assessments found</TableCell></TableRow>
                  ) : (
                    filteredAssessments.map((a) => (
                      <SubmissionRow 
                        key={a.id} 
                        item={a} 
                        type="assessments" 
                        isExpanded={expandedRow === a.id}
                        onToggle={() => setExpandedRow(expandedRow === a.id ? null : a.id)}
                        onStatusUpdate={(s: string) => updateStatus('assessments', a.id, s)}
                      />
                    ))
                  )}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="consultations">
            <Card className="bg-slate-900/50 border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="hover:bg-transparent border-white/5">
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Consultation Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredConsultations.length === 0 ? (
                    <TableRow><TableCell colSpan={7} className="text-center py-12 text-muted-foreground">No consultations found</TableCell></TableRow>
                  ) : (
                    filteredConsultations.map((c) => (
                      <SubmissionRow 
                        key={c.id} 
                        item={c} 
                        type="consultations" 
                        isExpanded={expandedRow === c.id}
                        onToggle={() => setExpandedRow(expandedRow === c.id ? null : c.id)}
                        onStatusUpdate={(s: string) => updateStatus('consultations', c.id, s)}
                      />
                    ))
                  )}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, color = "primary" }: any) {
  const colors: any = {
    primary: "from-primary/20",
    amber: "from-amber-500/20",
  };
  return (
    <Card className={`bg-gradient-to-br ${colors[color]} to-transparent border-white/10 backdrop-blur-sm`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-display">{value}</div>
      </CardContent>
    </Card>
  );
}

function SubmissionRow({ item, type, isExpanded, onToggle, onStatusUpdate }: any) {
  const isNew = item.status === 'new';
  
  return (
    <>
      <TableRow 
        className={`group border-white/5 transition-colors cursor-pointer ${isNew ? 'bg-primary/5 hover:bg-primary/10' : 'hover:bg-white/5'}`}
        onClick={onToggle}
      >
        <TableCell>
          {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </TableCell>
        <TableCell className="text-xs text-muted-foreground">
          {new Date(item.created_at).toLocaleDateString()}
        </TableCell>
        <TableCell className="font-medium whitespace-nowrap">
          {item.name}
          {isNew && <Badge className="ml-2 h-4 px-1.5 text-[10px] bg-primary text-primary-foreground">NEW</Badge>}
        </TableCell>
        <TableCell>{item.company}</TableCell>
        <TableCell className="text-sm">
          {type === 'assessments' ? (
            <span className="truncate max-w-[200px] block">{item.primary_concern}</span>
          ) : (
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> {item.date}</span>
          )}
        </TableCell>
        <TableCell>
          <StatusBadge status={item.status} />
        </TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
            {item.status !== 'read' && (
              <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-primary/20 hover:text-primary" onClick={() => onStatusUpdate('read')}>
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            )}
            {item.status !== 'archived' && (
              <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-white/10" onClick={() => onStatusUpdate('archived')}>
                <Archive className="w-4 h-4" />
              </Button>
            )}
            <a href={`mailto:${item.email}`} className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-white/10 text-muted-foreground hover:text-white">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </TableCell>
      </TableRow>
      <AnimatePresence>
        {isExpanded && (
          <TableRow className="border-none bg-white/[0.02] hover:bg-white/[0.02]">
            <TableCell colSpan={7} className="p-0">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pb-2 border-b border-white/5">Contact Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs uppercase mb-0.5">Email</p>
                        <a href={`mailto:${item.email}`} className="text-primary hover:underline flex items-center gap-1">
                          {item.email} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      {item.phone && (
                        <div>
                          <p className="text-muted-foreground text-xs uppercase mb-0.5">Phone</p>
                          <p>{item.phone}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-muted-foreground text-xs uppercase mb-0.5">Industry</p>
                        <p>{item.industry || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase mb-0.5">Company Size</p>
                        <p>{item.company_size || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pb-2 border-b border-white/5">Submission Details</h4>
                    <div className="text-sm">
                      {type === 'assessments' ? (
                        <>
                          <div className="mb-3">
                            <p className="text-muted-foreground text-xs uppercase mb-0.5">Timeline</p>
                            <p>{item.timeline}</p>
                          </div>
                          {item.current_security_measures && (
                            <div className="mb-3">
                              <p className="text-muted-foreground text-xs uppercase mb-0.5">Current Measures</p>
                              <p className="italic text-slate-300">{item.current_security_measures}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="mb-3">
                          <p className="text-muted-foreground text-xs uppercase mb-0.5">Scheduled Slot</p>
                          <p className="font-bold text-primary flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {item.datetime} {item.timezone ? `(${item.timezone})` : ''}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-muted-foreground text-xs uppercase mb-0.5">Message / Notes</p>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 whitespace-pre-wrap mt-1">
                          {item.message || 'No additional notes provided.'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex items-center gap-6 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${item.email_sent ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <span className="text-muted-foreground">Notification Email:</span>
                      <span>{item.email_sent ? 'Sent' : 'Failed'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${item.confirmation_sent ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <span className="text-muted-foreground">Confirmation Email:</span>
                      <span>{item.confirmation_sent ? 'Sent' : 'Failed'}</span>
                    </div>
                    {item.email_error && (
                      <span className="text-xs text-red-400 font-mono truncate">Error: {item.email_error}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </TableCell>
          </TableRow>
        )}
      </AnimatePresence>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  const variants: any = {
    new: "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30",
    read: "bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30",
    archived: "bg-slate-500/20 text-slate-500 hover:bg-slate-500/30",
  };
  return (
    <Badge className={`${variants[status]} border-none capitalize`}>
      {status}
    </Badge>
  );
}

function AlertCircle({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
