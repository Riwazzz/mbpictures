// Content service to abstract data fetching; currently reads from local constants.
// Swap implementations later to call backend APIs without changing components.

import { portfolioItems, services, socialLinks, heroVideo } from "../constants/data";

export async function fetchContent() {
  // Simulate async to match future API shape
  return Promise.resolve({
    hero: { videoUrl: heroVideo },
    portfolio: { items: portfolioItems },
    services: { items: services },
    footer: { socialLinks },
  });
}


