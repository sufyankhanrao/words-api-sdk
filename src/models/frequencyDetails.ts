/**
 * Words APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

/** This model contains frequency details of a specific word. */
export interface FrequencyDetails {
  /** Explains the zipf score. */
  zipf: number;
  /** Explains the perMillion score. */
  perMillion: number;
  /** Explains the diversity score. */
  diversity: number;
}

export const frequencyDetailsSchema: Schema<FrequencyDetails> = object({
  zipf: ['zipf', number()],
  perMillion: ['perMillion', number()],
  diversity: ['diversity', number()],
});
