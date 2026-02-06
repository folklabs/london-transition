/**
 * Seed script to import initiatives into Strapi
 * Run with: npx ts-node scripts/seed-initiatives.ts
 * Or after starting Strapi, use the admin UI to run bootstrap
 */

export const initiatives = [
  { name: "Belsize", website: "https://www.transitionbelsize.org.uk/", status: "unknown" },
  { name: "Bethnal Green", website: "https://www.bethnalgreentransition.org/", status: "unknown" },
  { name: "Bloomsbury", website: "https://www.transitionbloomsbury.org.uk/", status: "unknown" },
  { name: "Brentford", website: "https://transitionbrentford.wordpress.com/", status: "unknown" },
  { name: "Brixton", website: "https://www.transitiontownbrixton.org/", status: "unknown" },
  { name: "Brockley/Lewisham", website: "https://transitionbrockley.blogspot.com/", status: "unknown" },
  { name: "Chiswick", website: "https://www.chiswicktransition.org/", status: "unknown" },
  { name: "Crouch End", website: "https://www.transitioncrouchend.org.uk/", status: "unknown" },
  { name: "Crystal Palace", website: "https://www.crystalpalacetransition.org.uk/", status: "unknown" },
  { name: "Dartmouth Park", website: "https://www.transitiondartmouthpark.org.uk/", status: "unknown" },
  { name: "Ealing", website: "https://www.ealingtransition.org.uk/", status: "unknown" },
  { name: "Finsbury Park", website: "https://www.transitionfinsburypark.org.uk/", status: "unknown" },
  { name: "Hackney", website: "https://tthackney.ning.com/", status: "unknown" },
  { name: "Haringey", website: "https://sustainable-haringey.wikispaces.com/", status: "unknown" },
  { name: "Heathrow", website: "https://www.transitionheathrow.com/", status: "unknown" },
  { name: "Highbury", website: "https://transitionhighbury.org.uk/", status: "unknown" },
  { name: "Highgate", website: "https://transitionhighgate.org/", status: "unknown" },
  { name: "Hyde Farm", website: "https://www.energyshare.com/hyde-farm-climate-action-network", status: "unknown" },
  { name: "Kensal to Kilburn", website: "https://ttkensaltokilburn.ning.com/", status: "unknown" },
  { name: "Kentish Town", website: "https://www.transitionkentishtown.org.uk/", status: "unknown" },
  { name: "Kingston", website: "https://www.ttkingston.org/", status: "unknown" },
  { name: "Leytonstone", website: "https://www.transitionleytonstone.org.uk/", status: "unknown" },
  { name: "New Cross", website: "https://www.transitionnewcross.org/", status: "unknown" },
  { name: "Peckham and Nunhead", website: "https://www.transitiontownpeckham.org/", status: "unknown" },
  { name: "Penge", website: "https://www.transitionpenge.org.uk/", status: "unknown" },
  { name: "Primrose Hill", website: "https://www.transitionprimrosehill.org/", status: "unknown" },
  { name: "Streatham", website: "https://www.transitionstreatham.org/", status: "unknown" },
  { name: "Stoke Newington", website: "https://www.ttstokenewington.org.uk/", status: "unknown" },
  { name: "Tooting", website: "https://transitiontowntooting.blogspot.com/", status: "unknown" },
  { name: "Tottenham", website: "https://sustottenham.wikispaces.com/", status: "unknown" },
  { name: "Tufnell Park", website: "https://www.transitiontufnellpark.org.uk/", status: "unknown" },
  { name: "Waltham Forest", website: "https://www.transitionwf.org/", status: "unknown" },
  { name: "Walthamstow", website: "https://transitionwalthamstow.org.uk/", status: "unknown" },
  { name: "Wanstead", website: "https://www.transitionwanstead.org.uk/", status: "unknown" },
  { name: "Wandsworth", website: "https://ttwandsworth.wordpress.com/", status: "unknown" },
  { name: "Westcombe", website: "https://transitionwestcombe.blogspot.com/", status: "unknown" },
  { name: "Willesden", website: "https://transitionwillesden.org.uk/", status: "unknown" },
  { name: "Wimbledon", website: "https://www.projectdirt.com/group/TransitionTownWimbledon", status: "unknown" },
];

// Helper to generate slug from name
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Export with slugs for use in bootstrap
export const initiativesWithSlugs = initiatives.map(init => ({
  ...init,
  slug: slugify(init.name),
}));

export default initiatives;
