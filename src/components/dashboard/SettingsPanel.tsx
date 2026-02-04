import { Moon, Sun, User, Bell, Shield, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/use-theme";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ open, onClose }: SettingsPanelProps) => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile settings have been saved.",
    });
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Settings</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Appearance */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
              <h3 className="font-semibold text-foreground">Appearance</h3>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div>
                <p className="font-medium text-foreground">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
              </div>
              <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </div>
          </div>

          <Separator />

          {/* Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Profile</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Dr. Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="doctor@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="America/New_York" />
              </div>
              <Button onClick={handleSaveProfile} className="w-full">
                Save Profile
              </Button>
            </div>
          </div>

          <Separator />

          {/* Notifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Notifications</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive booking confirmations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div>
                  <p className="font-medium text-foreground">Appointment Reminders</p>
                  <p className="text-sm text-muted-foreground">Get reminded before appointments</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          {/* Security */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Security</h3>
            </div>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </div>

          <Separator />

          {/* Logout */}
          <Button variant="destructive" className="w-full" asChild>
            <Link to="/">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsPanel;
