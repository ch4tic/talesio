import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'E-Books',
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
        },
        {
          text: 'Book of Wisdom',
          href: getPermalink('https://revivalofwisdom.com/products/book-of-wisdom-pdf-english?sca_ref=7186286.vYxyAp6dwA'),
        },
        {
          text: 'Alkaline Awakening',
          href: getPermalink('https://revivalofwisdom.com/products/alkaline-awakening-book?sca_ref=7186286.vYxyAp6dwA'),
        },
        {
          text: 'The Wisdom Bundle',
          href: getPermalink('https://revivalofwisdom.com/products/the-wisdom-bundle?sca_ref=7186286.vYxyAp6dwA'),
        },
        {
          text: 'Vibrational Energy Codes',
          href: getPermalink('https://revivalofwisdom.com/products/vibrational-energy-codes-pdf?sca_ref=7186286.vYxyAp6dwA'),
        },
        {
          text: 'Human Health Guide',
          href: getPermalink('https://revivalofwisdom.com/products/human-health-guide-pdf?sca_ref=7186286.vYxyAp6dwA'),
        },
      ],
    },
    {
      text: 'Subliminals',
      links: [
        {
          text: 'Remove Social Anxiety',
          href: getPermalink('https://shop.beacons.ai/talesio/40e84676-961f-45f4-a0de-1e528988c984'),
        },
        {
          text: 'Lucky Girl Syndrome',
          href: getPermalink('https://shop.beacons.ai/talesio/8c7b3857-1c69-4935-8a71-a9f484b1f23c'),
        },
        {
          text: 'Subliminals Bundle',
          href: getPermalink('https://shop.beacons.ai/talesio/343699d1-2c2a-4415-ab5f-38eb4c998fd0'),
        },
        {
          text: 'Get Toned Abs',
          href: getPermalink('https://shop.beacons.ai/talesio/4889b203-3929-4702-910a-0ef5e8134c97'),
        }
      ],
    },
    {
      text: 'About Us',  
      href: getPermalink('/about'),
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Books',
      links: [
        { text: 'The Suppressed Education', href: 'https://shop.beacons.ai/talesio/bffb7d4c-fb49-457f-a306-c3d7e0a9f37f' },
        { text: 'Vibrational Energy Codes', href: 'https://revivalofwisdom.com/products/vibrational-energy-codes-pdf?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Human Health Guide', href: 'https://revivalofwisdom.com/products/human-health-guide-pdf?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'The Wisdom Bundle', href: 'https://revivalofwisdom.com/products/the-wisdom-bundle?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Alkaline Awakening', href: 'https://revivalofwisdom.com/products/alkaline-awakening-book?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Book of Wisdom', href: 'https://revivalofwisdom.com/products/book-of-wisdom-pdf-english?sca_ref=7186286.vYxyAp6dwA' },
        { text: 'Magnetic Aura', href: 'https://shop.beacons.ai/talesio/0a5c8e68-10b9-44c0-83ec-3fef02f55e54' },
        { text: 'Arcane Stance', href: 'https://shop.beacons.ai/talesio/f8c213cc-2cb3-4517-86c1-d33797e95e7c' }
      ],
    },
    {
      title: 'Subliminals',
      links: [
        { text: 'Remove Social Anxiety', href: 'https://shop.beacons.ai/talesio/40e84676-961f-45f4-a0de-1e528988c984' },
        { text: 'Lucky Girl Syndrome', href: 'https://shop.beacons.ai/talesio/8c7b3857-1c69-4935-8a71-a9f484b1f23c' },
        { text: 'Subliminals Bundle', href: 'https://shop.beacons.ai/talesio/343699d1-2c2a-4415-ab5f-38eb4c998fd0' },
        { text: 'Get Toned Abs', href: 'https://shop.beacons.ai/talesio/4889b203-3929-4702-910a-0ef5e8134c97' },
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
    
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://talesio.xyz"> Talesio</a> · All rights reserved.
  `,
};
