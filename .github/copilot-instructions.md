# AI Assistant Instructions for my-react-third-app

This document provides essential context for AI coding assistants working in this React + Vite project.

## Project Overview

- Modern React application built with Vite for fast development and optimized builds
- Uses React 19.x with modern features like Suspense for data loading
- Application fetches and displays country data from an external API
- ESLint integration for code quality

## Key Architecture Patterns

### Data Fetching
- External API integration with Programming Hero API (`https://openapi.programming-hero.com/api/all`)
- Uses React Suspense for loading states (see `App.jsx`)
- Data fetching is done at the root level using the fetch API

### Component Structure
- Components are organized under `src/components/` with feature-based folders
- Each component has its own directory (e.g., `Countries/Countries.jsx`)
- Main app configuration in `src/App.jsx`

## Development Workflow

### Essential Commands
```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Run ESLint checks
npm run lint

# Preview production build
npm run preview
```

### Project Conventions
- Uses ESM modules (package.json: `"type": "module"`)
- Component files use `.jsx` extension
- Feature-based folder structure for components

## Dependencies & Tooling
- Vite for build tooling and dev server
- React 19.x with latest features
- ESLint with React-specific plugins
  - react-hooks
  - react-refresh

## Common Operations

### Adding New Components
1. Create a new directory under `src/components/`
2. Add component file with `.jsx` extension
3. Follow existing component structure (named exports with default export)

### API Integration
- API calls should be made at the container component level
- Use React Suspense for loading states
- Follow the pattern in `App.jsx` for data fetching