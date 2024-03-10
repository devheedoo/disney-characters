import styled from "styled-components";
import { useGetAllCharacters } from "../hooks/useGetAllCharacters";

const Background = styled.div<{ children?: React.ReactNode }>`
  background-color: #0f0f0f;
`;

const PageTitle = styled.h1`
  color: #efefef;
  font-size: 36px;
  font-weight: bolder;
  font-style: italic;
  padding: 16px 24px;
  text-align: center;
`;

const CardsContainer = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  gap: 24px;
`;

const Card = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  width: 240px;
  height: 180px;
  border-radius: 24px;
  font-size: 16px;
  font-style: italic;
  color: #efefef;
  transition: all 200ms;

  &:hover {
    background-color: #efefef;
    color: #0f0f0f;
  }
`;

const CardImage = styled.div<{ imageUrl: string; children?: React.ReactNode }>`
  width: 120px;
  height: 120px;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;

const Home = () => {
  const { data: allCharacters, isLoading } = useGetAllCharacters();

  return (
    <Background>
      <PageTitle>Disney Characters</PageTitle>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CardsContainer>
          {allCharacters?.map((summary) => (
            <Card key={summary.id}>
              <CardImage imageUrl={summary.imageUrl} />
              {summary.name}
            </Card>
          ))}
        </CardsContainer>
      )}
    </Background>
  );
};

export default Home;
