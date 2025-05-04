import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Interaction, InteractionFormData } from './types';

interface InteractionState {
  interactions: Interaction[];
  // CRUD Operations
  addInteraction: (contactId: string, data: InteractionFormData) => void;
  updateInteraction: (id: string, data: InteractionFormData) => void;
  deleteInteraction: (id: string) => void;
  getInteractionById: (id: string) => Interaction | undefined;
  getInteractionsByContactId: (contactId: string) => Interaction[];
}

export const useInteractionStore = create<InteractionState>()(
  persist(
    (set, get) => ({
      interactions: [],

      // CRUD Operations
      addInteraction: (contactId: string, data: InteractionFormData) => {
        const newInteraction: Interaction = {
          id: uuidv4(),
          contactId,
          ...data,
          createdAt: new Date().toISOString(),
        };
        
        set((state) => ({
          interactions: [...state.interactions, newInteraction],
        }));
      },

      updateInteraction: (id: string, data: InteractionFormData) => {
        set((state) => ({
          interactions: state.interactions.map((interaction) =>
            interaction.id === id
              ? {
                  ...interaction,
                  ...data,
                  createdAt: interaction.createdAt,
                }
              : interaction
          ),
        }));
      },

      deleteInteraction: (id: string) => {
        set((state) => ({
          interactions: state.interactions.filter((interaction) => interaction.id !== id),
        }));
      },

      getInteractionById: (id: string) => {
        return get().interactions.find((interaction) => interaction.id === id);
      },

      getInteractionsByContactId: (contactId: string) => {
        return get().interactions
          .filter((interaction) => interaction.contactId === contactId)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
    }),
    {
      name: 'interaction-store',
    }
  )
);