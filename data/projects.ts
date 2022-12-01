export type Project = {
  slug: string;
  title: string;
  type: string;
  year: number;
  thumbnail: string;
  brief: string;
  media: (string | (string | null)[])[]
}

export const projects: Project[] = [
  {
    slug: 'litkovska',
    title: 'litkovska',
    year: 2018,
    type: 'visual identity, art direction',
    thumbnail: '/_litkovska_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  },
  {
    slug: 'whaaat',
    title: 'wix whaaat',
    year: 2020,
    type: 'branding, web, art direction',
    thumbnail: '/_whaaat_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [
      '_1.jpg',
      // '/_2.gif',
      ['_4_1.jpg', null],
      [null, '_4_2.jpg'],
      '_6.mp4',
      '_7.jpg',
      '_8.jpg',
      '_9.jpg',
      '_10.jpg',
      '_11.jpg',
    ],
  },
  {
    slug: 'kharenko',
    title: 'sayenko kharenko',
    year: 2019,
    type: 'visual identity, editorial',
    thumbnail: '/_koolban_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  },
  {
    slug: 'gallery',
    title: 'gallery',
    year: 2000,
    type: 'web',
    thumbnail: '/_koolban_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  },
  {
    slug: 'modernism',
    title: 'soviet modernism',
    year: 2000,
    type: 'editorial',
    thumbnail: '/_modernism_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  },
  {
    slug: 'tigers',
    title: 'celebrating tigers',
    year: 2000,
    type: 'editorial',
    thumbnail: '/_tigers_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  },
  {
    slug: 'koolban',
    title: 'koolban',
    year: 2000,
    type: 'editorial',
    thumbnail: '/_koolban_thumb.jpg',
    brief: 'Knowing is better than not knowing. That’s why TBD makes sexual health testing quick, easy and totally' +
      ' private so women can know more with less hassle, and feel empowered to take care of their health. The TBD community also offers continuous support before, during and after testing.',
    media: [],
  }
].map((project) => ({
  ...project,
  thumbnail: `/_thumbs${project.thumbnail}`,
  media: project.media.map((row) => {
    return Array.isArray(row)
      ? row.map((rowItem) => rowItem ? `/${project.slug}/${rowItem}` : rowItem)
      : `/${project.slug}/${row}`
  }),
}));
