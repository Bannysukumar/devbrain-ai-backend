export interface Event {
  id: string;
  name: string;
  category: 'technical' | 'non-technical';
  description: string;
  rules?: string;
  prizes?: string;
  contact?: string;
}

export const events: Event[] = [
  // Technical Events
  {
    id: 'circuit-design',
    name: 'Circuit Design Challenge',
    category: 'technical',
    description: 'Design and simulate innovative circuits using modern tools and techniques.',
    rules: '1. Teams of 2-3 members\n2. 2-hour duration\n3. Simulation tools allowed\n4. Judged on creativity and efficiency',
    prizes: '1st Prize: ₹5,000 | 2nd Prize: ₹3,000 | 3rd Prize: ₹1,500',
    contact: 'Contact: Dr. Ravi Kumar | 9876543210'
  },
  {
    id: 'code-quest',
    name: 'Code Quest',
    category: 'technical',
    description: 'Fast-paced competitive programming challenge with real-world problems.',
    rules: '1. Individual participation\n2. 90 minutes\n3. C++, Python, Java allowed\n4. Top 10 advance to finals',
    prizes: '1st Prize: ₹7,000 | 2nd Prize: ₹4,000 | 3rd Prize: ₹2,000',
    contact: 'Contact: Prof. Sharma | 9876543211'
  },
  {
    id: 'robotics',
    name: 'Robotics Showdown',
    category: 'technical',
    description: 'Build and compete with autonomous robots in challenging obstacle courses.',
    rules: '1. Teams of 3\n2. Pre-built or self-built robots\n3. Time limit: 1 hour\n4. Safe operation mandatory',
    prizes: '1st Prize: ₹8,000 | 2nd Prize: ₹5,000 | 3rd Prize: ₹2,500',
    contact: 'Contact: Dr. Arjun | 9876543212'
  },
  {
    id: 'iot-innovation',
    name: 'IoT Innovation Sprint',
    category: 'technical',
    description: 'Create innovative IoT solutions for real-world problems in smart cities.',
    rules: '1. Teams of 2-4\n2. Prototype or simulation\n3. 3-hour duration\n4. Documentation required',
    prizes: '1st Prize: ₹6,000 | 2nd Prize: ₹3,500 | 3rd Prize: ₹1,500',
    contact: 'Contact: Ms. Priya | 9876543213'
  },
  {
    id: 'signal-processing',
    name: 'Signal Processing Saga',
    category: 'technical',
    description: 'Analyze and process signals using DSP techniques and tools.',
    rules: '1. Individual or pair\n2. MATLAB/Python allowed\n3. 1.5 hours\n4. Real-time feedback',
    prizes: '1st Prize: ₹4,000 | 2nd Prize: ₹2,000 | 3rd Prize: ₹1,000',
    contact: 'Contact: Prof. Vijay | 9876543214'
  },

  // Non-Technical Events
  {
    id: 'cultural-fest',
    name: 'Cultural Extravaganza',
    category: 'non-technical',
    description: 'Showcase your talent in music, dance, and drama on the grand stage.',
    rules: '1. Individual or group (max 5 members)\n2. 5-minute performance\n3. Bring your own music (USB)\n4. Decide on theme',
    prizes: '1st Prize: ₹3,000 | 2nd Prize: ₹2,000 | 3rd Prize: ₹1,000',
    contact: 'Contact: Ms. Anjali | 9876543215'
  },
  {
    id: 'debate-championship',
    name: 'Debate Championship',
    category: 'non-technical',
    description: 'Engage in intellectual battle with compelling arguments and counter-points.',
    rules: '1. Teams of 2\n2. 30 minutes per round\n3. English medium\n4. Topics given on the spot',
    prizes: '1st Prize: ₹2,500 | 2nd Prize: ₹1,500 | 3rd Prize: ₹500',
    contact: 'Contact: Dr. Kavya | 9876543216'
  },
  {
    id: 'treasure-hunt',
    name: 'Fest Treasure Hunt',
    category: 'non-technical',
    description: 'Solve clues across campus to find the hidden treasure and win big!',
    rules: '1. Teams of 3-4\n2. Campus boundaries\n3. No damage to property\n4. Time limit: 2 hours',
    prizes: '1st Prize: ₹4,000 | 2nd Prize: ₹2,500 | 3rd Prize: ₹1,500',
    contact: 'Contact: Mr. Rahul | 9876543217'
  },
  {
    id: 'photography-contest',
    name: 'Photography Contest',
    category: 'non-technical',
    description: 'Capture the essence of ÉCLAT through your lens and lens.',
    rules: '1. Individual entries\n2. Smartphone or DSLR\n3. Max 5 photos per category\n4. JPG/PNG format',
    prizes: '1st Prize: ₹2,000 | 2nd Prize: ₹1,200 | 3rd Prize: ₹800',
    contact: 'Contact: Ms. Shreya | 9876543218'
  },
  {
    id: 'sports-relay',
    name: 'Sports Relay Race',
    category: 'non-technical',
    description: 'Team up and race against time in exciting sports challenges.',
    rules: '1. Teams of 4\n2. Multiple events\n3. Fair play mandatory\n4. Medical clearance needed',
    prizes: '1st Prize: ₹3,500 | 2nd Prize: ₹2,000 | 3rd Prize: ₹1,000',
    contact: 'Contact: Coach Vikram | 9876543219'
  }
];
