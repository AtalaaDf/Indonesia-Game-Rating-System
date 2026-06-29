import { Link } from "react-router";
import { useFetch } from "@/hooks/useFetch";
import { getGames } from "@/api/gameService";

export default function ListGame() {
  const { data: games, loading } = useFetch(getGames);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ListGame</h1>
      <ul className="space-y-2">
        {(games ?? []).map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`} className="text-blue-600 hover:underline">
              {game.title} — {game.ageRating}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}