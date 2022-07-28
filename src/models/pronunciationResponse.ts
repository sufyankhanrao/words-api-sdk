/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  PronunciationDetails,
  pronunciationDetailsSchema,
} from './pronunciationDetails';

/** This custom type contains response for pronunciation endpoint. */
export interface PronunciationResponse {
  /** The word that is searched. */
  word: string;
  /** This model contains pronunciation details of a specific word. */
  pronunciation: PronunciationDetails;
}

export const pronunciationResponseSchema: Schema<PronunciationResponse> = object(
  {
    word: ['word', string()],
    pronunciation: ['pronunciation', lazy(() => pronunciationDetailsSchema)],
  }
);
