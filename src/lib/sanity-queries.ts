// Common Sanity queries for the website

// Query to get all case studies
export const caseStudiesQuery = `
  *[_type == "caseStudy"] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    category,
    client,
    duration,
    team,
    platforms,
    overview,
    problemStatement,
    challenge,
    solution,
    features,
    results,
    colorPalette[] {
      color,
      name,
      psychology,
      usage
    },
    userPersonas[] {
      name,
      age,
      goals,
      painPoints,
      behavior
    },
    designProcess[] {
      step,
      title,
      description,
      icon
    },
    lessonsLearned,
    nextSteps,
    clientFeedback {
      quote,
      author,
      role,
      details
    },
    "services": services[]->{
      title,
      description,
      icon,
      color
    },
    publishedAt
  } | order(publishedAt desc)
`

// Query to get a single case study by slug
export const caseStudyBySlugQuery = (slug: string) => `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    category,
    client,
    duration,
    team,
    platforms,
    overview,
    problemStatement,
    challenge,
    solution,
    features,
    results,
    colorPalette[] {
      color,
      name,
      psychology,
      usage
    },
    userPersonas[] {
      name,
      age,
      goals,
      painPoints,
      behavior
    },
    designProcess[] {
      step,
      title,
      description,
      icon
    },
    lessonsLearned,
    nextSteps,
    clientFeedback {
      quote,
      author,
      role,
      details
    },
    "services": services[]->{
      title,
      description,
      icon,
      color
    },
    body,
    publishedAt
  }
`

// Query to get all articles
export const articlesQuery = `
  *[_type == "article"] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    publishedAt,
    author,
    category,
    tags,
    "body": body[0...200]
  } | order(publishedAt desc)
`

// Query to get a single article by slug
export const articleBySlugQuery = (slug: string) => `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    publishedAt,
    author,
    category,
    tags,
    body
  }
`

// Query to get site settings/configuration
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    "logo": logo.asset->url,
    contactEmail,
    contactPhone,
    socialLinks {
      twitter,
      linkedin,
      instagram,
      github
    }
  }
`

// Query to get services
export const servicesQuery = `
  *[_type == "service"] {
    _id,
    title,
    description,
    icon,
    color,
    order
  } | order(order asc)
`

// Query to get testimonials
export const testimonialsQuery = `
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    company,
    content,
    rating,
    "avatar": avatar.asset->url,
    featured
  } | order(featured desc, _createdAt desc)
`

// Query to get team members
export const teamQuery = `
  *[_type == "teamMember"] {
    _id,
    name,
    role,
    bio,
    "avatar": avatar.asset->url,
    socialLinks {
      linkedin,
      twitter,
      github,
      portfolio
    },
    skills,
    order
  } | order(order asc)
`

// Query to get featured case studies
export const featuredCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    category,
    client,
    results
  }
`

// Query to get case studies by category
export const caseStudiesByCategoryQuery = (category: string) => `
  *[_type == "caseStudy" && category == $category] {
    _id,
    title,
    slug,
    description,
    "mainImage": mainImage.asset->url,
    category,
    client,
    duration,
    results
  } | order(publishedAt desc)
`

// Query to get all categories
export const categoriesQuery = `
  *[_type == "caseStudy"] {
    category
  } | order(category asc)
`
