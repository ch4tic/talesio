import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Our Library',
      links: [
        {
          text: 'Magnetic Aura',
          href: getPermalink('/library/magnetic-aura'),
        },
        {
          text: 'Arcane Stance',
          href: getPermalink('/library/arcane-stance'),
        },
        {
          text: 'The Suppressed Education',
          href: getPermalink('/library/the-suppressed-education'),
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
        { text: 'Magnetic Aura', href: 'https://takeshim.gumroad.com/l/magneticauraebook' },
        { text: 'Arcane Stance', href: 'https://takeshim.gumroad.com/l/arcanestance' },
        { text: 'The Suppressed Education', href: 'https://takeshim.gumroad.com/l/thesuppressededucation' },
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
