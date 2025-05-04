import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContactStore } from "@/store/contactStore";
import { useUiStore } from "@/store/uiStore";
import { ContactFormData } from "@/store/types";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { isContactFormOpen, currentContactId, closeContactForm } = useUiStore();
  const { addContact, updateContact, getContactById } = useContactStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    tags: [],
  });
  
  const [tagInput, setTagInput] = useState("");
  
  const isEditing = !!currentContactId;
  
  useEffect(() => {
    if (currentContactId) {
      const contact = getContactById(currentContactId);
      if (contact) {
        setFormData({
          name: contact.name,
          email: contact.email,
          phone: contact.phone || "",
          company: contact.company || "",
          tags: [...contact.tags],
        });
      }
    } else {
      // Reset form for new contact
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        tags: [],
      });
    }
    setTagInput("");
  }, [currentContactId, getContactById, isContactFormOpen]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Error",
        description: "Name and email are required",
        variant: "destructive",
      });
      return;
    }
    
    if (isEditing) {
      updateContact(currentContactId, formData);
      toast({
        title: "Success",
        description: "Contact updated successfully",
      });
    } else {
      addContact(formData);
      toast({
        title: "Success",
        description: "Contact added successfully",
      });
    }
    
    closeContactForm();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };
  
  return (
    <Dialog open={isContactFormOpen} onOpenChange={closeContactForm}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Contact" : "Add New Contact"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex space-x-2">
              <Input
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add tag and press Enter"
              />
              <Button type="button" onClick={addTag}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {formData.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center gap-1 text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground"
                    aria-label={`Remove ${tag} tag`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={closeContactForm}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}