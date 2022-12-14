/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, nullable, object, optional, Schema, string } from '../schema';

/** This custom type contains response for synonyms endpoint. */
export interface SynonymsResponse {
  /** The word that is searched. */
  word?: string | null;
  /** The synonyms of the searched word. */
  synonyms?: string[] | null;
}

export const synonymsResponseSchema: Schema<SynonymsResponse> = object({
  word: ['word', optional(nullable(string()))],
  synonyms: ['synonyms', optional(nullable(array(string())))],
});
