import { useQuery } from "@tanstack/react-query";
import { CharacterSummary } from "../types/CharacterSummary";
import { DAY } from "../constants/times";

const getAllCharacters = async (): Promise<CharacterSummary[]> => {
  return fetch("https://disney_api.nomadcoders.workers.dev/characters").then(
    (res) => res.json()
  );
};

export const useGetAllCharacters = () => {
  return useQuery(["getAllCharacters"], getAllCharacters, {
    // for reducing unnecessary reload
    cacheTime: DAY,
    staleTime: DAY,
  });
};
