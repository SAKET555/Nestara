# 🏡 Nestara: The Future of Real Estate

> **"Crazy Creative" Real Estate Platform** featuring immersive 3D experiences, glassmorphic UI, and seamless property management.

![Project Status](https://img.shields.io/badge/Status-Development-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Immersive Experience
-   **3D Hero Section**: A procedurally assembled "Rotating House" model built with `Three.js` and `@react-three/fiber` that greets users on the landing page.
-   **Cinematic Animations**: Scroll-triggered reveals, staggered text entrances, and smooth transitions powered by `framer-motion`.
-   **Glassmorphism**: A modern, translucent design language used across the Search Bar, Dashboard, and Property Cards.
-   **Mesh Gradients**: subtle, breathing background gradients that add depth and premium feel.

### 🔐 Authentication (Supabase)
-   **Secure Mock Auth**: Full Email/Password login flows using Supabase Auth.
-   **Social Login UI**: Beautifully styled buttons for Google, Facebook, and Apple authentication.
-   **Split-Screen Design**: A premium Login/Signup page featuring a testimonial slider and "Ken Burns" effect background.

### 📊 Interactive Dashboard
-   **Sidebar Layout**: A collapsible, app-like navigation bar.
-   **Smart Stats**: Glass stats cards with trend indicators (e.g., "+12% Market Value").
-   **Activity Feed**: A timeline view of your recent property views and interactions.
-   **Personalization**: Dynamic "Good Morning" greeting based on local time.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, Vite |
| **Styling** | TailwindCSS, DaisyUI, Lucide Icons |
| **Animation** | Framer Motion |
| **3D / WebGL** | Three.js, React Three Fiber, Drei |
| **Backend / Auth** | Supabase (PostgreSQL, GoTrue) |
| **State Management** | React Context API |

---

## 🚀 Getting Started

### Prerequisites
-   Node.js (v16+)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/nestara.git
    cd nestara
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 📸 Screenshots

| Landing Page | Dashboard |
|:---:|:---:|
| *Glass Search & 3D House* | *Sidebar & Stats Cards* |
| ![Landing Mock](https://via.placeholder.com/400x200?text=Landing+Page+Preview) | ![Dashboard Mock](https://via.placeholder.com/400x200?text=Dashboard+Preview) |

---

## 🔮 Future Roadmap

-   [ ] **Advanced Search**: Vector-based semantic search for properties.
-   [ ] **Property Details**: Full 3D walkthroughs of individual listings.
-   [ ] **AI Chatbot**: Real-time assistance for property queries.
-   [ ] **Payment Integration**: Stripe integration for booking viewings.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
