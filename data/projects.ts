export type Project = {
  slug: string;
  title: string;
  type: string;
  year: number;
  thumbnail: string;
  brief: string;
}

export const projects: Project[] = [
  {
    slug: 'litkovska',
    title: 'litkovska',
    year: 2018,
    type: 'visual identity, art direction',
    thumbnail: '/_teaser_postcard.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
  },
  {
    slug: 'whaaat',
    title: 'wix whaaat',
    year: 2020,
    type: 'branding, web, art direction',
    thumbnail: '/mock_1.jpg',
    brief: 'TODO',
  },
  {
    slug: 'kharenko',
    title: 'sayenko kharenko',
    year: 2019,
    type: 'visual identity, editorial',
    thumbnail: '/_teaser_postcard.jpg',
    brief: 'TODO',
  },
  {
    slug: 'gallery',
    title: 'gallery',
    year: 2000,
    type: 'web',
    thumbnail: '/mock_1.jpg',
    brief: 'TODO',
  },
  {
    slug: 'modernism',
    title: 'soviet modernism',
    year: 2000,
    type: 'editorial',
    thumbnail: '/_teaser_postcard.jpg',
    brief: 'TODO',
  },
  {
    slug: 'tigers',
    title: 'celebrating tigers',
    year: 2000,
    type: 'editorial',
    thumbnail: '/_teaser_postcard.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
  },
  {
    slug: 'koolban',
    title: 'koolban',
    year: 2000,
    type: 'editorial',
    thumbnail: '/mock_1.jpg',
    brief: 'TODO',
  }
]
