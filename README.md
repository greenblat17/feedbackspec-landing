# FeedbackSpec Landing Page

This is the landing page for FeedbackSpec - the AI-powered feedback engine that helps founders turn scattered feedback into production-ready specifications for Cursor, Claude Code, and GitHub Copilot.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Deployment**: Optimized for Vercel

## Features

- 🎨 Custom design system with premium fonts and smooth animations
- 🚀 Performance optimized with lazy loading and reduced motion support
- 📱 Fully responsive design
- ♿ Accessibility compliant with ARIA labels and keyboard navigation
- 🎭 Interactive components with engaging hover states and animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/
│   ├── FeedbackSpecHeroEnhanced.tsx     # Hero section with live counters
│   ├── ProblemSectionEnhanced.tsx       # Problem identification section
│   ├── FeedbackSpecBenefitsEnhanced.tsx # Benefits and ROI calculator
│   ├── FeedbackWorkflowEnhanced.tsx     # 3-step workflow visualization
│   ├── FeedbackSpecPricingEnhanced.tsx  # Pricing plans
│   ├── FeedbackSpecCTA.tsx              # Call-to-action section
│   ├── FeedbackSpecHeader.tsx           # Navigation header
│   ├── Footer.tsx                       # Footer with links
│   └── ui/                              # Reusable UI components
└── lib/
    ├── design-system.ts  # Design tokens and animation variants
    └── utils.ts          # Utility functions
```

## Design System

The project uses a custom design system with:
- **Colors**: Primary blue with orange/coral accents
- **Typography**: Premium fonts (Clash Display, Geist, Satoshi)
- **Animations**: Smooth, performant animations with reduced motion support
- **Components**: Consistent hover states and interactive feedback

## Content Documentation

See `landing-page-content.md` for detailed content documentation of each section.

## Deployment

The app is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## Environment Variables

No environment variables are required for the landing page.

## License

© 2024 FeedbackSpec. All rights reserved.