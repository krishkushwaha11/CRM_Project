import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ContactCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { Pagination } from "@/components/Pagination";
import { useUiStore } from "@/store/uiStore";
import { useContactStore } from "@/store/contactStore";
import { Plus } from "lucide-react";

export default function ContactsPage() {
  const { openContactForm } = useUiStore();
  const { filteredContacts } = useContactStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
        <Button
          onClick={() => openContactForm()}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          <span>Add Contact</span>
        </Button>
      </div>

      <SearchAndFilter />

      {filteredContacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-semibold">No contacts found</h2>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters or add a new contact.
          </p>
          <Button
            onClick={() => openContactForm()}
            className="mt-4"
            variant="outline"
          >
            Add Contact
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
}