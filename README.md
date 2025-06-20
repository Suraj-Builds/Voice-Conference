# Voice-Conference

A modern voice conferencing web application built with React and TypeScript.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system. You can install Node.js using [nvm](https://github.com/nvm-sh/nvm) for better version management.

### Installation

Follow these steps to set up the project locally:

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` with hot-reloading enabled.

## Technologies Used

This project is built with modern web technologies:

* **Vite** - Fast build tool and development server
* **TypeScript** - Type-safe JavaScript
* **React** - UI library for building user interfaces
* **shadcn/ui** - Reusable UI components
* **Tailwind CSS** - Utility-first CSS framework

## Development

### Available Scripts

* `npm run dev` - Start the development server
* `npm run build` - Build the project for production
* `npm run preview` - Preview the production build locally
* `npm run lint` - Run ESLint to check code quality

### Code Editing

You can edit this project using any of these methods:

**Local Development (Recommended)**
* Clone the repository and work with your preferred IDE
* All changes should be committed and pushed to the main branch

**GitHub Web Editor**
* Navigate to any file in the repository
* Click the "Edit" button (pencil icon)
* Make changes and commit directly through the web interface

**GitHub Codespaces**
* Click the "Code" button on the repository main page
* Select "Codespaces" tab
* Click "New codespace" to launch a cloud development environment
* Edit files and commit changes directly in the browser

## Deployment

The application can be deployed to any static hosting service that supports modern web applications:

* **Vercel** - Connect your GitHub repository for automatic deployments
* **Netlify** - Drag and drop build folder or connect via Git
* **GitHub Pages** - Use GitHub Actions for automated deployment
* **Firebase Hosting** - Deploy using Firebase CLI

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files ready for deployment.
