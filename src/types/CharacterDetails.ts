import { CharacterSummary } from "./CharacterSummary";

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
