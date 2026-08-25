import { MovieDBCast } from "../interfaces/moviedb-credits.response";

export const mapCast = (actor: MovieDBCast) => ({
  id: actor.id,
  name: actor.name,
  character: actor.character ?? "No character",
  avatar: actor.profile_path
    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    : "https://i.stack.imgur.com/l60Hf.png",
});
