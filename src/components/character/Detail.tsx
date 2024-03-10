import { useEffect, useState } from "react";
import { CharacterSummary } from "../Home";
import { useParams } from "react-router-dom";

export interface CharacterDetails extends CharacterSummary {
  /**
   * @example ["The Computer Wore Tennis Shoes", "Now You See Him, Now You Don't", "The Strongest Man in the World"]
   */
  films: string[];
  /**
   * @example "https://disney.fandom.com/wiki/A.J._Arno"
   */
  sourceUrl: string;
}

const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<CharacterDetails | null>(null);

  useEffect(() => {
    fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
      .then((res) => res.json())
      .then(setDetails);
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {details && (
        <ul key={details.id}>
          <li>{details.name}</li>
          <li>{details.imageUrl}</li>
          <li>{details.films}</li>
          <li>{details.sourceUrl}</li>
        </ul>
      )}
    </div>
  );
};

export default Detail;
