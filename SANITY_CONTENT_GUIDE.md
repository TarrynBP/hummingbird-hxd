# Sanity Content Management Guide

This guide will help you add content to your HummingBird HXD website through the Sanity Studio.

## 🚀 **Accessing Sanity Studio**

1. **Start the Sanity Studio**:

   ```bash
   cd sanity
   npm run dev
   ```

2. **Open in Browser**: Go to `http://localhost:3333`

3. **Login**: Use your Sanity account credentials

## 📝 **Adding Content**

### **1. Hero Section Content**

1. Go to **"Hero Section"** in the sidebar
2. Click **"Create"** to add new hero content
3. Fill in the fields:
   - **Title**: "Design for humanity"
   - **Subtitle**: "Human Experience Design"
   - **Description**: Your hero description
   - **CTA Button Text**: "Get Started"
   - **CTA Button Link**: "/contact"
   - **Background Image**: (Optional) Upload an image

### **2. Services**

1. Go to **"Service"** in the sidebar
2. Click **"Create"** for each service
3. Fill in the fields:
   - **Title**: Service name (e.g., "Launch with Purpose")
   - **Description**: Service description
   - **Icon Name**: Lucide icon name (e.g., "Rocket", "Monitor")
   - **Features**: Add each feature as a separate item
   - **Price**: (Optional) Pricing information
   - **Display Order**: Number for ordering (1, 2, 3, 4)

**Example Services to Add**:

- Launch with Purpose (Icon: Rocket)
- Simplify Your Workflow (Icon: RefreshCw)
- Get Set Online (Icon: Monitor)
- Grow with AI (Icon: Lightbulb)

### **3. Testimonials**

1. Go to **"Testimonial"** in the sidebar
2. Click **"Create"** for each testimonial
3. Fill in the fields:
   - **Client Name**: Customer name
   - **Company**: Company name
   - **Testimonial Content**: The testimonial text
   - **Avatar Image**: (Optional) Customer photo
   - **Rating**: Number from 1-5
   - **Display Order**: Number for ordering

**Example Testimonials**:

- Gulzaar Parker from Africa Wellness
- Nadine Agrionov from Rugal
- Enrique Fourie from Enrique Fourie Hair and Makeup

### **4. Portfolio Items**

1. Go to **"Portfolio Item"** in the sidebar
2. Click **"Create"** for each portfolio item
3. Fill in the fields:
   - **Project Title**: Project name
   - **Description**: Project description
   - **Category**: Project category
   - **Theme Color**: CSS color (e.g., "#10B981", "#8B5CF6")
   - **Key Features**: Add each feature
   - **Projected Results**: Add each result
   - **Project Image**: (Optional) Project screenshot
   - **URL Slug**: URL-friendly version of title
   - **Display Order**: Number for ordering

**Example Portfolio Items**:

- Telecoms X (slug: telecoms-x)
- Banking X (slug: banking-x)
- Enrique Fourie (slug: enrique-fourie)
- Yoursashwindows.com (slug: yoursashwindows)

### **5. Case Studies**

1. Go to **"Case Study"** in the sidebar
2. Click **"Create"** for each case study
3. Fill in all the same fields as Portfolio Items, plus:
   - **Challenge**: The problem statement
   - **Solution**: How you solved it
   - **Design Process**: Your process description
   - **Results**: Final results
   - **Key Metrics**: Add metrics with labels and values
   - **Color Palette**: Add colors with names and hex values
   - **User Research**: Research findings
   - **Design Process**: Detailed process

### **6. Values**

1. Go to **"Value"** in the sidebar
2. Click **"Create"** for each value
3. Fill in the fields:
   - **Title**: Value name
   - **Description**: Value description
   - **Icon Name**: Lucide icon name
   - **Display Order**: Number for ordering

**Example Values**:

- Digital and AI First (Icon: Heart)
- Emotional Connection (Icon: MessageCircle)
- Collaborative Process (Icon: Users)
- Excellence Driven (Icon: Trophy)

### **7. Team Members**

1. Go to **"Team Member"** in the sidebar
2. Click **"Create"** for each team member
3. Fill in the fields:
   - **Name**: Team member name
   - **Role/Position**: Job title
   - **Description**: Bio/description
   - **Avatar Image**: (Optional) Profile photo
   - **Social Links**: LinkedIn, Twitter, Email
   - **Display Order**: Number for ordering

## 🔄 **Content Updates**

- **Edit**: Click on any content item to edit it
- **Delete**: Use the delete button in the editor
- **Reorder**: Use the "Display Order" field to control order
- **Publish**: Changes are automatically saved and published

## 🎨 **Tips for Better Content**

1. **Images**: Use high-quality images (recommended: 1200x800px)
2. **Colors**: Use hex codes for consistent colors
3. **Icons**: Use exact Lucide React icon names
4. **Ordering**: Use sequential numbers (1, 2, 3, 4) for display order
5. **Slugs**: Use lowercase, hyphenated URLs (e.g., "telecoms-x")

## 🚀 **Testing Your Content**

1. **Save** your content in Sanity Studio
2. **Refresh** your React app (`http://localhost:8080`)
3. **Check** that content appears correctly
4. **Test** navigation and interactions

## 📱 **Mobile Preview**

- Sanity Studio works great on mobile
- Test your content on different screen sizes
- Use the responsive preview in your browser

## 🔧 **Troubleshooting**

- **Content not showing**: Check that items are published
- **Images not loading**: Verify image uploads completed
- **Icons not displaying**: Check icon names match Lucide React
- **Ordering issues**: Verify display order numbers

Your website will automatically use Sanity content when available, and fall back to the hardcoded content when Sanity data isn't present.
