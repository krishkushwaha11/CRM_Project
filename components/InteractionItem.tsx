import { formatDate } from "@/utils/formatDate";
import { Interaction } from "@/store/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { useUiStore } from "@/store/uiStore";

interface InteractionItemProps {
  interaction: Interaction;
}

export function InteractionItem({ interaction }: InteractionItemProps) {
  const { id, contactId, type, content, createdAt } = interaction;
  const { openInteractionForm, openDeleteModal } = useUiStore();

  const typeIcons = {
    call: "📞",
    email: "✉️",
    meeting: "🤝",
    note: "📝",
  };

  const typeLabels = {
    call: "Call",
    email: "Email",
    meeting: "Meeting",
    note: "Note",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-2">
          <div className="text-xl" aria-hidden="true">
            {typeIcons[type]}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-card-foreground">
                {typeLabels[type]}
              </h3>
              <p className="text-xs text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            </div>
            <p className="mt-2 text-sm whitespace-pre-line">{content}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-2">
        <div className="flex w-full justify-end space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => openInteractionForm(contactId, id)}
            aria-label="Edit interaction"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => openDeleteModal(contactId, id)}
            aria-label="Delete interaction"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
