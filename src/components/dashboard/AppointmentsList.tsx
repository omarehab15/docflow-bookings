import { useState } from "react";
import { Calendar, Clock, User, Mail, CheckCircle, XCircle, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  status: "booked" | "completed" | "cancelled";
}

const mockAppointments: Appointment[] = [
  { id: "1", patientName: "John Smith", patientEmail: "john@example.com", date: "2026-02-04", time: "09:00", status: "booked" },
  { id: "2", patientName: "Sarah Johnson", patientEmail: "sarah@example.com", date: "2026-02-04", time: "10:30", status: "booked" },
  { id: "3", patientName: "Michael Brown", patientEmail: "michael@example.com", date: "2026-02-04", time: "14:00", status: "booked" },
  { id: "4", patientName: "Emily Davis", patientEmail: "emily@example.com", date: "2026-02-05", time: "09:30", status: "booked" },
  { id: "5", patientName: "Robert Wilson", patientEmail: "robert@example.com", date: "2026-02-03", time: "11:00", status: "completed" },
  { id: "6", patientName: "Jennifer Lee", patientEmail: "jennifer@example.com", date: "2026-02-03", time: "15:00", status: "cancelled" },
  { id: "7", patientName: "David Martinez", patientEmail: "david@example.com", date: "2026-02-05", time: "14:30", status: "booked" },
  { id: "8", patientName: "Lisa Anderson", patientEmail: "lisa@example.com", date: "2026-02-06", time: "10:00", status: "booked" },
];

const AppointmentsList = () => {
  const [appointments] = useState<Appointment[]>(mockAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.patientEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "booked":
        return (
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
            <Clock className="w-3 h-3 mr-1" />
            Booked
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-success/10 text-success hover:bg-success/20 border-0">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-0">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </Badge>
        );
      default:
        return null;
    }
  };

  const todayCount = appointments.filter(apt => apt.date === "2026-02-04" && apt.status === "booked").length;
  const upcomingCount = appointments.filter(apt => apt.status === "booked").length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Appointments</h1>
          <p className="text-muted-foreground">
            {todayCount} appointments today • {upcomingCount} upcoming
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-border">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by patient name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{appointment.patientName}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="w-3 h-3" />
                      {appointment.patientEmail}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{formatDate(appointment.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{appointment.time}</span>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="p-12 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No appointments found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filters." 
                : "You don't have any appointments yet."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentsList;
