# CHELNOX | Marchel Karuna Kwee - Portfolio

Modern web portfolio for Marchel Karuna Kwee (Chelnox), built with Next.js and Tailwind CSS.

## Features

- ✅ **Modern Design**: 3D animated background, glassmorphism, and responsive layout.
- ✅ **Dark/Light Mode**: Full theme support with toggle.
- ✅ **Interactive**: Scroll animations, flip cards, and dynamic navigation.
- ✅ **SSO Integration**: Direct login link to the CHELNOX SSO system.
- ✅ **Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## SSO Integration

This portfolio connects to the [CHELNOX SSO](https://chelnox-sso.vercel.app) system via the "LOGIN" menu item in the navigation bar.

To update the SSO URL:
1. Open `src/components/Navbar.tsx`
2. Find the `navLinks` array
3. Update the `href` for the LOGIN item

## Deployment

Deployed on Vercel.

## License

MIT
