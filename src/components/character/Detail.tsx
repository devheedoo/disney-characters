import { useParams } from "react-router-dom";
import { useGetCharacterDetails } from "../../hooks/useGetCharacterDetails";

const Detail = () => {
  const { id } = useParams();

  const { data: characterDetails, isLoading } = useGetCharacterDetails(id);

  return (
    <div>
      <h1>Detail</h1>
      {isLoading || !characterDetails ? (
        <p>Loading...</p>
      ) : (
        <ul key={characterDetails.id}>
          <li>{characterDetails.name}</li>
          <li>{characterDetails.imageUrl}</li>
          <li>{characterDetails.films}</li>
          <li>{characterDetails.sourceUrl}</li>
        </ul>
      )}
    </div>
  );
};

export default Detail;
