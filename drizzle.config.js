/* eslint-disable import/no-anonymous-default-export */
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-mock-interview_owner:jzwlCL4O1VPJ@ep-mute-firefly-a5i4ym98.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
  },
});

// /** @type { import("drizzle-kit").Config } */

// export default {
//     schema: './utils/schema.js',
//     dialect: 'postgresql',
//     dbCredentials: {
//         url: 'postgresql://ai-mock-interview_owner:jzwlCL4O1VPJ@ep-mute-firefly-a5i4ym98.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
// }
// }