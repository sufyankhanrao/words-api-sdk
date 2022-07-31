/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** This model contains pronunciation details of a specific word. */
export interface PronunciationDetails {
  /** The pronunciation of the word. */
  all?: string | null;
  /** The noun pronunciation of the word. */
  noun?: string | null;
  /** The verb pronunciation of the word. */
  verb?: string | null;
}

export const pronunciationDetailsSchema: Schema<PronunciationDetails> = object({
  all: ['all', optional(nullable(string()))],
  noun: ['noun', optional(nullable(string()))],
  verb: ['verb', optional(nullable(string()))],
});
