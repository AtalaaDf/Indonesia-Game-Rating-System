import { apiClient } from "./client";
import { mockGames } from "./mockData/games";

export async function getGames() {
  try {
    return await apiClient.get("/games");
  } catch (err) {
    console.warn("[gameService] :", err.message);
    return mockGames;
  }
}

export async function getGameById(id) {
  try {
    return await apiClient.get(`/games/${id}`);
  } catch (err) {
    console.warn("[gameService] :", err.message);
    return mockGames.find((game) => String(game.id) === String(id)) ?? null;
  }
}