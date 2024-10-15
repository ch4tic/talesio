import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Our Library',
      links: [
        {
          text: 'Magnetic Aura',
          href: getPermalink('https://shop.beacons.ai/talesio/0a5c8e68-10b9-44c0-83ec-3fef02f55e54'),
        },
        {
          text: 'Arcane Stance',
          href: getPermalink('https://shop.beacons.ai/talesio/f8c213cc-2cb3-4517-86c1-d33797e95e7c'),
        },
        {
          text: 'The Suppressed Education',
          href: getPermalink('https://shop.beacons.ai/talesio/bffb7d4c-fb49-457f-a306-c3d7e0a9f37f'),
        }
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Our Library',
      links: [
        { text: 'Magnetic Aura', href: 'https://shop.beacons.ai/talesio/0a5c8e68-10b9-44c0-83ec-3fef02f55e54' },
        { text: 'Arcane Stance', href: 'https://shop.beacons.ai/talesio/f8c213cc-2cb3-4517-86c1-d33797e95e7c' },
        { text: 'The Suppressed Education', href: 'https://shop.beacons.ai/talesio/bffb7d4c-fb49-457f-a306-c3d7e0a9f37f' },
        { text: 'Book of Wisdom', href: 'https://revivalofwisdom.com/products/book-of-wisdom-pdf-english?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Alkaline Awakening', href: 'https://revivalofwisdom.com/products/alkaline-awakening-book?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'The Wisdom Bundle', href: 'https://revivalofwisdom.com/products/the-wisdom-bundle?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Vibrational Energy Codes', href: 'https://revivalofwisdom.com/products/vibrational-energy-codes-pdf?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Human Health Guide', href: 'https://revivalofwisdom.com/products/human-health-guide-pdf?sca_ref=7186286.vYxyAp6dwA' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
    
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://talesio.xyz"> Talesio</a> · All rights reserved.
  `,
};
