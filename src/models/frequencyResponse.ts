/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { FrequencyDetails, frequencyDetailsSchema } from './frequencyDetails';

/** This custom type contains response for frequency endpoint. */
export interface FrequencyResponse {
  /** The word that is searched. */
  word: string;
  /** This model contains frequency details of a specific word. */
  frequency: FrequencyDetails;
}

export const frequencyResponseSchema: Schema<FrequencyResponse> = object({
  word: ['word', string()],
  frequency: ['frequency', lazy(() => frequencyDetailsSchema)],
});
