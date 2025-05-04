import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Contact, ContactFilters, ContactFormData } from './types';

interface ContactState {
  contacts: Contact[];
  filters: ContactFilters;
  // CRUD operations
  addContact: (data: ContactFormData) => void;
  updateContact: (id: string, data: ContactFormData) => void;
  deleteContact: (id: string) => void;
  getContactById: (id: string) => Contact | undefined;
  // Filtering
  setSearchQuery: (query: string) => void;
  setTagFilter: (tag: string) => void;
  removeTagFilter: (tag: string) => void;
  clearFilters: () => void;
  // Pagination
  setPage: (page: number) => void;
  // Computed values
  filteredContacts: Contact[];
  totalPages: number;
  availableTags: string[];
}

export const useContactStore = create<ContactState>()(
  persist(
    (set, get) => ({
      contacts: [],
      filters: {
        search: '',
        tags: [],
        page: 1,
        limit: 10,
      },

      // CRUD operations
      addContact: (data: ContactFormData) => {
        const now = new Date().toISOString();
        const newContact: Contact = {
          id: uuidv4(),
          ...data,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          contacts: [...state.contacts, newContact],
        }));
      },

      updateContact: (id: string, data: ContactFormData) => {
        set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === id
              ? {
                  ...contact,
                  ...data,
                  updatedAt: new Date().toISOString(),
                }
              : contact
          ),
        }));
      },

      deleteContact: (id: string) => {
        set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id),
        }));
      },

      getContactById: (id: string) => {
        return get().contacts.find((contact) => contact.id === id);
      },

      // Filtering
      setSearchQuery: (query: string) => {
        set((state) => ({
          filters: {
            ...state.filters,
            search: query,
            page: 1, // Reset to first page when searching
          },
        }));
      },

      setTagFilter: (tag: string) => {
        set((state) => {
          if (state.filters.tags.includes(tag)) return state;
          
          return {
            filters: {
              ...state.filters,
              tags: [...state.filters.tags, tag],
              page: 1, // Reset to first page when filtering
            },
          };
        });
      },

      removeTagFilter: (tag: string) => {
        set((state) => ({
          filters: {
            ...state.filters,
            tags: state.filters.tags.filter((t) => t !== tag),
          },
        }));
      },

      clearFilters: () => {
        set((state) => ({
          filters: {
            ...state.filters,
            search: '',
            tags: [],
            page: 1,
          },
        }));
      },

      // Pagination
      setPage: (page: number) => {
        set((state) => ({
          filters: {
            ...state.filters,
            page,
          },
        }));
      },

      // Computed values
      get filteredContacts() {
        const { contacts, filters } = get();
        const { search, tags } = filters;
        
        let filtered = contacts;
        
        // Apply search filter
        if (search) {
          const searchLower = search.toLowerCase();
          filtered = filtered.filter(
            (contact) =>
              contact.name.toLowerCase().includes(searchLower) ||
              contact.email.toLowerCase().includes(searchLower) ||
              (contact.company && contact.company.toLowerCase().includes(searchLower)) ||
              (contact.phone && contact.phone.includes(search))
          );
        }
        
        // Apply tag filters
        if (tags.length > 0) {
          filtered = filtered.filter((contact) =>
            tags.every((tag) => contact.tags.includes(tag))
          );
        }
        
        // Apply pagination
        const { page, limit } = filters;
        const start = (page - 1) * limit;
        const end = start + limit;
        
        return filtered.slice(start, end);
      },

      get totalPages() {
        const { contacts, filters } = get();
        return Math.ceil(contacts.length / filters.limit);
      },

      get availableTags() {
        return Array.from(
          new Set(get().contacts.flatMap((contact) => contact.tags))
        ).sort();
      },
    }),
    {
      name: 'contact-store',
    }
  )
);