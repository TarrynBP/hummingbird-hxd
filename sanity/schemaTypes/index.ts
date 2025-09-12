// Import our custom schemas
import { heroSchema } from './hero';
import { serviceSchema } from './service';
import { testimonialSchema } from './testimonial';
import { portfolioSchema } from './portfolio';
import { caseStudySchema } from './caseStudy';
import { valueSchema } from './value';
import { teamMemberSchema } from './teamMember';

// Import default schemas (keep for reference)
import { author } from './author';
import { blockContent } from './blockContent';
import { category } from './category';
import { post } from './post';

// Export our custom schemas as the main schemaTypes
export const schemaTypes = [
  heroSchema,
  serviceSchema,
  testimonialSchema,
  portfolioSchema,
  caseStudySchema,
  valueSchema,
  teamMemberSchema,
  // Keep default schemas for reference
  author,
  blockContent,
  category,
  post,
];
