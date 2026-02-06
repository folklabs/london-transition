/**
 * Strapi API client for fetching initiative data
 * Updated for Strapi v5 flat response structure
 */

export interface Initiative {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  website: string | null;
  status: 'active' | 'inactive' | 'unknown';
  borough: string | null;
  description: string | null;
  latitude: number | null;
  longitude: number | null;
  rssFeedUrl: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

/**
 * Fetch all initiatives from Strapi
 */
export async function getInitiatives(): Promise<Initiative[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/initiatives?sort=name:asc&pagination[pageSize]=100`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const json: StrapiResponse<Initiative[]> = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch initiatives from Strapi:', error);
    return [];
  }
}

/**
 * Fetch a single initiative by slug
 */
export async function getInitiativeBySlug(slug: string): Promise<Initiative | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/initiatives?filters[slug][$eq]=${slug}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const json: StrapiResponse<Initiative[]> = await response.json();
    return json.data[0] || null;
  } catch (error) {
    console.error(`Failed to fetch initiative ${slug} from Strapi:`, error);
    return null;
  }
}

/**
 * Filter initiatives by status
 */
export function filterByStatus(
  initiatives: Initiative[],
  status: 'active' | 'inactive' | 'unknown'
): Initiative[] {
  return initiatives.filter(i => i.status === status);
}
