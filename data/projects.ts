type RawProject = {
  slug: string;
  title: string;
  type: string;
  year: number;
  brief: string;
  media: (string | (string | null)[])[]
}

export type Project = RawProject & {
  next: RawProject;
  thumbnail: string;
}

const rawProjects: RawProject[] = [
  {
    slug: 'wix-whaaat',
    title: 'Wix Whaaat',
    year: 2020,
    type: 'branding, web',
    brief: 'Wix Whaaat is a work-free zone for the employees with a variety of services offered. Coffee shop, beauty space, store, nap room — whatever is required to recharge during the day. My role in this project included visual identity design, photoshoot creative direction and website development.',
    media: [
      '1.webp',
      '2.mp4',
      '3.webp',
      [null, '4_2.webp'],
      ['5_1.webp', null],
      '6.mp4',
      '7.mp4',
      '8.webp',
      ['9_2.webp', null],
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
    ],
  },
  {
    slug: 'litkovska',
    title: 'Litkovska',
    year: 2018,
    type: 'visual identity',
    brief: 'The Litkovska commissioned Hooga for a visual identity update in 2018. The agency’s approach was to anchor the identity around the bespoke tailored wordmark. As part of the team, I was responsible for assets design, including business cards, tags, labels, pe bags, and packaging boxes. Images courtesy of Hooga and Litkovska.',
    media: [
      '1.webp',
      '2.webp',
      [null, '3_1.webp'],
      '4.webp',
      ['5_2.webp', null],
      '6.webp',
      [null, '7_2.webp'],
    ],
  },
  {
    slug: 'sayenko-kharenko',
    title: 'Sayenko Kharenko',
    year: 2021,
    type: 'visual identity',
    brief: 'Visual identity facelift for the top-ranked Ukrainian law firm. The project goal was to refine the' +
      ' existing firm’s logo, adjust the color palette, and develop a bold visual approach for how assets across different media are treated. The outcome is an optically balanced icon, refined logotype, and complete package of digital and print templates. Done with LY studio.',
    media: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      ['10_2.webp', null],
      [null, '11_1.webp'],
    ],
  },
  {
    slug: 'celebrating-tigers',
    title: 'Celebrating tigers',
    year: 2018,
    type: 'editorial, packaging',
    brief: 'Fundraising project to help the “Tiger Canyons” hotel in South Africa. The coffee-table book with wildlife photography by Alex Kirichko. Standard edition of 900 copies, plus 100 premium edition examples packed in a bespoke gift box and came with a unique set of art prints. Designed in collaboration with Dmytro Yarynych. Photography: Alex Kirichko; words: John Varty; ISBN: 9789665008132; printed by: Buch-one. Case study photogrpahy: Ivan Sokolyanskyi',
    media: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      [null, '9_2.webp'],
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
      '14.webp',
      '15.webp',
      '16.webp',
      '17.webp',
    ],
  },
  {
    slug: 'soviet-modernism',
    title: 'Soviet modernism',
    year: 2019,
    type: 'editorial',
    brief: 'Olexyi Bykov’s photographic homage to works of Soviet Ukrainian architects. It displays modernist' +
      ' objects within diverse architectural landscape of modern Ukrainian cities. Done with Hooga. Photogrpahy: Alex Bykov; words: Ievgeniia Gubkina, Alex Bykov and John Nicholson; published by: Osnovy; printed by: Dom; ISBN: 9789665008194; case study photogrpahy: Ivan Sokolyanskyi',
    media: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
    ],
  },
  {
    slug: 'gallery-detailing',
    title: 'Gallery detailing',
    year: 2021,
    type: 'web',
    brief: 'Brand consulting and website design for the car detailing studio based in Kyiv.',
    media: [
      '2.mp4',
      '3.webp',
      '4.mp4',
      '5.mp4',
      '6.mp4',
    ],
  },
  {
    slug: 'koolban',
    title: 'Koolban',
    year: 2019,
    type: 'visual identity, packaging',
    brief: 'Identity and packaging design for the compostable trash bags manufacturer. The most utilitarian thing has to look business, so the sources for visual inspiration were construction machinery, tools and community services. Done with Hooga.',
    media: [
      '1.webp',
      '2.webp',
      '3.mp4',
      '4.mp4',  
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '11.webp',
      '10.webp',
    ],
  },
  {
    slug: 'mriya',
    title: 'Mriya',
    year: 2022,
    type: 'personal, poster',
    brief: 'The largest cargo airplane was destroyed within the first days of russian invasion of Ukraine. It' +
      ' existed in a single example. This project is a tribute to the beautiful and majestic piece of' +
      ' machinery. Printed in an edition of 225 pcs. All of the profit was donated to the volunteers, which help Ukrainian armed forces. Case study photogrpahy: Ivan Sokolyanskyi',
    media: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      [null, '6_1.mp4'],
    ],
  },
];


export const projects: Project[] = rawProjects.map((project, i) => {
  const { slug, media } = project;

  return {
    ...project,
    thumbnail: `/${slug}/thumb.webp`,
    media: media.map((row) => {
      return Array.isArray(row)
        ? row.map((rowItem) => rowItem ? `/${slug}/${rowItem}` : rowItem)
        : `/${slug}/${row}`
    }),
    next: rawProjects[rawProjects.length === i + 1 ? 0 : i + 1],
  }
});
