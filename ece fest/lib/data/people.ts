export interface Person {
  id: string;
  name: string;
  role: 'hod' | 'faculty' | 'convenor' | 'volunteer' | 'senior' | 'junior';
  designation?: string;
  image: string;
}

export const people: Person[] = [
  // HOD
  {
    id: 'hod-1',
    name: 'Mrs. G. Krishna Mohan',
    role: 'hod',
    designation: 'Head of the Department — ECE',
    image: '/New folder/hod.jpeg'
  },

  // Faculty
  {
    id: 'faculty-1',
    name: 'B. Sisrisha',
    role: 'faculty',
    designation: 'M.Tech: ES&VD | Exp: 7 Years',
    image: '/New folder/SISRISHA.jpg'
  },
  {
    id: 'faculty-2',
    name: 'B. Soumya',
    role: 'faculty',
    designation: 'M.Tech: ES&VD | Asst. Prof | Exp: 5 Years',
    image: '/New folder/SOUMYA.jpg'
  },
  {
    id: 'faculty-3',
    name: 'K. Naga Dileep Kumar',
    role: 'faculty',
    designation: 'M.Tech: ES | Asst. Prof | Exp: 5 Years',
    image: '/New folder/DILEEP.jpg'
  },
  {
    id: 'faculty-4',
    name: 'A. Prasad Rao',
    role: 'faculty',
    designation: 'M.Tech: ECE | Exp: 8 Years',
    image: '/New folder/SISRISHA.jpg'
  },
  {
    id: 'faculty-5',
    name: 'B. Sindhuja',
    role: 'faculty',
    designation: 'M.Tech: ES&VD | Exp: 7 Years',
    image: '/New folder/SINDHUJA.jpg'
  },
  {
    id: 'faculty-6',
    name: 'K. Keerthan Kumar',
    role: 'faculty',
    designation: 'M.Tech: VLSI | Exp: 1 Year',
    image: '/New folder/KEERTHAN.jpg'
  },
  {
    id: 'faculty-7',
    name: 'K. Bhargavi',
    role: 'faculty',
    designation: 'M.Tech: ES&VD | Exp: 3 Years',
    image: '/New folder/BHARGAVI.jpg'
  },
  {
    id: 'faculty-8',
    name: 'T. Srujana',
    role: 'faculty',
    designation: 'M.Tech: VSD | Exp: 2 Years',
    image: '/New folder/SRUJANA.jpg'
  },
  {
    id: 'faculty-9',
    name: 'B. Navya Sri',
    role: 'faculty',
    designation: 'M.Tech: WMC | Exp: 2 Years',
    image: '/New folder/NAVYA.jpg'
  },

  // Convenors
  /*
  {
    id: 'convenor-1',
    name: 'Arjun Singh',
    role: 'convenor',
    designation: 'Fest Convenor',
    image: '/images/team/convenor-1.jpg'
  },
  {
    id: 'convenor-2',
    name: 'Ritika Patel',
    role: 'convenor',
    designation: 'Co-Convenor',
    image: '/images/team/convenor-2.jpg'
  },
  {
    id: 'convenor-3',
    name: 'Vikram Reddy',
    role: 'convenor',
    designation: 'Co-Convenor',
    image: '/images/team/convenor-3.jpg'
  },

  // Volunteers
  {
    id: 'vol-1',
    name: 'Ananya Gupta',
    role: 'volunteer',
    designation: 'Event Coordinator',
    image: '/images/team/volunteer-1.jpg'
  },
  {
    id: 'vol-2',
    name: 'Rohan Kapoor',
    role: 'volunteer',
    designation: 'Logistics Manager',
    image: '/images/team/volunteer-2.jpg'
  },
  {
    id: 'vol-3',
    name: 'Divya Kumar',
    role: 'volunteer',
    designation: 'Registration Head',
    image: '/images/team/volunteer-3.jpg'
  },
  {
    id: 'vol-4',
    name: 'Nikhil Yadav',
    role: 'volunteer',
    designation: 'Technical Lead',
    image: '/images/team/volunteer-4.jpg'
  },

  // Seniors
  {
    id: 'senior-1',
    name: 'Aditya Malhotra',
    role: 'senior',
    designation: '3rd Year',
    image: '/images/team/senior-1.jpg'
  },
  {
    id: 'senior-2',
    name: 'Neha Singh',
    role: 'senior',
    designation: '3rd Year',
    image: '/images/team/senior-2.jpg'
  },
  {
    id: 'senior-3',
    name: 'Akshay Bhatt',
    role: 'senior',
    designation: '3rd Year',
    image: '/images/team/senior-3.jpg'
  },

  // Juniors
  {
    id: 'junior-1',
    name: 'Priya Sharma',
    role: 'junior',
    designation: '2nd Year',
    image: '/images/team/junior-1.jpg'
  },
  {
    id: 'junior-2',
    name: 'Manish Desai',
    role: 'junior',
    designation: '2nd Year',
    image: '/images/team/junior-2.jpg'
  },
  {
    id: 'junior-3',
    name: 'Sandhya Nair',
    role: 'junior',
    designation: '1st Year',
    image: '/images/team/junior-3.jpg'
  },
  {
    id: 'junior-4',
    name: 'Aman Joshi',
    role: 'junior',
    designation: '1st Year',
    image: '/images/team/junior-4.jpg'
  }
  */
];
