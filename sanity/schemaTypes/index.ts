// Import our custom schemas
import { heroSchema } from './hero';
import { serviceSchema } from './service';
import { servicePackageSchema } from './servicePackage';
import { testimonialSchema } from './testimonial';
import { caseStudySchema } from './caseStudy';
import { valueSchema } from './value';
import { teamMemberSchema } from './teamMember';
import { siteSettingsSchema } from './siteSettings';

// Import default schemas (keep for reference)
import author from './author';
import blockContent from './blockContent';
import category from './category';
import post from './post';

// Export our custom schemas as the main schemaTypes
export const schemaTypes = [
  heroSchema,
  serviceSchema,
  servicePackageSchema,
  testimonialSchema,
  caseStudySchema,
  valueSchema,
  teamMemberSchema,
  siteSettingsSchema,
  // Keep default schemas for reference
  author,
  blockContent,
  category,
  post,
];
