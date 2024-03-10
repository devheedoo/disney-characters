import { useGetAllCharacters } from "../hooks/useGetAllCharacters";

const Home = () => {
  const { data: allCharacters, isLoading } = useGetAllCharacters();

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {allCharacters?.map((summary) => (
            <li key={summary.id}>{summary.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
