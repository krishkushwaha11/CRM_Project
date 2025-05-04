export interface Contact {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Interaction {
    id: string;
    contactId: string;
    type: 'call' | 'email' | 'meeting' | 'note';
    content: string;
    createdAt: string;
  }
  
  export interface ContactFilters {
    search: string;
    tags: string[];
    page: number;
    limit: number;
  }
  
  export type SortOrder = 'asc' | 'desc';
  
  export interface UIState {
    isContactFormOpen: boolean;
    isInteractionFormOpen: boolean;
    isDeleteModalOpen: boolean;
    currentContactId: string | null;
    currentInteractionId: string | null;
    darkMode: boolean;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    tags: string[];
  }
  
  export interface InteractionFormData {
    type: 'call' | 'email' | 'meeting' | 'note';
    content: string;
  }