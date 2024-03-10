import { useEffect, useState } from "react";
import { CharacterSummary } from "../types/CharacterSummary";

const Home = () => {
  const [allCharacters, setAllCharacters] = useState<CharacterSummary[]>([]);

  useEffect(() => {
    fetch("https://disney_api.nomadcoders.workers.dev/characters")
      .then((res) => res.json())
      .then(setAllCharacters);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {allCharacters.map((summary) => (
          <li key={summary.id}>{summary.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
