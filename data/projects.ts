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
    slug: 'wix-whaaat',
    title: 'wix whaaat',
    year: 2020,
    type: 'branding, web, art direction',
    brief: 'Wix Whaaat is a work-free zone for employees with a variety of services offered. Coffee shop, beauty space, store, nap room — whatever is required to recharge during the day. My role in this project included visual identity design, photoshoot creative direction, and website development.',
    media: [
      '1.jpg',
      '2.mp4',
      '3.jpg',
      [null, '4_2.jpg'],
      ['5_1.jpg', null],
      '6.mp4',
      '7.mp4',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
    ],
  },
  {
    slug: 'litkovska',
    title: 'litkovska',
    year: 2018,
    type: 'identity, art direction',
    brief: 'The Litkovska commissioned Hooga for a visual identity update in 2018. The agency’s approach was to anchor the identity around the bespoke tailored wordmark. As part of the team, I was responsible for assets design, including BCs, tags, labels, pe bags, and packaging boxes.',
    media: [],
  },
  {
    slug: 'sayenko-kharenko',
    title: 'sayenko kharenko',
    year: 2021,
    type: 'identity, art direction',
    brief: 'Visual identity facelift for the top-ranked Ukrainian law firm. The project goal was to refine the' +
      ' existing firm’s logo, adjust the color palette, and develop a bold visual approach for how assets across different media are treated. The outcome is an optically balanced icon, refined logotype, and complete package of digital and print templates.',
    media: [],
  },
  {
    slug: 'celebrating-tigers',
    title: 'celebrating tigers',
    year: 2018,
    type: 'editorial, packaging',
    brief: 'Fundraising project to help the “Tiger Canyon” hotel in South Africa. The coffee-table book with wildlife photography by Alex Kirichko. Standard edition of 900 copies, plus 100 premium edition examples packed in a bespoke gift box and came with a unique set of art prints. Designed in collaboration with Dmytro Yarynych. Photography: Alex Kirichko, words: John Varty. Printed by:',
    media:  [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      [null, '9_2.jpg'],
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg',
    ],
  },
  {
    slug: 'soviet-modernism',
    title: 'soviet modernism, brutalism, post-modernism',
    year: 2019,
    type: 'editorial',
    brief: 'Olexyi Bykov’s photographic homage to works of soviet Ukrainian architects. It displays modernist' +
      ' objects within diverse architectural environment of modern Ukrainian cities. Photogrpahy: Alex Bykov. Words: Ievgeniia Gubkina, Alex Bykov and John Nicholson. Published by: Osnovy. Printed by: DOM. ISBN: 9789665008194',
    media: [],
  },
  {
    slug: 'mriya',
    title: 'mriya',
    year: 2022,
    type: 'personal, poster',
    brief: 'The largest cargo airplane was destroyed within the first days of russian invasion of Ukraine. It' +
      ' existed in a single example. This personal project is a tribute to such a beautiful and majestic piece of' +
      ' machinery. Printed in an edition of 225 pcs. All of the profit was donated to the volunteers, which help ukrainian armed forces.',
    media: [],
  },
  {
    slug: 'gallery-detailing',
    title: 'gallery detailing',
    year: 2021,
    type: 'web',
    brief: 'Brand consulting and a web design for the car detailing studio based in Kyiv.',
    media: [],
  },
  {
    slug: 'koolban',
    title: 'koolban',
    year: 2019,
    type: 'editorial',
    brief: 'Identity and packaging design for the compostable trash bags manufacturer. The most utilitarian has to look business, so the sources for visual inspiration were construction machinery, tools and community services.',
    media: [],
  }
].map((project) => {
  const {slug, media} = project;

  return {
    ...project,
    thumbnail: `/${slug}/thumb.jpg`,
    media: media.map((row) => {
      return Array.isArray(row)
        ? row.map((rowItem) => rowItem ? `/${slug}/${rowItem}` : rowItem)
        : `/${slug}/${row}`
    }),
  }
});
