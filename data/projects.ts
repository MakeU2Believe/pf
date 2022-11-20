export type Project = {
  slug: string;
  title: string;
  description: string;
  year?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    slug: 'litkovska',
    title: 'litkovska',
    description: 'visual identity, art direction',
    thumbnail: '/_stickers_mock_1.jpg'
  },
  {
    slug: 'whaaat',
    title: 'wix whaaat',
    description: 'branding, web, art direction',
    thumbnail: '/_window_display.jpg'
  },
  {
    slug: 'kharenko',
    title: 'sayenko kharenko',
    description: 'visual identity, editorial',
    thumbnail: '/_teaser_postcard.jpg'
  },
  {
    slug: 'gallery',
    title: 'gallery',
    description: 'web',
    thumbnail: '/_stickers_mock_1.jpg'
  },
  {
    slug: 'modernism',
    title: 'soviet modernism',
    description: 'editorial',
    thumbnail: '/_teaser_postcard.jpg'
  },
  {
    slug: 'tigers',
    title: 'celebrating tigers',
    description: 'editorial',
    thumbnail: '/_stickers_mock_1.jpg'
  },
  {
    slug: 'koolban',
    title: 'koolban',
    description: 'editorial',
    thumbnail: '/_stickers_mock_1.jpg'
  }
]
