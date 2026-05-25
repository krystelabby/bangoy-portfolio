import profilePic from './Profile Pic.jpg'
import formalPic1 from './Formal pic 1.jpg'
import resumePdf from './RESUME.pdf'

import awardKalibulung3rd from './AWARD - 3RD RU IN KALIBULUNG CHEERDANCE COMPETITION.jpg'
import awardBansay2025 from './AWARD - BANSAY 2025.jpg'
import awardPsitsChampion from './AWARD - CHAMPION IN PSITS CHEERDANCE COMPETITION.jpg'
import awardFaceOfBansay2025 from './AWARD - FACE OF BANSAY 2025.jpg'
import awardIcsa from './AWARD - ICSA.jpg'
import awardIcsa2 from './AWARD - ICSA (2).jpg'
import awardIcsa3 from './AWARD - ICSA (3).jpg'
import awardIcsa4 from './AWARD - ICSA (4).jpg'
import awardStartupSundayag2024 from './AWARD - STARTUP SUNDAYAG 2024.jpg'

import capstoneCompletion from './CAPSTONE DEPLOYMENT COMPLETION.jpg'
import ciscoCert from './CISCO.png'
import ojtCompletion from './OJT COMPLETION.jpg'
import icsaPicture from './ICSA PICTURE.jpg'

export const assets = {
  profile: profilePic,
  profileAlternate: formalPic1,
  resume: resumePdf,
} as const

export type CertificateAsset = {
  id: string
  group: string
  label: string
  src: string
  alt: string
}

function labelFromFile(name: string): string {
  return name.replace(/\.(jpg|jpeg|png|webp)$/i, '').trim()
}

const completionCertificateItems: CertificateAsset[] = [
  {
    id: 'capstone-completion',
    group: 'Certificates of Completion',
    label: labelFromFile('CAPSTONE DEPLOYMENT COMPLETION.jpg'),
    src: capstoneCompletion,
    alt: labelFromFile('CAPSTONE DEPLOYMENT COMPLETION.jpg'),
  },
  {
    id: 'cisco-cert',
    group: 'Certificates of Completion',
    label: labelFromFile('CISCO.png'),
    src: ciscoCert,
    alt: labelFromFile('CISCO.png'),
  },
  {
    id: 'ojt-completion',
    group: 'Internship Completion',
    label: labelFromFile('OJT COMPLETION.jpg'),
    src: ojtCompletion,
    alt: labelFromFile('OJT COMPLETION.jpg'),
  },
]

export const completionCertificates = completionCertificateItems

export const academicAchievements: { title: string; items: CertificateAsset[] } = {
  title: 'Academic Achievements',
    items: [
      {
        id: 'award-kalibulung-3rd',
        group: 'Academic Achievements',
        label: labelFromFile('3rd Runner-up IN KALIBULUNG CHEERDANCE COMPETITION.jpg'),
        src: awardKalibulung3rd,
        alt: labelFromFile('3rd Runner-up IN KALIBULUNG CHEERDANCE COMPETITION.jpg'),
      },
      {
        id: 'award-bansay-2025',
        group: 'Academic Achievements',
        label: labelFromFile('BANSAY 2025.jpg'),
        src: awardBansay2025,
        alt: labelFromFile('BANSAY 2025.jpg'),
      },
      {
        id: 'award-psits-champion',
        group: 'Academic Achievements',
        label: labelFromFile('CHAMPION IN PSITS CHEERDANCE COMPETITION.jpg'),
        src: awardPsitsChampion,
        alt: labelFromFile('CHAMPION IN PSITS CHEERDANCE COMPETITION.jpg'),
      },
      {
        id: 'award-face-of-bansay-2025',
        group: 'Academic Achievements',
        label: labelFromFile('FACE OF BANSAY 2025.jpg'),
        src: awardFaceOfBansay2025,
        alt: labelFromFile('FACE OF BANSAY 2025.jpg'),
      },
      {
        id: 'award-icsa',
        group: 'Academic Achievements',
        label: labelFromFile('ICSA.jpg'),
        src: awardIcsa,
        alt: labelFromFile('ICSA.jpg'),
      },
      {
        id: 'award-icsa-2',
        group: 'Academic Achievements',
        label: labelFromFile('ICSA.jpg'),
        src: awardIcsa2,
        alt: labelFromFile('ICSA.jpg'),
      },
      {
        id: 'award-icsa-3',
        group: 'Academic Achievements',
        label: labelFromFile('ICSA.jpg'),
        src: awardIcsa3,
        alt: labelFromFile('ICSA.jpg'),
      },
      {
        id: 'award-icsa-4',
        group: 'Academic Achievements',
        label: labelFromFile('ICSA.jpg'),
        src: awardIcsa4,
        alt: labelFromFile('ICSA.jpg'),
      },
      {
        id: 'award-startup-sundayag-2024',
        group: 'Academic Achievements',
        label: labelFromFile('STARTUP SUNDAYAG 2024.jpg'),
        src: awardStartupSundayag2024,
        alt: labelFromFile('STARTUP SUNDAYAG 2024.jpg'),
      },
      {
        id: 'icsa-picture',
        group: 'Academic Achievements',
        label: labelFromFile('ICSA.jpg'),
        src: icsaPicture,
        alt: labelFromFile('ICSA.jpg'),
      },
    ],
}
