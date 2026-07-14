export interface Service {
  title: string;
  slug: string;
  summary: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    title: 'Mindfulness-Based Therapy',
    slug: 'mindfulness-based-therapy',
    summary: 'Cultivate present-moment awareness and reduce suffering through mindfulness-based therapy including MBSR, MBCT, and meditation practices.',
    featured: true,
  },
  {
    title: 'Culturally Sensitive Therapy',
    slug: 'culturally-sensitive-therapy',
    summary: 'Therapy that honors your cultural identity, addresses racial trauma and immigration stress, and adapts treatment to your cultural context and values.',
    featured: true,
  },
  {
    title: 'Trauma Recovery',
    slug: 'trauma-recovery',
    summary: 'Comprehensive trauma recovery for complex PTSD, developmental trauma, and attachment wounds through phased, evidence-based treatment.',
    featured: true,
  },
  {
    title: 'Anxiety Therapy',
    slug: 'anxiety-therapy',
    summary: 'Evidence-based therapy for anxiety disorders including panic, social anxiety, phobias, and generalized worry through CBT and exposure therapy.',
    featured: false,
  },
  {
    title: 'Internal Family Systems Therapy (IFS)',
    slug: 'internal-family-systems-therapy',
    summary: 'Understand and heal different parts of yourself through Internal Family Systems therapy, accessing your core Self to create internal harmony.',
    featured: false,
  },
  {
    title: 'Dialectical Behavior Therapy (DBT)',
    slug: 'dialectical-behavior-therapy',
    summary: "Master emotion regulation, distress tolerance, mindfulness, and interpersonal effectiveness through DBT's evidence-based skills training approach.",
    featured: false,
  },
  {
    title: 'Trauma-Focused Therapy',
    slug: 'trauma-focused-therapy',
    summary: 'Heal from traumatic experiences through specialized, evidence-based trauma therapy including EMDR, somatic experiencing, and trauma-informed care.',
    featured: false,
  },
  {
    title: 'Licensed Professional Counselor',
    slug: 'licensed-professional-counselor',
    summary: 'Work with qualified Licensed Professional Counselors providing evidence-based therapy in safe, confidential, ethical therapeutic environments.',
    featured: false,
  },
  {
    title: 'Career & Personal Growth Therapy',
    slug: 'career-personal-growth-therapy',
    summary: 'Unlock your potential through career transitions, purpose clarification, and personal development. Move from functioning to thriving.',
    featured: false,
  },
  {
    title: 'Couples Therapy',
    slug: 'couples-therapy',
    summary: 'Strengthen your relationship, improve communication, and navigate challenges together through evidence-based couples therapy approaches.',
    featured: false,
  },
  {
    title: 'Holistic Healing',
    slug: 'holistic-healing',
    summary: 'Integrate mind, body, and spirit for comprehensive wellness through integrated therapeutic approaches addressing all dimensions of wellbeing.',
    featured: false,
  },
  {
    title: 'Personalized Therapy',
    slug: 'personalized-therapy',
    summary: 'Integrative therapy tailored specifically to your unique needs, combining multiple evidence-based approaches for truly personalized treatment.',
    featured: false,
  },
  {
    title: 'Divorce or Breakup Therapy',
    slug: 'divorce-breakup-therapy',
    summary: 'Navigate divorce or breakup with support. Process grief, rebuild identity, and move forward with clarity and hope.',
    featured: false,
  },
  {
    title: 'Interpersonal Therapy (IPT)',
    slug: 'interpersonal-therapy',
    summary: 'Address depression and anxiety by improving relationships, communication patterns, and navigating life transitions through evidence-based IPT.',
    featured: false,
  },
  {
    title: 'Depression Therapy',
    slug: 'depression-therapy',
    summary: 'Evidence-based therapy for depression helping you understand symptoms, develop coping strategies, and rediscover hope and meaning in life.',
    featured: false,
  },
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    slug: 'cognitive-behavioral-therapy',
    summary: 'Identify and change negative thought patterns and behaviors through structured, goal-oriented cognitive behavioral therapy.',
    featured: false,
  },
  {
    title: 'EMDR Therapy',
    slug: 'emdr-therapy',
    summary: 'Process and heal from traumatic memories through Eye Movement Desensitization and Reprocessing, a proven trauma treatment approach.',
    featured: false,
  },
  {
    title: 'Acceptance & Commitment Therapy (ACT)',
    slug: 'acceptance-commitment-therapy',
    summary: 'Build psychological flexibility by learning to accept difficult thoughts and feelings while committing to values-driven action.',
    featured: false,
  },
  {
    title: 'Adlerian Therapy',
    slug: 'adlerian-therapy',
    summary: 'Explore how early life experiences shape your current behavior and develop a greater sense of belonging and social connection.',
    featured: false,
  },
  {
    title: 'Behavioral Therapy',
    slug: 'behavioral-therapy',
    summary: 'Address unwanted behaviors through evidence-based techniques that help you develop healthier patterns and coping mechanisms.',
    featured: false,
  },
  {
    title: 'Psychodynamic Therapy',
    slug: 'psychodynamic-therapy',
    summary: 'Gain deeper self-understanding by exploring unconscious patterns, past experiences, and their influence on present behavior and relationships.',
    featured: false,
  },
  {
    title: 'Hypnotherapy',
    slug: 'hypnotherapy',
    summary: 'Access your subconscious mind through clinical hypnotherapy to address anxiety, habits, trauma, and other challenges in a safe therapeutic setting.',
    featured: false,
  },
  {
    title: 'Substance Abuse Counseling',
    slug: 'substance-abuse-counseling',
    summary: 'Compassionate, evidence-based support for substance use challenges, helping you build recovery skills and address underlying issues.',
    featured: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
