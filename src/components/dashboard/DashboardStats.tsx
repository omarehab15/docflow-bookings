import { Calendar, Clock, Users, TrendingUp, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Today's Appointments",
    value: "5",
    change: "+2 from yesterday",
    icon: Calendar,
    trend: "up",
  },
  {
    title: "Available Slots",
    value: "12",
    change: "For this week",
    icon: Clock,
    trend: "neutral",
  },
  {
    title: "Total Patients",
    value: "248",
    change: "+12 this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Booking Rate",
    value: "94%",
    change: "+5% vs last month",
    icon: TrendingUp,
    trend: "up",
  },
];

const recentAppointments = [
  { name: "John Smith", time: "9:00 AM", status: "confirmed" },
  { name: "Sarah Johnson", time: "10:30 AM", status: "confirmed" },
  { name: "Michael Brown", time: "2:00 PM", status: "pending" },
  { name: "Emily Davis", time: "3:30 PM", status: "confirmed" },
  { name: "Robert Wilson", time: "4:30 PM", status: "cancelled" },
];

const DashboardStats = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Dr. Smith. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-sm mt-1 ${
                stat.trend === "up" ? "text-success" : "text-muted-foreground"
              }`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Schedule */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAppointments.map((appointment, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {appointment.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.name}</p>
                    <p className="text-sm text-muted-foreground">{appointment.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {appointment.status === "confirmed" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Confirmed
                    </span>
                  )}
                  {appointment.status === "pending" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-warning/10 text-warning rounded-full text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      Pending
                    </span>
                  )}
                  {appointment.status === "cancelled" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                      <XCircle className="w-3 h-3" />
                      Cancelled
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-border bg-accent">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Sync Status</h3>
              <p className="text-sm text-muted-foreground">
                Connected to Google Sheets • Last synced 2 minutes ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 text-sm text-success">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Connected
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
