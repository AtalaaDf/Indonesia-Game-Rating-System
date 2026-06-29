import prisma from "../config/db.js";

// Buat pengajuan game rating baru (FormRequest)
export async function createGameRequest(req, res, next) {
  try {
    const { title, publisher, description, email } = req.body;

    if (!title || !publisher || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, publisher, dan description wajib diisi.",
      });
    }

    const gameRequest = await prisma.gameRequest.create({
      data: {
        title,
        publisher,
        description,
        email,
      },
    });

    res.status(201).json({
      success: true,
      message: "Pengajuan game rating berhasil dikirim.",
      data: gameRequest,
    });
  } catch (error) {
    next(error);
  }
}

// Buat saran klasifikasi game (FormSuggestion)
export async function createSuggestion(req, res, next) {
  try {
    const { gameId, feedback, email } = req.body;

    if (!feedback) {
      return res.status(400).json({
        success: false,
        message: "Saran / feedback wajib diisi.",
      });
    }

    const suggestion = await prisma.suggestion.create({
      data: {
        gameId: gameId ? parseInt(gameId, 10) : null,
        feedback,
        email,
      },
    });

    res.status(201).json({
      success: true,
      message: "Saran klasifikasi berhasil dikirim.",
      data: suggestion,
    });
  } catch (error) {
    next(error);
  }
}
