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
        { text: 'Magnetic Aura', href: '/library/magnetic-aura' },
        { text: 'Arcane Stance', href: '/library/mastering-fate' },
        { text: 'The Suppressed Education', href: '/library/the-suppressed-education' }
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
