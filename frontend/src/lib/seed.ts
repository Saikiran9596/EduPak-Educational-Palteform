import { supabase } from "./supabase";
import { tutors } from "./tutors";

export async function seed() {
  console.log("Seeding tutors...");

  for (const tutor of tutors) {
    const { error } = await supabase.from("tutors").upsert({
      id: tutor.id,
      name: tutor.name,
      tagline: tutor.tagline,
      qualification: tutor.qualification,
      subjects: tutor.subjects,
      level_tags: tutor.levelTags,
      rating: tutor.rating,
      reviews_count: tutor.reviewsCount,
      city: tutor.city,
      area: tutor.area,
      modes: tutor.modes,
      price_pkr_per_hour: tutor.pricePkrPerHour,
      verified: tutor.verified,
      avatar_url: tutor.avatarUrl,
      about: tutor.about,
    });

    if (error) {
      console.error(`Error seeding tutor ${tutor.name}:`, error);
    } else {
      console.log(`Successfully seeded tutor ${tutor.name}`);
    }
  }

  console.log("Seeding complete!");
}

// You can call this function from a developer-only route or script
// seed();
