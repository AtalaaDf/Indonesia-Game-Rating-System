import prisma from "../config/db.js";

// Ambil semua daftar game
export async function getAllGames(req, res, next) {
  try {
    const { title } = req.query;

    const games = await prisma.game.findMany({
      where: title
        ? {
            title: {
              contains: title,
            },
          }
        : {},
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
}

// Ambil game berdasarkan ID
export async function getGameById(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: "ID tidak valid" });
    }

    const game = await prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      return res.status(404).json({ success: false, message: "Game tidak ditemukan" });
    }

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
}
