import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UIState } from './types';

interface UiStateStore extends UIState {
  // Contact form
  openContactForm: (contactId?: string) => void;
  closeContactForm: () => void;
  // Interaction form
  openInteractionForm: (contactId: string, interactionId?: string) => void;
  closeInteractionForm: () => void;
  // Delete modal
  openDeleteModal: (contactId?: string, interactionId?: string) => void;
  closeDeleteModal: () => void;
  // Theme
  toggleDarkMode: () => void;
}

export const useUiStore = create<UiStateStore>()(
  persist(
    (set) => ({
      isContactFormOpen: false,
      isInteractionFormOpen: false,
      isDeleteModalOpen: false,
      currentContactId: null,
      currentInteractionId: null,
      darkMode: false,

      // Contact form
      openContactForm: (contactId) => {
        set({
          isContactFormOpen: true,
          currentContactId: contactId || null,
        });
      },
      
      closeContactForm: () => {
        set({
          isContactFormOpen: false,
          currentContactId: null,
        });
      },

      // Interaction form
      openInteractionForm: (contactId, interactionId) => {
        set({
          isInteractionFormOpen: true,
          currentContactId: contactId,
          currentInteractionId: interactionId || null,
        });
      },
      
      closeInteractionForm: () => {
        set({
          isInteractionFormOpen: false,
          currentInteractionId: null,
        });
      },

      // Delete modal
      openDeleteModal: (contactId, interactionId) => {
        set({
          isDeleteModalOpen: true,
          currentContactId: contactId || null,
          currentInteractionId: interactionId || null,
        });
      },
      
      closeDeleteModal: () => {
        set({
          isDeleteModalOpen: false,
          currentContactId: null,
          currentInteractionId: null,
        });
      },

      // Theme
      toggleDarkMode: () => {
        set((state) => ({
          darkMode: !state.darkMode,
        }));
      },
    }),
    {
      name: 'ui-store',
    }
  )
);