import { useParams } from "react-router";
import { useFetch } from "@/hooks/useFetch";
import { getGameById } from "@/api/gameService";

export default function DetailPage() {
  const { id } = useParams();
  const { data: game, loading } = useFetch(() => getGameById(id), [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!game) return <div className="p-8">Game tidak ditemukan.</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{game.title}</h1>
      <p className="text-sm text-gray-500">Rating: {game.ageRating}</p>
      <p className="mt-2">{game.description}</p>
    </div>
  );
}