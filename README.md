# Mini-CRM: Contact & Interaction Management System

# 🧩 Contact & Interaction Mini‑CRM

## Project Overview
The Contact & Interaction Mini-CRM is a web application designed to help users manage a list of contacts and log interaction notes. Built with Next.js, React, Zustand, and Tailwind CSS, this project demonstrates modern web development practices, including state management, responsive design, and accessibility.


## Technologies Used
- **Next.js** (App Router)
- **React** (Hooks)
- **Zustand** (State Management)
- **Tailwind CSS** (Styling)
- **LocalStorage** (Data Persistence)

- ## ✨ Features

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

## 📸 Homepage Preview
![Screenshot 2025-05-06 071016](https://github.com/user-attachments/assets/810edc6e-793f-4504-81f8-49daa1ba8e81)

### 🧾 Contact Detail 
![Screenshot 2025-05-06 065748](https://github.com/user-attachments/assets/8b7bb223-465c-488b-aefb-ece132ab4a1b)

### 📋 Contact List Page
![Screenshot 2025-05-06 065755](https://github.com/user-attachments/assets/3ad83d3c-491c-4802-94e6-fd7c2e7d1f1b)

### 🌙 Dark Mode Enabled
![Screenshot 2025-05-06 065847](https://github.com/user-attachments/assets/0a6ebf37-c102-4fba-be0f-cd2416aaf480)


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

- **GitHub Repo**: [https://github.com/krishkushwaha11/CRM_Project)
- **Demo URL**: [https://contact-mini-crm.vercel.app](https://contact-mini-crm.vercel.app)
- **Loom Video**: [https://www.loom.com/share/a536fd68a2aa4a12963452e39b4ac131?sid=583ecc80-bd3e-4161-8382-937fefe14954)

---

## 📄 License

This project is for educational/demo purposes only.

