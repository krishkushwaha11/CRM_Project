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

## 🙌 Acknowledgements

Thanks to the reviewing team for the opportunity!  
Made with ❤️ using Zustand, Tailwind, and Next.js.

