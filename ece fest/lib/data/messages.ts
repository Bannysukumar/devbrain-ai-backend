export interface Message {
  id: string;
  author: string;
  text: string;
  role?: string;
}

export const messages: Message[] = [
  {
    id: 'msg-1',
    author: 'Farahana',
    text: 'ÉCLAT brings out the best in every participant. Incredible memories made here! 🌟',
    role: 'Student'
  },
  {
    id: 'msg-2',
    author: 'Rupasri',
    text: 'From sunrise to celebration, every moment was magical. Proud to be part of this fest!',
    role: 'Student'
  },
  {
    id: 'msg-3',
    author: 'Akihila',
    text: 'Witnessing the talent and enthusiasm of our students makes every effort worthwhile.',
    role: 'Student'
  },
  {
    id: 'msg-4',
    author: 'Chandu',
    text: 'Organizing ÉCLAT was an amazing experience. The team spirit was unmatched!',
    role: 'Student'
  },
  {
    id: 'msg-5',
    author: 'Sai Ram',
    text: 'Code Quest was the highlight of my engineering journey. Can\'t wait for next year!',
    role: 'Student'
  },
  {
    id: 'msg-6',
    author: 'Saniya',
    text: 'The energy at ÉCLAT is unparalleled. Every technical and non-tech event was brilliantly executed.',
    role: 'Student'
  },
  {
    id: 'msg-7',
    author: 'Durga Prasad',
    text: 'Coordinating logistics for ÉCLAT taught me invaluable leadership skills. Worth every moment!',
    role: 'Student'
  }
];
