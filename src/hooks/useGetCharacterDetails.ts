import { useQuery } from "@tanstack/react-query";
import { DAY } from "../constants/times";
import { CharacterDetails } from "../types/CharacterDetails";

const getCharacterDetails = async (id: string): Promise<CharacterDetails> => {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((res) => res.json());
};

export const useGetCharacterDetails = (id?: string) => {
  return useQuery(["getCharacterDetails", id], () => getCharacterDetails(id!), {
    // for reducing unnecessary reload
    cacheTime: DAY,
    staleTime: DAY,
    enabled: Boolean(id),
  });
};
