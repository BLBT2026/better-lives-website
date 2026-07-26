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
    bio: 'The driving force behind Better Lives Building Tribes is Dr Meaghan Rice. Dr. Rice has been helping people change their lives for over ten years. Her method is both insightful and compassionate. Her journey began with a deep insight that our challenges and victories may reveal important truths about who we are. Dr. Rice found that signals from our social networks can sometimes hold the key to personal development. She used this knowledge to create a new therapy that emphasizes group behaviors and feedback over individual symptoms. Her clients can address the root causes of their issues, achieving significant life improvements from her holistic approach. Dr. Rice\'s dedication to this method is a result of her personal experiences overcoming obstacles in life and picking up on cues from those around her.',
  },
  {
    name: 'Brynn Robles',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: brynn,
    bio: 'Brynn is a Licensed Professional Counselor (LPC) in the State of CO. She received her Bachelor of Science in human services from Metropolitan State University, and her Master of Arts in school counseling and clinical counseling from the University of Northern Colorado. She has spent 16 years in the mental health field working with diverse populations. Brynn places a big emphasis on family systems, not just as we view our families in the present moment, but also how we have come to develop our own family systems throughout our childhood. Specializing in teens and young adults has given her the ability to see how needs change with time and how adaptations can be made along the way to better serve adulthood. She focuses on the most significant relationships, whether that be intimate partnerships, or otherwise, in order to use Cognitive Behavioral Therapy (CBT) and Dialectical Behavioral Therapy (DBT), as well as solutions-focused modalities to help clients better understand how beliefs, perspectives, and thoughts could potentially be limiting them from accomplishing their goals. The therapeutic relationship is everything to Brynn, so she is incredibly motivated to align, connect, and identify strengths as the organic exploration of getting to the best version of themselves takes place.',
  },
  {
    name: 'Catt Smiley',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: catt,
    pronouns: 'She/Her/Hers',
    bio: 'Catt is a Licensed Professional Counselor (LPC) in the state of Colorado. Catt graduated from Salve Regina University with a Master\'s Degree in Clinical Rehabilitation and Mental Health Counseling and attended University of Rhode Island where she completed her undergraduate studies, double majoring in Psychology and Human Development & Family Studies. Catt has 4 years of experience working with a wide range of individuals who struggle with anxiety, depression, trauma, feeling stuck, and general life transitions. Catt is a queer-identifying therapist, also having a special interest and experience in working with the LGBTQIA+ population. Catt loves walking alongside clients, working to unearth innate coping strategies and collaboratively develop new ways of seeing themselves, the world, and their place within it. Catt uses client-centered therapy and holistic methods in her practice and believes it is necessary to integrate mental, physical, spiritual, and emotional forms of well-being to help clients develop a deeper understanding of themselves on all of these levels. Catt strives to create an environment of safety, acceptance, validation, humor, and empathic understanding.',
  },
  {
    name: 'Erin Wesley',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: erin,
    bio: 'Erin is Licensed Professional Counselor (LPC) in the State of CO. She has over 10 years of experience working with youth, adults, and families. She understands how the family system impacts, both positively and negatively, individual values, beliefs, and perspectives. Erin has had significant experience helping people understand how their own childhood trauma can morph into eating disorders, addiction, or environments that make healing feel completely overwhelming. She believes in harnassing self-awareness, self-confidence, and our own strength-based abilities to heal. Erin uses a trauma-informed, person-centered approach, with elements of Cognitive Behavioral Therapy (CBT), EMDR, and Dialectical Behavioral Therapy (DBT). Erin places great emphasis on therapeutic rapport because connecting professionally is the catalyst to change.',
  },
  {
    name: 'Hiroko Hirata',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: hiroko,
    bio: 'Hiroko is a Licensed Professional Counselor Candidate (LPCC) in the State of Colorado. She has two master\'s degrees to include Clinical Mental Health Counseling From Regis University and a Master of Divinity from Naropa University. Hiroko has been in the mental health field for about 7 years. Originally providing spiritual care to clients going through grief and loss, trauma, anxiety, depression, burnout, health complications, crisis, and addiction, she eventually added mindfulness, body-centered, somatic techniques, and holistic well-being to her evidence-based approach. Hiroko was born and raised in Japan and identifies as an Asian immigrant, so she has personal experience in using a diverse lens while helping people transform from a state of reactivity to a state of creativity, growth, and even playfulness.',
  },
  {
    name: 'Hope Sauer',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: hope,
    bio: 'Hope is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. Soon, she will also have her Licensed Associate Counselor (LAC) in the state of AZ as well. She graduated from the University of Arizona with her bachelors in family studies and human development. She went on to complete her masters in clinical mental health counseling. Hope brings 7 years of experience to BLBT. Her background includes many different age groups, but primarily teens, young adults, and adults. Hope specializes in anxiety, depression, and relationships. She is client-centered, trauma-informed, strengths-based, solutions-focused, and values-based. Hope understands that being a cisgender White woman is a very different experience than a lot of other people experience and she wants to make sure to hold space for equity, justice, diversity, inclusion as it relates to the clients she services. She\'s hoping that clients will see therapy as a car ride. The client is in the driver\'s seat all the while receiving gentle guidance, motivation, and empathy along the way.',
  },
  {
    name: 'Jennifer Valenzuela-Sliger',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: jennifer,
    bio: 'Jennifer Valenzuela-Sliger is a Licensed Professional Counselor Candidate (LPCC) in the state of Colorado. Jennifer graduated with her undergraduate and graduate degree from the University of Nevada, Reno. Jennifer obtained her counseling degree from Adams State University in 2017. Jennifer brings 12 years of experience working with adolescents and families to the Better Lives Building Tribes community. She is eclectic in that she uses client-centered approaches to meet her client\'s needs. She is proficient in motivational interviewing, and trauma-informed practices, but she also knows that clients are their own best asset. Jennifer is bilingual and thrives in her ability to provide services to clients of all different backgrounds.',
  },
  {
    name: 'Kaite Lempp',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: kaite,
    bio: 'Kaite is a Licensed Professional Counselor Candidate (LPCC) in the State of CO. She graduated from the University of Northern Colorado with a Bachelor of Arts in psychology in 2018, and went on to complete her Master of Arts in clinical mental health counseling and transpersonal art therapy. With over six years of experience in the mental health field, working with diverse populations, Kaite is most intrigued by helping clients navigate the complexity of their relationships, in hopes that they can heal themselves through a better understanding of this intersection. Kaite believes in developing the therapeutic relationship as the catalyst to real change. She provides compassionate, trauma-informed care to her clients. She believes in a client-centered approach, where the client is the expert of their own experiences and their future goals and objectives. Kaite acts as the facilitator as her clients show her what is most valuable for them. If so desired, Kaite\'s expertise in art therapy can encourage more holistic, organic, and creative aspects of mental health.',
  },
  {
    name: 'Kiana Dearborn',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: kiana,
    bio: 'Kiana Dearborn is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. She has 6 years of experience helping people navigate complicated life challenges that make them feel stuck, disconnected, or misunderstood. Whether people are navigating conflict, communication struggles, major life transitions, or a desire to deepen their connection, Kiana is here to help. Kiana likes to create a safe and supportive space where both individuals and couples can feel heard, understood, and valued. Her approach is relational and collaborative\u2014focusing on strengthening communication, rebuilding trust, and fostering deeper emotional connection. She integrates holistic and evidence-based methods tailored to specific relationship and individual needs. She believes every relationship has inherent strengths, and she also believes that everyone can work toward growth, healing, and lasting change.',
  },
  {
    name: 'Patti Roberts',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: patti,
    bio: 'Patti is a Licensed Professional Counselor (LPC) in the State of CO. She received her Bachelor of Arts from the University of Illinois and later went on to earn a Master of Arts in counseling from Adam\'s State University in 2018. For the last five years, Patti has worked in the academic setting, providing mental health support to students, staff and families. Prior to her time in education, Patti worked in community mental health, helping clients transition between different levels of care for varying symptoms of depression and/or anxiety, resulting from traumatic experiences (as a child or more recently), addiction, abuse, or regular relational conflict. Patti places a large emphasis on the community that we surround ourselves by. Patti utilizes multiple modalities for providing therapy, depending on the needs of the client. She provides a trauma-informed space that is safe, non-judgmental, and accepting to explore deep thoughts and emotions. Patti believes that life will always provide us with difficult times, things to get through, and struggles from which to grow. These are experiences we get simply for being human. However, just because pain is to be expected does not mean we have to suffer alone. Patti works to find the source of the issue, create new skills and ways of thinking, and find healing and personal growth in the struggle.',
  },
  {
    name: 'Samuel Bierbrauer',
    title: 'CO Therapist',
    license: 'LPC',
    licensedIn: 'CO',
    photo: samuel,
    bio: 'Samuel Bierbrauer is a Licensed Professional Counselor (LPC) in the State of Colorado. Samuel graduated from Colorado Mesa University in 2012 with a bachelor\'s degree in psychology and went on to complete his master\'s degree in in mental health counseling at Arizona State University. In 2017, he received his Ph.D. in counselor education from the University of Central Florida. Samuel has a diverse range of clinical experience in working with individuals, couples, and families who struggle with various mental health issues, such as depression, anxiety, personality disorders, and addictions. Samuel takes a client-centered approach to counseling in that he collaboratively works with clients to not only better understand themselves but assist clients on their journey towards a more fulfilling, values-driven life. By utilizing mindfulness-based techniques, Samuel invites his clients to actively engage in the counseling process to achieve their goals of living a life filled with purpose and passion.',
  },
  {
    name: 'Tara Anderson',
    title: 'CO Therapist',
    license: 'LPCC',
    licensedIn: 'CO',
    photo: tara,
    bio: 'Tara is a Licensed Professional Counselor Candidate (LPCC) in the state of CO. She completed her undergraduate psychological studies in 2018 and completed her masters in contemplative psychology and Buddhist psychology in 2022. During her academic endeavors, Tara worked as a mentor, role model, and a facilitator for youth. She was able to facilitate guided meditations, yoga, creative arts, gardening, and help cultivate a passion for music. Her work with adults has largely focused on trauma, not only how to approach the trauma itself, but also how to navigate the side effects of trauma. Tara\'s therapeutic modality is trauma-informed, client-focused, and strengths-based. Tara considers herself to be a LGBTQIA+ ally and welcomes clients of a diverse background.',
  },
  {
    name: 'Helen Hudson',
    title: 'AZ Therapist',
    license: 'NBCC',
    licensedIn: 'AZ',
    photo: helen,
    bio: 'Helen is a Nationally Board Certified Counselor (NBCC). She has an undergraduate degree in communications from Stanford and a MEd in human development counseling from Vanderbilt. Helen has 30 years of experience within the private and community sectors of mental health, while also having expertise in the telehealth world. Helen is certified both as a trauma therapist and a specialist in ADHD. Helen enjoys working working with diverse populations where she can tailor treatment to match her client\'s needs. Helen brings a wealth of information to her clients as she has authored a memoir on Alzheimer\'s, written a column for the American Counseling Association, and presently writes an advice column for the Stanford Daily. Helen enjoys weaving a little bit of humor amidst her knowledge and expertise.',
  },
  {
    name: 'Kevin Marquez',
    title: 'AZ Therapist',
    license: 'LAC',
    licensedIn: 'AZ',
    photo: kevin,
    bio: 'Kevin is a Licensed Associate Counselor (LAC) in the state of AZ. Kevin completed his undergraduate psychological studies in 2018 and completed his masters degree in professional counseling in 2022. Kevin immigrated from Mexico to the United States when he was 11 and is proud to consider himself a first generation college graduate. Kevin is bilingual and open to clients with a diverse background. He considers himself to be a LGBTQIA+ ally. Kevin has experience with children, adolescents, and adults either in an individual setting or within the bounds of a couple or family structure. He is eclectic in that he uses the modality that is most suitable to his clients. Solutions-focused, trauma-informed, and strengths-based stand out as the most heavily used modalities. Kevin is committed to getting clients to the best versions of themselves.',
  },
  {
    name: 'Tara Brisnehan',
    title: 'AZ Therapist',
    license: 'LPC',
    licensedIn: 'AZ',
    photo: taraBris,
    bio: 'Tara is a Licensed Professional Counselor (LPC) in the state of AZ. She has had over 7 years of experience working with individuals, couples, and families. She works primarily with adults during any of their life phases as her approach is client centered, strength-based and solutions-focused. Tara works with primarily anxiety and depression, but especially focuses on how these mental health issues present themselves in relationships. Life challenges are inevitable, but Tara believes that having a safe, validating, nurturing therapeutic environment can be the catalyst to the best outcome. Tara works hard to build self-confidence in her clients so they feel empowered and motivated to accomplish their goals. Between helping her clients feel safe, and working hard to increase client\'s perspective of themselves, treatment goals and objectives are significantly easier to accomplish.',
  },
];
