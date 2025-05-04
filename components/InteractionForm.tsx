import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useInteractionStore } from "@/store/interactionStore";
import { useUiStore } from "@/store/uiStore";
import { InteractionFormData } from "@/store/types";
import { useToast } from "@/hooks/use-toast";

export function InteractionForm() {
  const {
    isInteractionFormOpen,
    currentContactId,
    currentInteractionId,
    closeInteractionForm,
  } = useUiStore();
  const { addInteraction, updateInteraction, getInteractionById } =
    useInteractionStore();
  const { toast } = useToast();

  const [formData, setFormData] = useState<InteractionFormData>({
    type: "note",
    content: "",
  });

  const isEditing = !!currentInteractionId;

  useEffect(() => {
    if (currentInteractionId) {
      const interaction = getInteractionById(currentInteractionId);
      if (interaction) {
        setFormData({
          type: interaction.type,
          content: interaction.content,
        });
      }
    } else {
      // Reset form for new interaction
      setFormData({
        type: "note",
        content: "",
      });
    }
  }, [currentInteractionId, getInteractionById, isInteractionFormOpen]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleTypeChange = (value: "call" | "email" | "meeting" | "note") => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.content.trim()) {
      toast({
        title: "Error",
        description: "Content is required",
        variant: "destructive",
      });
      return;
    }

    if (isEditing && currentInteractionId) {
      updateInteraction(currentInteractionId, formData);
      toast({
        title: "Success",
        description: "Interaction updated successfully",
      });
    } else if (currentContactId) {
      addInteraction(currentContactId, formData);
      toast({
        title: "Success",
        description: "Interaction added successfully",
      });
    }

    closeInteractionForm();
  };

  return (
    <Dialog open={isInteractionFormOpen} onOpenChange={closeInteractionForm}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Interaction" : "Add New Interaction"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={formData.type}
              onValueChange={(value) =>
                handleTypeChange(value as "call" | "email" | "meeting" | "note")
              }
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Select interaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="call">Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="note">Note</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={handleContentChange}
              placeholder="Enter details about the interaction"
              className="min-h-[120px]"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={closeInteractionForm}
            >
              Cancel
            </Button>
            <Button type="submit">{isEditing ? "Update" : "Create"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}