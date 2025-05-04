import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactStore } from "@/store/contactStore";
import { useInteractionStore } from "@/store/interactionStore";
import { generateMockContacts, generateMockInteractions } from "@/utils/mockData";

export default function HomePage() {
  const { contacts, addContact } = useContactStore();
  const { interactions, addInteraction } = useInteractionStore();

  // Load mock data if no contacts exist
  useEffect(() => {
    if (contacts.length === 0) {
      const mockContacts = generateMockContacts(15);
      mockContacts.forEach((contact) => {
        addContact({
          name: contact.name,
          email: contact.email,
          phone: contact.phone || "",
          company: contact.company || "",
          tags: contact.tags,
        });
      });

      // Add mock interactions after contacts are added
      // This will run on next render cycle
      setTimeout(() => {
        const storeContacts = useContactStore.getState().contacts;
        const mockInteractions = generateMockInteractions(storeContacts, 30);
        mockInteractions.forEach((interaction) => {
          addInteraction(interaction.contactId, {
            type: interaction.type,
            content: interaction.content,
          });
        });
      }, 0);
    }
  }, [contacts.length, addContact, interactions.length, addInteraction]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
            Interaction Hub
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Manage your contacts and interactions in one place
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link to="/contacts">
            <Button className="w-full" size="lg">
              View Contacts
            </Button>
          </Link>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {contacts.length} contacts and {interactions.length} interactions loaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}