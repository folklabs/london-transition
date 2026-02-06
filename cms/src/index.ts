import type { Core } from '@strapi/strapi';
import { initiativesWithSlugs } from '../scripts/seed-initiatives';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Configure public permissions for initiatives API
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      // Find or create permissions for initiative API
      const permissions = await strapi
        .query('plugin::users-permissions.permission')
        .findMany({
          where: {
            role: publicRole.id,
            action: {
              $in: ['api::initiative.initiative.find', 'api::initiative.initiative.findOne'],
            },
          },
        });

      // If permissions don't exist, create them
      if (permissions.length === 0) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::initiative.initiative.find',
            role: publicRole.id,
          },
        });
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::initiative.initiative.findOne',
            role: publicRole.id,
          },
        });
        console.log('✅ Public permissions for Initiative API created');
      }
    }

    // Seed initiatives if none exist
    const existingCount = await strapi.query('api::initiative.initiative').count();
    
    if (existingCount === 0) {
      console.log('🌱 Seeding initiatives...');
      
      for (const initiative of initiativesWithSlugs) {
        await strapi.query('api::initiative.initiative').create({
          data: {
            ...initiative,
            publishedAt: new Date(), // Auto-publish
          },
        });
      }
      
      console.log(`✅ Seeded ${initiativesWithSlugs.length} initiatives`);
    } else {
      console.log(`ℹ️  Found ${existingCount} existing initiatives, skipping seed`);
    }
  },
};
