# Sanity.io Setup Guide

This guide will help you set up Sanity.io for content management in your HummingBird project.

## 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and sign up/login
2. Click "Create new project"
3. Choose a project name (e.g., "hummingbird-cms")
4. Select a dataset name (e.g., "production")
5. Choose a plan (Free tier is sufficient for development)

## 2. Install Sanity CLI

```bash
npm install -g @sanity/cli
```

## 3. Initialize Sanity in Your Project

```bash
# In your project root
npx sanity init
```

Follow the prompts:

- Choose "Create new project" or "Use existing project"
- Select your project from the list
- Choose "Blog (schema)" as the template (we'll replace it with our custom schemas)
- Confirm the project structure

## 4. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_SANITY_PROJECT_ID=hquuom5o
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your-token-here
```

**Note**: Vite uses `VITE_` prefix for environment variables instead of `REACT_APP_`

**Your Project Details:**

- **Project ID**: `hquuom5o`
- **Organization ID**: `o3rpq1dcI`
- **Project Name**: `Hummingbird HXD`

To get your project ID:

1. Go to your Sanity project dashboard
2. Copy the Project ID from the project settings

To get a token (optional, for write operations):

1. Go to API settings in your Sanity project
2. Create a new token with "Editor" permissions

## 5. Replace Default Schemas

Replace the default schemas in `sanity/schemas/` with our custom schemas:

1. Delete the default schema files
2. Copy our schema files from `src/schemas/` to `sanity/schemas/`
3. Update `sanity/schemas/index.js` to import our schemas:

```javascript
import { schemas } from "../src/schemas";

export default {
  name: "default",
  types: schemas,
};
```

## 6. Start Sanity Studio

```bash
cd sanity
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`

**✅ Your Sanity Studio is now running!**

- **Studio URL**: `http://localhost:3333`
- **Project**: Hummingbird HXD (hquuom5o)
- **Dataset**: production

## 7. Add Content

1. Open the Sanity Studio
2. Create content for each schema:
   - Hero content
   - Services
   - Testimonials
   - Portfolio items
   - Case studies
   - Values
   - Team members

## 8. Deploy Sanity Studio (Optional)

To deploy your Sanity Studio:

```bash
cd sanity
npx sanity deploy
```

This will give you a URL like `https://your-project.sanity.studio`

## 9. Test the Integration

1. Start your React app: `npm run dev`
2. Verify that content is loading from Sanity
3. Check the browser console for any errors

## Schema Structure

Our custom schemas include:

- **Hero**: Main hero section content
- **Service**: Service offerings with icons and descriptions
- **Testimonial**: Client testimonials with ratings
- **Portfolio**: Portfolio items with project details
- **CaseStudy**: Detailed case study content
- **Value**: Company values with icons
- **TeamMember**: Team member profiles

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your Sanity project allows your domain in CORS settings
2. **Missing Content**: Check that you've created content in Sanity Studio
3. **Build Errors**: Ensure all environment variables are set correctly

### Getting Help:

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- [React Query Documentation](https://tanstack.com/query/latest)

## Next Steps

Once Sanity is set up:

1. Add all your content through the Sanity Studio
2. Customize the schemas as needed
3. Set up webhooks for automatic deployments
4. Configure image optimization
5. Set up preview modes for content editors
