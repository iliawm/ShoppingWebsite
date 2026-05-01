🛍️ ShoppingWebsite – Modern Full‑Stack E‑Commerce Platform
A modern, full‑stack e‑commerce application built with Next.js 16, React 19, and MongoDB. ShoppingWebsite delivers a complete online shopping experience — from browsing products and managing a cart to handling user authentication and providing a dedicated admin panel for store management. Built with a clean, responsive UI using Tailwind CSS 4 and smooth animations powered by Motion, it separates user‑facing and administrative interfaces for a scalable architecture.

"From product listing to checkout — one seamless experience."

✨ Features
🛒 User‑Facing Storefront
Product browsing – categorized product pages with search & filter

Shopping cart & checkout – add, update, and remove items; proceed to order

User authentication – sign‑up, login, and protected routes (Better Auth)

Blog / Posts – content section for news, guides, or promotions

Responsive design – Tailwind CSS 4, fully mobile‑first

⚙️ Admin Panel
Dashboard – overview of orders, users, and inventory

Product management – create, edit, and delete products

Post management – write and publish blog posts

Category management – organise products with dynamic categories

🎨 UI & Performance
Smooth animations and page transitions (Motion)

Optimized with Next.js server‑side rendering and static generation

🛠️ Tech Stack
Category	Technology
Framework	Next.js 16 (App Router)
UI Library	React 19
Language	TypeScript 5
Styling	Tailwind CSS 4
Database	MongoDB + Mongoose 9
Authentication	Better Auth
Animations	Motion (formerly Framer Motion)
Icons	Lucide React, React Icons
Package Manager	pnpm
Linting	ESLint 9 (Next.js config)

🚀 Getting Started
Prerequisites
Node.js ≥ 18

pnpm (recommended) – install globally with npm i -g pnpm

A running MongoDB instance (local or cloud, e.g. MongoDB Atlas)

1. Clone the Repository
bash
git clone https://github.com/iliawm/ShoppingWebsite.git
cd ShoppingWebsite
2. Install Dependencies
bash
pnpm install
3. Configure Environment Variables
Create a .env.local file in the root:

env
# MongoDB connection string
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/shopping

# Better Auth secret
BETTER_AUTH_SECRET=your-secret-key

# NextAuth / App URL
NEXTAUTH_URL=http://localhost:3000
⚠️ Never commit .env.local to version control.

4. Start the Development Server
bash
pnpm dev
Open http://localhost:3000 in your browser.

📦 Build for Production
bash
pnpm build
pnpm start
🌐 Deployment
The project is pre‑configured for deployment on Vercel:

Push the repository to your GitHub account.

Import the project into Vercel.

Add the required environment variables in the Vercel dashboard.

Deploy!

Live demo: shoppingwebsite-ten.vercel.app

🗺️ Roadmap / Upcoming
Product & post management (admin)

Category navigation with live URL tracking

Shopping cart persistence & checkout flow

Payment integration (Stripe / Razorpay)

Order history & user profiles

AI‑powered product recommendations

Comprehensive test suite (Vitest / Playwright)

🤝 Contributing
Contributions are welcome! This project is still under active development.

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

👤 Author
ILIAWM – github.com/iliawm

Built with ❤️ using Next.js, React, MongoDB, and Tailwind CSS.
