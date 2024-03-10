import { useEffect, useState } from "react";

export interface CharacterSummary {
  /**
   * @example 14
   */
  id: number;
  /**
   * @example "https://static.wikia.nocookie.net/disney/images/2/2c/A.J._Arno.jpg"
   */
  imageUrl: string;
  /**
   * @example "A.J. Arno"
   */
  name: string;
}

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
