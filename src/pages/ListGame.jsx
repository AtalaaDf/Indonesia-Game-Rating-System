import { useEffect, useState } from "react";
import { getGames } from "@/api/gameService";

export default function ListGame() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ListGame</h1>
      <ul className="space-y-2">
        {games.map((game) => (
          <li key={game.id}>{game.title} — {game.ageRating}</li>
        ))}
      </ul>
    </div>
  );
}