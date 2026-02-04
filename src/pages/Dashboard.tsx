import { useState } from "react";
import { Calendar, Clock, Users, LogOut, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AvailabilityManager from "@/components/dashboard/AvailabilityManager";
import AppointmentsList from "@/components/dashboard/AppointmentsList";
import DashboardStats from "@/components/dashboard/DashboardStats";
import SettingsPanel from "@/components/dashboard/SettingsPanel";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "availability" | "appointments">("overview");
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border hidden lg:block">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-foreground">MediBook</span>
          </Link>
        </div>

        <nav className="px-4 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "overview" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("availability")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "availability" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Clock className="w-5 h-5" />
            <span className="font-medium">Availability</span>
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
              activeTab === "appointments" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Appointments</span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">DS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Dr. Smith</p>
              <p className="text-xs text-muted-foreground truncate">doctor@example.com</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button variant="ghost" size="sm" className="flex-1" onClick={() => setSettingsOpen(true)}>
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link to="/">
                <LogOut className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-40 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="font-bold text-foreground">MediBook</span>
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)}>
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <LogOut className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border z-40 flex items-center justify-around">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex flex-col items-center gap-1 ${
            activeTab === "overview" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-xs">Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("availability")}
          className={`flex flex-col items-center gap-1 ${
            activeTab === "availability" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-xs">Availability</span>
        </button>
        <button
          onClick={() => setActiveTab("appointments")}
          className={`flex flex-col items-center gap-1 ${
            activeTab === "appointments" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs">Appointments</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 pb-20 lg:pb-0 min-h-screen">
        <div className="p-6 lg:p-8">
          {activeTab === "overview" && <DashboardStats />}
          {activeTab === "availability" && <AvailabilityManager />}
          {activeTab === "appointments" && <AppointmentsList />}
        </div>
      </main>

      {/* Settings Panel */}
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default Dashboard;
