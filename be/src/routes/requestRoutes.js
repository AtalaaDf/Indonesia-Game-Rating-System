import { Router } from "express";
import { createGameRequest, createSuggestion } from "../controllers/requestController.js";

const router = Router();

// Endpoint POST /api/requests dan POST /api/suggestions
router.post("/requests", createGameRequest);
router.post("/suggestions", createSuggestion);

export default router;
