# CrediKhaata

**CrediKhaata** is a responsive React + TypeScript web application for small shopkeepers to track credit sales, manage customers, record repayments, and view outstanding balances all from a single dashboard. It features username/password login (via [DummyJSON Auth](https://dummyjson.com/docs/auth)), dynamic customer cards, PDF export, toast notifications, and a dark/light theme toggle.

---

## 📂 Features

- **Authentication**
  - **Login** via DummyJSON Auth API  
    - **Endpoint:** `POST https://dummyjson.com/auth/login`  
    - **Request Body:**  
      ```json
      {
        "username": "emilys",
        "password": "emilyspass"
      }
      ```
    - **Response:** Returns an `accessToken`, `refreshToken`, and user info  
  - **Sign-Up** (mocked)  
    - Client-side form that simulates account creation (no real backend call)  
  
- **Dashboard**  
  - List of customers with name, balance, next‐due date, and status  
  - Highlight overdue entries  
  - Click a row to view a customer’s detail card in the same layout  
- **Customer Detail Card**  
  - Previous/Next navigation between customers  
  - Shows contact info, address, join date, total credit, balance, next‐due date  
  - Transactions list (loans & repayments)  
  - “Export PDF” button to download a styled report via `jsPDF` + `jspdf-autotable`  
- **Forms**  
  - Add Customer  
  - Add Loan  
  - Record Repayment  
- **UI/UX**  
  - Modern Tailwind CSS v3 design (mobile‐responsive)  
  - Dark/light theme toggle (state persisted in `localStorage`)  
  - Sidebar + Header navigation with MUI icons  
  - Toast notifications via [Sonner](https://github.com/phntmxyz/sonner)  
  - Loading spinner on login (react-spinners)  

---

## 🛠 Tech Stack

- **Framework:** React 18 + Vite  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS v3 (+ `dark:` variants)  
- **Routing:** React Router v7  
- **HTTP Client:** Axios  
- **Toasts:** Sonner  
- **PDF Export:** jsPDF & jspdf-autotable  
- **Icons:** Material-UI Icons  
- **Mock Auth:** DummyJSON

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Yogesh01000100/CrediKhaata.git
   cd credikhaata

2. **Install dependencies**

    ```
    npm install
3. **Run project**

    ```
    npm run dev