import { useParams } from "react-router-dom";
import { useGetCharacterDetails } from "../../hooks/useGetCharacterDetails";
import styled from "styled-components";

const Background = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Card = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  width: 360px;
  padding: 24px;
  font-size: 24px;
  font-style: italic;
  color: #efefef;
  transition: all 200ms;
`;

const CardImage = styled.div<{ imageUrl: string; children?: React.ReactNode }>`
  width: 180px;
  height: 180px;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;

const FilmsWrapper = styled.div<{ children?: React.ReactNode }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const Film = styled.div<{ children?: React.ReactNode }>`
  background-color: #efefef;
  color: #0f0f0f;
  display: inline-block;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px;
`;

const Detail = () => {
  const { id } = useParams();

  const { data: characterDetails, isLoading } = useGetCharacterDetails(id);

  return (
    <Background>
      <PageTitle>Disney Characters</PageTitle>
      {isLoading || !characterDetails ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card>
            <CardImage imageUrl={characterDetails.imageUrl} />
            {characterDetails.name}'s Films
            <FilmsWrapper>
              {characterDetails.films.map((film) => (
                <Film>{film}</Film>
              ))}
            </FilmsWrapper>
          </Card>
        </>
      )}
    </Background>
  );
};

export default Detail;
