import drRice from '../assets/images/team/Dr_Meaghan_Rice_Colorado_Therapist-1.jpg';
import brynn from '../assets/images/team/Brynn_Robles-1.jpg';
import catt from '../assets/images/team/Catt_Smiley-1.jpg';
import erin from '../assets/images/team/Erin_Wesley-1.jpg';
import hiroko from '../assets/images/team/Kiroko_Hirata-1.jpeg';
import hope from '../assets/images/team/Hope_Sauer-1.jpg';
import jennifer from '../assets/images/team/Jennifer_Valenzuela-Sliger-1.jpg';
import kaite from '../assets/images/team/Kaite_Lempp-1.jpg';
import kiana from '../assets/images/team/Kiana_Dearborn-1.jpeg';
import patti from '../assets/images/team/Patti_Roberts-1.jpg';
import samuel from '../assets/images/team/Samuel_Bierbrauer-1.jpg';
import tara from '../assets/images/team/Tara_Anderson-1.jpg';
import helen from '../assets/images/team/IMG_0703-scaled.jpg';
import kevin from '../assets/images/team/Kevin_Marquez-1.jpg';
import taraBris from '../assets/images/team/Tara_Brisnehan-1.jpg';

export interface TeamMember {
  name: string;
  title: string;
  role?: string;
  license: string;
  licensedIn: string;
  photo: ImageMetadata;
  pronouns?: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Meaghan Rice',
    title: 'Founder',
    role: 'Founder',
    license: 'PsyD, LPC, NBCC, ACS',
    licensedIn: 'CO, AZ, OR, MS, GA, IA',
    photo: drRice,
    bio: 'The driving force behind Better Lives Building Tribes, Dr. Rice has been helping people change their lives for over ten years. Her method combines evidence-informed approaches with practical application to help individuals, couples, and families build resilience and create meaningful change.',
  },
  {
    name: 'Brynn Robles',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: brynn,
    bio: 'Brynn is a Licensed Professional Counselor (LPC) in the State of CO. She received her Bachelor of Science in human services from Metropolitan State University, and her Master of Arts in school counseling.',
  },
  {
    name: 'Catt Smiley',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: catt,
    pronouns: 'She/Her/Hers',
    bio: 'Catt is a Licensed Professional Counselor (LPC) in the state of Colorado. Catt graduated from Salve Regina University with a Master\'s Degree in Clinical Rehabilitation and Mental Health Counseling.',
  },
  {
    name: 'Erin Wesley',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: erin,
    bio: 'Erin is a Licensed Professional Counselor (LPC) in the State of CO. She has over 10 years of experience working with youth, adults, and families. She understands how the family system impacts, both positively and negatively, individual well-being.',
  },
  {
    name: 'Hiroko Hirata',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: hiroko,
    bio: 'Hiroko is a Licensed Professional Counselor Candidate (LPCC) in the State of Colorado. She has two master\'s degrees including Clinical Mental Health Counseling from Regis University.',
  },
  {
    name: 'Hope Sauer',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: hope,
    bio: 'Hope is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. Soon, she will also have her Licensed Associate Counselor (LAC) in the state of AZ as well.',
  },
  {
    name: 'Jennifer Valenzuela-Sliger',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: jennifer,
    bio: 'Jennifer Valenzuela-Sliger is a Licensed Professional Counselor (LPC) in the state of Colorado. Jennifer graduated with her undergraduate and graduate degree from the University of Nevada, Reno.',
  },
  {
    name: 'Kaite Lempp',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: kaite,
    bio: 'Kaite is a Licensed Professional Counselor (LPC) in the State of CO. She graduated from the University of Northern Colorado with a Bachelor of Arts in psychology in 2018.',
  },
  {
    name: 'Kiana Dearborn',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: kiana,
    bio: 'Kiana Dearborn is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. She has 6 years of experience helping people navigate complicated life challenges.',
  },
  {
    name: 'Patti Miller',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: patti,
    bio: 'Patti is a Licensed Professional Counselor (LPC) in the State of CO. She received her Bachelor of Arts from the University of Illinois and later went on to earn a Master of Arts in counseling.',
  },
  {
    name: 'Samuel Bierbrauer',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: samuel,
    bio: 'Samuel Bierbrauer is a Licensed Professional Counselor (LPC) in the State of Colorado. Samuel graduated from Colorado Mesa University in 2012 with a bachelor\'s degree in psychology.',
  },
  {
    name: 'Tara Anderson',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: tara,
    bio: 'Tara is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. She completed her undergraduate psychological studies in 2018 and completed her masters in contemplative psychology.',
  },
  {
    name: 'Helen Hudson',
    title: 'AZ Therapist',
    license: 'NBCC',
    licensedIn: 'AZ',
    photo: helen,
    bio: 'Helen is a Nationally Board Certified Counselor (NBCC). She has an undergraduate degree in communications from Stanford and a MEd in human development counseling from Vanderbilt. Helen has 30 years of experience.',
  },
  {
    name: 'Kevin Marquez',
    title: 'AZ Therapist',
    license: 'LAC',
    licensedIn: 'AZ',
    photo: kevin,
    bio: 'Kevin is a Licensed Associate Counselor (LAC) in the state of AZ. Kevin completed his undergraduate psychological studies in 2018 and completed his masters degree in professional counseling in 2022.',
  },
  {
    name: 'Tara Brisnehan',
    title: 'AZ Therapist',
    license: 'LPC',
    licensedIn: 'AZ',
    photo: taraBris,
    bio: 'Tara is a Licensed Professional Counselor (LPC) in the state of AZ. She has had over 7 years of experience working with individuals, couples, and families.',
  },
];
