# Mini-CRM: Contact & Interaction Management System

# 🧩 Contact & Interaction Mini‑CRM

A modern, responsive mini-CRM web app built with **Next.js (App Router)**, **React Hooks**, **Zustand**, and **Tailwind CSS**. It allows users to manage a list of contacts, add interaction notes, search, filter, and persist data—all within a sleek, accessible UI.

---

## 🚀 Live Demo

🔗 [View on Vercel](https://your-vercel-deploy-url.vercel.app)

🎥 [Loom Walkthrough Video](https://loom.com/share/your-video-link)

---

## 🧱 Tech Stack

- [Next.js 14+](https://nextjs.org/) (App Router)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Zustand](https://zustand-demo.pmnd.rs/) with `persist` middleware
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/) for package management

---

## ✨ Features

| Feature         | Description |
|----------------|-------------|
| **Routing**     | `/contacts` lists all contacts with pagination. `/contacts/[id]` shows full contact details. |
| **CRUD**        | Add, update, delete contacts and log per-contact interaction notes. |
| **State Management** | All UI and data state are managed using Zustand. |
| **Persistence** | Zustand state is persisted to `localStorage`. Survives page refresh. |
| **Search & Filter** | Real-time full-text search and tag-based filtering on the contact list. |
| **Responsive UI** | Fully responsive down to 375px width. |
| **Dark Mode**   | Toggle for light/dark themes. |
| **Accessibility** | Semantic HTML, ARIA roles, and keyboard navigability included. |

---

## 🗂️ Project Structure

```
📦 app/
 ┣ 📂 contacts/       # Routes: /contacts, /contacts/[id]
 ┣ 📂 components/     # UI components (Cards, Modals, Forms)
 ┣ 📂 hooks/          # Custom hooks
 ┣ 📂 lib/            # Utility functions (e.g., search filtering)
 ┣ 📂 store/          # Zustand store (`useContactsStore`)
 ┣ 📂 styles/         # Tailwind + global styles
 ┣ 📄 layout.tsx      # Shared layout (includes dark mode, header)
 ┗ 📄 page.tsx        # Home redirect or intro page
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/contact-mini-crm.git
   cd contact-mini-crm
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**

   Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Architecture Decisions

- **Zustand over Context or Redux**: Simple and performant state management with minimal boilerplate.
- **App Router**: Takes advantage of the new file-based routing and layout features in Next.js 14+.
- **Tailwind CSS**: Ensures rapid UI styling with full responsiveness and dark mode built-in.
- **Persistence**: Zustand's `persist` middleware saves to localStorage for offline-like experience.

---

## ⚖️ Trade-offs

| Trade-off | Notes |
|----------|-------|
| **LocalStorage vs API** | LocalStorage simplifies state handling but does not simulate real async behavior. Stretch goal includes REST API simulation. |
| **Pagination** | Currently implemented client-side due to in-memory store. |
| **Testing** | Minimal unit tests due to time constraints; added test coverage would improve reliability. |

---

## 📈 Stretch Goals (Partial/Future Work)

- ✅ **Dark mode toggle**
- 🟡 **Infinite Scroll with IntersectionObserver**
- 🟡 **API Routes with mock backend**
- ❌ **Unit Tests with Jest**
- ❌ **GitHub Actions CI/CD**

---

## 📸 Screenshots

### 📋 Contact List Page
![Contacts List](https://your-screenshot-url.com/list.png)

### 🧾 Contact Detail with Notes
![Contact Detail](https://your-screenshot-url.com/detail.png)

### 🌙 Dark Mode Enabled
![Dark Mode](https://your-screenshot-url.com/darkmode.png)

---

## ✅ Definition of Done Checklist

- [x] Core features (CRUD, routing, state) working
- [x] Zustand + localStorage persistence
- [x] Responsive and accessible UI
- [x] Search and filter functional
- [x] Deployed to Vercel
- [x] Video walkthrough and documentation included

---

## 📬 Submission

- **GitHub Repo**: [https://github.com/yourusername/contact-mini-crm](https://github.com/yourusername/contact-mini-crm)
- **Demo URL**: [https://contact-mini-crm.vercel.app](https://contact-mini-crm.vercel.app)
- **Loom Video**: [https://loom.com/share/your-video-link](https://loom.com/share/your-video-link)

---

## 📄 License

This project is for educational/demo purposes only.

---

# Contact & Interaction Mini-CRM

![Your Name](https://your-photo-url.com/photo.jpg)

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Architecture Decisions](#architecture-decisions)
- [Trade-offs](#trade-offs)
- [Live Demo](#live-demo)
- [Loom Video Walkthrough](#loom-video-walkthrough)
- [License](#license)

## Project Overview
The Contact & Interaction Mini-CRM is a web application designed to help users manage a list of contacts and log interaction notes. Built with Next.js, React, Zustand, and Tailwind CSS, this project demonstrates modern web development practices, including state management, responsive design, and accessibility.

## Technologies Used
- **Next.js** (App Router)
- **React** (Hooks)
- **Zustand** (State Management)
- **Tailwind CSS** (Styling)
- **LocalStorage** (Data Persistence)

## Features
### Must-Have
1. **Routing**: 
   - `/contacts` shows a paginated list of contacts.
   - `/contacts/[id]` shows detailed information for a specific contact.
   
2. **CRUD Operations**: 
   - Users can Create, Read, Update, and Delete contacts and their interaction notes.

3. **State Management**: 
   - All contact data and UI flags are managed using Zustand.

4. **Persistence**: 
   - Data is persisted in localStorage, allowing it to reload after a refresh.

5. **Search & Filter**: 
   - Full-text search bar and tag filter for instantaneous filtering of contacts.

6. **Responsive UI**: 
   - Tailwind-styled layout adapts down to 375px width, including a dark-mode toggle.

7. **Accessibility**: 
   - Keyboard-navigable modals/forms, semantic HTML, and basic ARIA labels.

### Nice-to-Have (Stretch Goals)
- **API Routes**: Mocked REST endpoints under `/api/contacts`.
- **SSR/SSG**: Pre-render contacts list using `generateStaticParams`.
- **Infinite Scroll**: Lazy-load more contacts via IntersectionObserver.
- **Unit Tests**: Jest + React Testing Library for store logic & at least one UI component.
- **CI**: GitHub Actions workflow for linting & testing.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-mini-crm.git
   cd contact-mini-crm

## 🙌 Acknowledgements

Thanks to the reviewing team for the opportunity!  
Made with ❤️ using Zustand, Tailwind, and Next.js.

