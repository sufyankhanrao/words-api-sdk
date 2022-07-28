/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** This model contains pronunciation details of a specific word. */
export interface PronunciationDetails {
  /** The pronunciation of the word. */
  all: string;
  /** The noun pronunciation of the word. */
  noun?: string;
  /** The verb pronunciation of the word. */
  verb?: string;
}

export const pronunciationDetailsSchema: Schema<PronunciationDetails> = object({
  all: ['all', string()],
  noun: ['noun', optional(string())],
  verb: ['verb', optional(string())],
});