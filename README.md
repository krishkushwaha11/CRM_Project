Mini-CRM: Contact & Interaction Management System

# Mini-CRM: Contact & Interaction Management System

<!-- Add your screenshot here - replace 'screenshot.png' with your actual file name -->
![Mini-CRM Screenshot](./screenshot.png)

A Next.js-based mini-CRM application for managing contacts and interaction notes with full CRUD functionality, search/filter capabilities, and persistent state management.

## Features

### Core Features
- 📝 **Contact Management**: Create, read, update, and delete contacts
- ✏️ **Interaction Notes**: Add and manage notes for each contact
- 🔍 **Instant Search**: Full-text search across all contacts
- 🏷️ **Tag Filtering**: Filter contacts by tags
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works on all screen sizes down to 375px
- ♿ **Accessible UI**: Keyboard navigable with proper ARIA labels

### Technical Highlights
- ⚛️ Next.js App Router architecture
- 🏪 Zustand for global state management
- 💾 LocalStorage persistence via Zustand middleware
- 🎨 Tailwind CSS for responsive styling
- 🛡️ Type-safe TypeScript implementation

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- pnpm

### Installation
```bash
git clone https://github.com/your-username/mini-crm.git
cd mini-crm
pnpm install
pnpm dev

