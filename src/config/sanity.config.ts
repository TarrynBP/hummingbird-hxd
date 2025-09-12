// Sanity Configuration
// Copy this to your .env file and update with your actual Sanity project details

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'hquuom5o',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  token: import.meta.env.VITE_SANITY_TOKEN, // Optional, for write operations
};

// Instructions for setup:
// 1. Go to https://sanity.io and create a new project
// 2. Copy your project ID and dataset name
// 3. Create a .env file in your project root with:
//    VITE_SANITY_PROJECT_ID=your-actual-project-id
//    VITE_SANITY_DATASET=production
//    VITE_SANITY_TOKEN=your-token (optional)
