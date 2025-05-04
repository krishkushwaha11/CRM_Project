import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InteractionItem } from "@/components/InteractionItem";
import { formatDate } from "@/utils/formatDate";
import { useContactStore } from "@/store/contactStore";
import { useInteractionStore } from "@/store/interactionStore";
import { useUiStore } from "@/store/uiStore";
import { ArrowLeft, Edit, Plus, Trash } from "lucide-react";

export default function ContactDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContactById } = useContactStore();
  const { getInteractionsByContactId } = useInteractionStore();
  const { openContactForm, openInteractionForm, openDeleteModal } = useUiStore();

  const contact = id ? getContactById(id) : undefined;
  const interactions = id ? getInteractionsByContactId(id) : [];

  // If contact doesn't exist, redirect to contacts page
  useEffect(() => {
    if (id && !contact) {
      navigate("/contacts");
    }
  }, [id, contact, navigate]);

  if (!contact) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        className="mb-4 p-0 flex items-center gap-1"
        onClick={() => navigate("/contacts")}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Contacts</span>
      </Button>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {contact.name}
          </h1>
          <p className="text-muted-foreground">{contact.email}</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => openContactForm(contact.id)}
            className="flex items-center gap-1"
          >
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button
            variant="destructive"
            onClick={() => openDeleteModal(contact.id)}
            className="flex items-center gap-1"
          >
            <Trash className="h-4 w-4" />
            <span>Delete</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Contact Details</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{contact.email}</p>
            </div>
            {contact.phone && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Phone
                </p>
                <p>{contact.phone}</p>
              </div>
            )}
            {contact.company && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Company
                </p>
                <p>{contact.company}</p>
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Created
              </p>
              <p>{formatDate(contact.createdAt)}</p>
            </div>
            <div className="col-span-full">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Tags
              </p>
              <div className="flex flex-wrap gap-1">
                {contact.tags.map((tag) => {
                  const tagColors = ["red", "blue", "green", "yellow", "purple"];
                  const colorIndex = tag
                    .split("")
                    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % tagColors.length;
                  const colorClass = `tag-${tagColors[colorIndex]}`;
                  
                  return (
                    <span key={tag} className={`tag ${colorClass}`}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Interaction History</h2>
        <Button
          onClick={() => openInteractionForm(contact.id)}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          <span>Add Interaction</span>
        </Button>
      </div>

      {interactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <p className="text-muted-foreground">No interactions recorded yet.</p>
          <Button
            onClick={() => openInteractionForm(contact.id)}
            className="mt-2"
            variant="outline"
          >
            Add First Interaction
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {interactions.map((interaction) => (
            <InteractionItem key={interaction.id} interaction={interaction} />
          ))}
        </div>
      )}
    </div>
  );
}