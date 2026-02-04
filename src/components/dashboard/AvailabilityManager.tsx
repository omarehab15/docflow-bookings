import { useState } from "react";
import { Plus, Trash2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface TimeSlot {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  slotDuration: number;
  isActive: boolean;
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialSlots: TimeSlot[] = [
  { id: "1", day: "Monday", startTime: "09:00", endTime: "17:00", slotDuration: 30, isActive: true },
  { id: "2", day: "Tuesday", startTime: "09:00", endTime: "17:00", slotDuration: 30, isActive: true },
  { id: "3", day: "Wednesday", startTime: "09:00", endTime: "17:00", slotDuration: 30, isActive: true },
  { id: "4", day: "Thursday", startTime: "09:00", endTime: "17:00", slotDuration: 30, isActive: true },
  { id: "5", day: "Friday", startTime: "09:00", endTime: "14:00", slotDuration: 30, isActive: true },
];

const AvailabilityManager = () => {
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlot, setNewSlot] = useState({
    day: "Monday",
    startTime: "09:00",
    endTime: "17:00",
    slotDuration: 30,
  });
  const { toast } = useToast();

  const toggleSlot = (id: string) => {
    setSlots(slots.map(slot => 
      slot.id === id ? { ...slot, isActive: !slot.isActive } : slot
    ));
  };

  const deleteSlot = (id: string) => {
    setSlots(slots.filter(slot => slot.id !== id));
    toast({
      title: "Slot removed",
      description: "The availability slot has been deleted.",
    });
  };

  const addSlot = () => {
    const newId = Date.now().toString();
    setSlots([...slots, { ...newSlot, id: newId, isActive: true }]);
    setShowAddForm(false);
    setNewSlot({ day: "Monday", startTime: "09:00", endTime: "17:00", slotDuration: 30 });
    toast({
      title: "Slot added",
      description: `New availability for ${newSlot.day} has been created.`,
    });
  };

  const saveChanges = () => {
    toast({
      title: "Changes saved",
      description: "Your availability has been synced to Google Sheets.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Manage Availability</h1>
          <p className="text-muted-foreground">Set your working hours and slot duration for each day.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Slot
          </Button>
          <Button onClick={saveChanges}>
            Save Changes
          </Button>
        </div>
      </div>

      {/* Add New Slot Form */}
      {showAddForm && (
        <Card className="border-primary/30 bg-accent/30">
          <CardHeader>
            <CardTitle className="text-lg">Add New Time Slot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label>Day</Label>
                <Select value={newSlot.day} onValueChange={(value) => setNewSlot({ ...newSlot, day: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {daysOfWeek.map((day) => (
                      <SelectItem key={day} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input 
                  type="time" 
                  value={newSlot.startTime}
                  onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <Input 
                  type="time" 
                  value={newSlot.endTime}
                  onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Slot Duration</Label>
                <Select 
                  value={newSlot.slotDuration.toString()} 
                  onValueChange={(value) => setNewSlot({ ...newSlot, slotDuration: parseInt(value) })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={addSlot} className="w-full">Add</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Existing Slots */}
      <div className="space-y-4">
        {slots.map((slot) => (
          <Card 
            key={slot.id} 
            className={`border-border transition-all ${!slot.isActive ? "opacity-60" : ""}`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{slot.day}</h3>
                    <p className="text-sm text-muted-foreground">
                      {slot.startTime} - {slot.endTime} • {slot.slotDuration} min slots
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={slot.isActive} 
                      onCheckedChange={() => toggleSlot(slot.id)}
                    />
                    <span className="text-sm text-muted-foreground">
                      {slot.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => deleteSlot(slot.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {slots.length === 0 && (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="p-12 text-center">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No availability set</h3>
            <p className="text-muted-foreground mb-4">Add your first time slot to start accepting appointments.</p>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Slot
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AvailabilityManager;
