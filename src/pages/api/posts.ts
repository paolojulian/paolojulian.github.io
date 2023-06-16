import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  // No Props
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      break;
    case 'GET':
    default:
      return res.status(200).json([
        {
          id: 'lorem-ipsum',
          title: 'Lorem Ipsum - The king of all kings',
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.',
          date: '11-22-2022T08:00:00Z',
          readingTime: '5 mins'
        },
        {
          id: 'lorem-ipsum',
          title: 'Black Twitter is Irreplaceable. Did We Wait Too Late to Say That?',
          excerpt: 'If this is the final stand, you should know about Black Twitter',
          date: '11-22-2022T08:00:00Z',
          readingTime: '5 mins'
        },
        {
          id: 'lorem-ipsum',
          title: 'These Are the 8 Types of Drunk, According to the 16th Century',
          excerpt: 'Brb, getting Swine Drunk and ordering myself some nachos',
          date: '11-22-2022T08:00:00Z',
          readingTime: '5 mins'
        },
        {
          id: 'lorem-ipsum',
          title: '3 Agile Principles for a Productive and Progressive Life (with Examples!)',
          excerpt: 'You can increase your productivity and growth by stealing some Agile principles for life',
          date: '11-22-2022T08:00:00Z',
          readingTime: '5 mins'
        },
        {
          id: 'lorem-ipsum',
          title: 'Nature Speaks: How Environmental Linguistics may help save the planet.',
          excerpt: 'Walking through the Siberian forest with Marta, a lifelong huntress and forager, I could sense her reverence. Marta Kongarayeva, born',
          date: '11-22-2022T08:00:00Z',
          readingTime: '5 mins'
        },
      ])
  }
}