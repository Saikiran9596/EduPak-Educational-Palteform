import { supabase } from "./supabase";

export type Tutor = {
  id: string;
  name: string;
  tagline: string;
  qualification: string;
  subjects: string[];
  levelTags: string[];
  rating: number;
  reviewsCount: number;
  city: string;
  area?: string;
  modes: Array<"Online" | "Home" | "TutorLocation">;
  pricePkrPerHour: number;
  verified: boolean;
  avatarUrl: string;
  about: string[];
};

export const tutors: Tutor[] = [
  // ... existing mock data kept as fallback
  {
    id: "sarah-ahmed",
    name: "Sarah Ahmed",
    tagline: "MPhil Mathematics, LUMS",
    qualification: "MPhil Mathematics",
    subjects: ["Mathematics", "Physics"],
    levelTags: ["O-Levels"],
    rating: 4.9,
    reviewsCount: 120,
    city: "Lahore",
    area: "DHA Phase 5",
    modes: ["Online", "Home"],
    pricePkrPerHour: 2500,
    verified: true,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcFQz8vIb8oN5Zk95IgLxEKaT1Y6w6h33jvB7ZwqCypHnhPbJPA1aGYL_QVzSYoJssiXX7iMOoiiUqVZ9Blf20izQC5ymsybuT9B1h1KN9be_jDQ9klp9oFfx13sSEJUCw7zzVWj8hwxGRoRInF1JINMMFX5QxAKm3zEK0dxgqmrIe9n2Ls84pI_ML-jtG5p3CxDztcttlzp3730wzJJbBsvGhgNJADveGXJp6V80VcCOq0llF5K0YZdxNctAajlag38DLz6AbN_x5",
    about: [
      "I focus on building strong fundamentals with exam-oriented practice.",
      "My sessions are structured, interactive, and tailored to each student’s pace.",
    ],
  },
  {
    id: "ali-hassan",
    name: "Ali Hassan",
    tagline: "BS Computer Science, NUST",
    qualification: "BS Computer Science",
    subjects: ["Computer Science", "Coding"],
    levelTags: ["Programming"],
    rating: 4.8,
    reviewsCount: 85,
    city: "Online Only",
    modes: ["Online"],
    pricePkrPerHour: 3000,
    verified: true,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeQ9x6kNQosMlgWecaMqb_PrUViU7_WLE6GXFRnt0jCPJKxgo5HVRVma_bjlNYVcYHjrFlGi-G1HIABn_25el8RrwuE8iFUC3U5CxN80dSTJhgAfHd79yky6KOVDgaLhjEgiKtpcsxfUkSzK4g8dEh_GwYCRW0uOCYbJCtUiwrjJbkS3SUn9ZOvKxtJL4jdjWkpOHQrHYfs4Z0L60cTCCsvMBnDRYoULB_qEmRh3Gmprluy-WKrxem_w_4k5zNr82HuUjVagG7DH6Z",
    about: [
      "I teach modern programming foundations with project-based learning.",
      "Great for beginners and students preparing for CS exams.",
    ],
  },
  {
    id: "fatima-khan",
    name: "Fatima Khan",
    tagline: "MA English Literature, PU",
    qualification: "MA English Literature",
    subjects: ["English", "IELTS"],
    levelTags: ["A-Levels"],
    rating: 5.0,
    reviewsCount: 210,
    city: "Islamabad",
    area: "F-8",
    modes: ["TutorLocation"],
    pricePkrPerHour: 4000,
    verified: true,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8CWGUvnlh-IMWF4xtH4zF4zJZiZxG7j3FLTARftFN5y7CF2fJNNxRte3sRSdZTtzJwiu__OnKmV12kHWYgVZlMrebrS7Kgt4fRu0qXtHJ4SQZD8godb7I1C8ceMVr7h5nj9ydvnFU42aS9zmbAJE3dP7X7YupJ1qE2HZBc7Q2WcncYDnrME_WkXPGTRnLB0COX0K5-mEWNT3xtKMRBkrYqZSyIulUogucX8CGhHcirGnbAPC0Vpo06XePJSZhJI4zY_7of3bVlQ_",
    about: [
      "I specialize in IELTS strategies, writing clarity, and confident speaking.",
      "My lessons are supportive and focused on measurable improvement.",
    ],
  },
  {
    id: "ayesha-khan",
    name: "Ayesha Khan",
    tagline: "M.Sc. Physics (Gold Medalist), Punjab University",
    qualification: "M.Sc. Physics",
    subjects: ["Physics", "Mathematics"],
    levelTags: ["O/A Levels"],
    rating: 4.9,
    reviewsCount: 124,
    city: "Lahore",
    area: "Gulberg",
    modes: ["Online", "Home"],
    pricePkrPerHour: 2500,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=ayesha",
    about: ["With 8+ years of teaching experience, I simplify complex concepts into easy steps."],
  },
  {
    id: "zain-ali",
    name: "Zain Ali",
    tagline: "BS Physics, GIKI",
    qualification: "BS Physics",
    subjects: ["Physics", "Mathematics"],
    levelTags: ["O-Levels", "Matric"],
    rating: 4.7,
    reviewsCount: 45,
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
    modes: ["Home", "Online"],
    pricePkrPerHour: 1800,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=zain",
    about: ["I make physics fun with real-world examples.", "Passionate about helping students overcome exam anxiety."],
  },
  {
    id: "hamza-sheikh",
    name: "Hamza Sheikh",
    tagline: "ACCA Qualified, Corporate Trainer",
    qualification: "ACCA",
    subjects: ["Accounting", "Economics"],
    levelTags: ["A-Levels", "O-Levels"],
    rating: 4.9,
    reviewsCount: 67,
    city: "Lahore",
    area: "Johar Town",
    modes: ["Online", "Home"],
    pricePkrPerHour: 3500,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=hamza",
    about: ["Specialized in financial accounting and O/A Level economics.", "I focus on conceptual clarity and past paper practice."],
  },
  {
    id: "maryam-bibi",
    name: "Maryam Bibi",
    tagline: "MSc Biology, Quaid-i-Azam University",
    qualification: "MSc Biology",
    subjects: ["Biology", "Chemistry"],
    levelTags: ["Matric", "FSC"],
    rating: 4.8,
    reviewsCount: 32,
    city: "Islamabad",
    area: "G-11",
    modes: ["Home"],
    pricePkrPerHour: 1500,
    verified: false,
    avatarUrl: "https://i.pravatar.cc/150?u=maryam",
    about: ["Experienced in teaching biological sciences to school and college students.", "I use visual aids and diagrams to make learning easier."],
  },
  {
    id: "bilal-ahmed",
    name: "Bilal Ahmed",
    tagline: "Senior Software Engineer, BSCS FAST",
    qualification: "BS Computer Science",
    subjects: ["Computer Science", "Programming"],
    levelTags: ["Programming", "A-Levels"],
    rating: 5.0,
    reviewsCount: 89,
    city: "Online Only",
    modes: ["Online"],
    pricePkrPerHour: 5000,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=bilal",
    about: ["Learn Python, Java, or C++ from an industry expert.", "I provide career guidance alongside technical skills."],
  },
  {
    id: "sara-latif",
    name: "Sara Latif",
    tagline: "MPhil Chemistry, UET",
    qualification: "MPhil Chemistry",
    subjects: ["Chemistry"],
    levelTags: ["O-Levels", "A-Levels"],
    rating: 4.6,
    reviewsCount: 28,
    city: "Lahore",
    area: "Model Town",
    modes: ["Home", "Online"],
    pricePkrPerHour: 2200,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=sara",
    about: ["Chemistry made simple. I specialize in organic and inorganic chemistry for Cambridge boards."],
  },
  {
    id: "usman-khan",
    name: "Usman Khan",
    tagline: "MBA Finance, IBA",
    qualification: "MBA Finance",
    subjects: ["Business Studies", "Economics"],
    levelTags: ["A-Levels", "O-Levels"],
    rating: 4.9,
    reviewsCount: 54,
    city: "Karachi",
    area: "DHA Phase 6",
    modes: ["Home", "TutorLocation"],
    pricePkrPerHour: 3000,
    verified: true,
    avatarUrl: "https://i.pravatar.cc/150?u=usman",
    about: ["Helping business students master economic theories and financial management."],
  },
];

export const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
  "Coding",
  "IELTS",
] as const;

export const cities = ["Lahore", "Karachi", "Islamabad", "Online Only"] as const;

export function formatPkr(amount: number) {
  return new Intl.NumberFormat("en-PK").format(amount);
}

type DbTutor = {
  id: string;
  name: string;
  tagline: string;
  qualification: string;
  subjects: string[];
  level_tags: string[];
  rating: number;
  reviews_count: number;
  city: string;
  area?: string;
  modes: Array<"Online" | "Home" | "TutorLocation">;
  price_pkr_per_hour: number;
  verified: boolean;
  avatar_url: string;
  about: string[];
};

export async function getTutors(): Promise<Tutor[]> {
  try {
    const { data, error } = await supabase.from("tutors").select("*");
    if (error) throw error;
    if (!data || data.length === 0) return tutors;

    return (data as DbTutor[]).map((t) => ({
      id: t.id,
      name: t.name,
      tagline: t.tagline,
      qualification: t.qualification,
      subjects: t.subjects,
      levelTags: t.level_tags,
      rating: Number(t.rating),
      reviewsCount: t.reviews_count,
      city: t.city,
      area: t.area,
      modes: t.modes,
      pricePkrPerHour: t.price_pkr_per_hour,
      verified: t.verified,
      avatarUrl: t.avatar_url,
      about: t.about,
    }));
  } catch (err) {
    console.error("Error fetching tutors from Supabase:", err);
    return tutors;
  }
}

export async function getTutorById(id: string): Promise<Tutor | undefined> {
  try {
    const { data, error } = await supabase
      .from("tutors")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) return tutors.find((t) => t.id === id);

    const t = data as DbTutor;

    return {
      id: t.id,
      name: t.name,
      tagline: t.tagline,
      qualification: t.qualification,
      subjects: t.subjects,
      levelTags: t.level_tags,
      rating: Number(t.rating),
      reviewsCount: t.reviews_count,
      city: t.city,
      area: t.area,
      modes: t.modes,
      pricePkrPerHour: t.price_pkr_per_hour,
      verified: t.verified,
      avatarUrl: t.avatar_url,
      about: t.about,
    };
  } catch (err) {
    console.error(`Error fetching tutor ${id} from Supabase:`, err);
    return tutors.find((t) => t.id === id);
  }
}
