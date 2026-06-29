import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockGames = [
  {
    title: "Mobile Legends: Bang Bang",
    ageRating: "13+",
    publisher: "Moonton",
    coverImage: "/src/assets/hero.png",
    description: "Game MOBA 5v5 dengan elemen kekerasan ringan dan interaksi sosial online.",
    contentWarnings: ["Violence", "Online Interaction"],
  },
  {
    title: "Genshin Impact",
    ageRating: "12+",
    publisher: "HoYoverse",
    coverImage: "/src/assets/hero.png",
    description: "Game open-world action RPG dengan elemen fantasi dan gacha.",
    contentWarnings: ["Fantasy Violence", "Simulated Gambling"],
  },
  {
    title: "Valorant",
    ageRating: "16+",
    publisher: "Riot Games",
    coverImage: "/src/assets/hero.png",
    description: "Game FPS taktis dengan kekerasan grafis dan tema senjata.",
    contentWarnings: ["Intense Violence", "Blood"],
  },
];

async function main() {
  console.log("Memulai seeding data...");

  // Hapus data lama (opsional, agar bersih saat re-run)
  await prisma.game.deleteMany({});
  console.log("Data lama dibersihkan.");

  // Insert data baru
  for (const game of mockGames) {
    const createdGame = await prisma.game.create({
      data: game,
    });
    console.log(`Berhasil menambahkan game: ${createdGame.title}`);
  }

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("Terjadi error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
