import { v4 as uuidv4 } from 'uuid';
import { Contact, Interaction } from '@/store/types';

// Generate random date between start and end
const randomDate = (start: Date, end: Date): string => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
};

// Create sample contacts
export const generateMockContacts = (count: number = 10): Contact[] => {
  const tags = [
    'client', 'lead', 'vendor', 'partner', 'inactive', 
    'sales', 'support', 'vip', 'new', 'potential'
  ];
  
  return Array.from({ length: count }, (_, i) => {
    const id = uuidv4();
    const createdAt = randomDate(new Date(2022, 0, 1), new Date());
    const updatedAt = randomDate(new Date(createdAt), new Date());
    
    return {
      id,
      name: `Contact ${i + 1}`,
      email: `contact${i + 1}@example.com`,
      phone: `+1 ${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
      company: Math.random() > 0.3 ? `Company ${i + 1}` : undefined,
      tags: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => tags[Math.floor(Math.random() * tags.length)]
      ).filter((v, i, a) => a.indexOf(v) === i), // Remove duplicates
      createdAt,
      updatedAt,
    };
  });
};

// Create sample interactions
export const generateMockInteractions = (contacts: Contact[], count: number = 30): Interaction[] => {
  const types: Array<'call' | 'email' | 'meeting' | 'note'> = ['call', 'email', 'meeting', 'note'];
  
  const callContents = [
    'Discussed new contract terms',
    'Left voicemail about upcoming meeting',
    'Scheduled follow-up meeting',
    'Inquired about product pricing'
  ];
  
  const emailContents = [
    'Sent proposal document',
    'Responded to support inquiry',
    'Shared meeting minutes',
    'Sent invoice and payment details'
  ];
  
  const meetingContents = [
    'Quarterly review meeting',
    'Initial project kickoff',
    'Product demonstration',
    'Contract negotiation'
  ];
  
  const noteContents = [
    'Client mentioned interest in premium plan',
    'Should follow up next month',
    'Prefers communication by email',
    'Referred by existing client'
  ];
  
  const contentsByType = {
    call: callContents,
    email: emailContents,
    meeting: meetingContents,
    note: noteContents,
  };
  
  return Array.from({ length: count }, () => {
    const contactIndex = Math.floor(Math.random() * contacts.length);
    const type = types[Math.floor(Math.random() * types.length)];
    const contents = contentsByType[type];
    const content = contents[Math.floor(Math.random() * contents.length)];
    
    return {
      id: uuidv4(),
      contactId: contacts[contactIndex].id,
      type,
      content,
      createdAt: randomDate(new Date(2022, 0, 1), new Date()),
    };
  });
};