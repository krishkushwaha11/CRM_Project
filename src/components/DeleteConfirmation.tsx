import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { useContactStore } from "@/store/contactStore";
  import { useInteractionStore } from "@/store/interactionStore";
  import { useUiStore } from "@/store/uiStore";
  import { useToast } from "@/hooks/use-toast";
  import { useNavigate } from "react-router-dom";
  
  export function DeleteConfirmation() {
    const { isDeleteModalOpen, currentContactId, currentInteractionId, closeDeleteModal } = useUiStore();
    const { deleteContact } = useContactStore();
    const { deleteInteraction } = useInteractionStore();
    const { toast } = useToast();
    const navigate = useNavigate();
  
    const handleDelete = () => {
      if (currentInteractionId) {
        // Delete interaction
        deleteInteraction(currentInteractionId);
        toast({
          title: "Success",
          description: "Interaction deleted successfully",
        });
      } else if (currentContactId) {
        // Delete contact
        deleteContact(currentContactId);
        toast({
          title: "Success",
          description: "Contact deleted successfully",
        });
        // Navigate back to contacts list if we're deleting the current contact
        navigate("/contacts");
      }
      
      closeDeleteModal();
    };
  
    const title = currentInteractionId
      ? "Delete Interaction"
      : "Delete Contact";
    
    const description = currentInteractionId
      ? "Are you sure you want to delete this interaction? This action cannot be undone."
      : "Are you sure you want to delete this contact and all associated interactions? This action cannot be undone.";
  
    return (
      <AlertDialog open={isDeleteModalOpen} onOpenChange={closeDeleteModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }