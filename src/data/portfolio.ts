export const profile = {
  fullName: 'Christian Fer B. Bangoy',
  preferredName: 'Channy',
  title: 'BSIS Student | Graphic Designer',
  heroBio:
    "Hello! I'm Christian Fer Bangoy, a Bachelor of Science in Information Systems (BSIS) student from DNSC Panabo. I am passionate about technology, graphic design, and creating projects that improve creativity and user experience. I enjoy learning new technologies, exploring innovative ideas, and enhancing my skills through hands-on experiences. My goal is to grow professionally while making a positive impact in organizations and communities.",
  flipTagline: 'Design · Code · Create',
  initials: 'CFB',
}

export const aboutText =
  'A Bachelor of Science in Information Systems (BSIS) student from Davao del Norte State College who is passionate about technology, graphic design, and creative projects. I enjoy designing user-friendly interfaces, creating digital designs, and learning new technologies that help improve my skills and knowledge in the IS field. Through my academic projects and internship experiences, I have developed skills in communication, teamwork, creativity, and problem-solving. I am continuously exploring new ideas and experiences that will help me grow professionally and become a successful IS professional in the future.'

export const technicalSkills = [
  'UI/UX Design',
  'Data Encoding and Processing',
  'Information Management',
  'Database Management',
  'Problem-Solving & Critical Thinking',
]

export const tools = ['Canva', 'Figma', 'Microsoft Office', 'Excel']

export const projects = [
  {
    title:
      'Management Information System for the Office of the Senior Citizen Affairs (OSCA) in Panabo City',
    description:
      'A web-based management information system designed to improve the processing, monitoring, and management of senior citizen records, reports, and services in Panabo City.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    role: 'Documentation / Project Manager',
    year: '2026',
  },
]

export const education = {
  school: 'Davao del Norte State College',
  degree: 'BS Information Systems (BSIS)',
  status: '4th Year | Graduation: June 26, 2026',
}

export const internship = {
  organization: 'Learning and Information Resource Center (LIRC)',
  role: 'Library Intern / Office Assistant',
  duration: '486 Hours',
  responsibilities: [
    'Assisted in organizing records and documents',
    'Helped students and visitors',
    'Encoded and managed files',
    'Supported daily office operations',
  ],
}

export const organization = {
  name: 'IC-LSG (Information Communication – Local Student Government)',
  responsibilities: [
    'Assisted student activities and announcements',
    'Managed communication tasks',
    'Supported events and projects',
  ],
}

export const contact = {
  email: 'Bangoy.christian@dnsc.edu.ph',
  phone: '09060388179',
  location:
    'Block 9, Lot 40, Kanari Homes, Parrot St., New Visayas, Panabo City, Davao del Norte, Philippines',
  facebook: 'https://www.facebook.com/share/1L6xs5hMj5/',
  instagram: 'https://www.instagram.com/bngy_chrstn14',
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const
