
# Word Details

This custom type stores word information.

## Structure

`WordDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `definition` | `string \| undefined` | Optional | Explains the definition of the word. |
| `partOfSpeech` | `string \| undefined` | Optional | Explains what part of speech the word is. |
| `synonyms` | `string[] \| undefined` | Optional | The list of synonyms. |
| `typeOf` | `string[] \| undefined` | Optional | List of words that are more general than the searched word. |
| `hasTypes` | `string[] \| undefined` | Optional | More specific examples of types of searched word. |
| `derivation` | `string[] \| undefined` | Optional | The derivation if any. |
| `examples` | `string[] \| undefined` | Optional | The usage examples of word if any. |
| `antonyms` | `string[] \| undefined` | Optional | List of antonyms for the searched word. |
| `verbGroup` | `string[] \| undefined` | Optional | The verb group of the searched word. |
| `hasParts` | `string[] \| undefined` | Optional | Words that are parts of the searched word. |
| `hasSubstances` | `string[] \| undefined` | Optional | Words that are substances of the searched word. |
| `entails` | `string[] \| undefined` | Optional | Words that are implied by the searched word. Usually used for verbs. |

## Example (as JSON)

```json
{
  "definition": "coil the spring of (some mechanical device) by turning a stem",
  "partOfSpeech": "verb",
  "synonyms": [
    "wind up"
  ],
  "entails": [
    "turn"
  ],
  "typeOf": [
    "fasten",
    "tighten"
  ],
  "hasTypes": [
    "rewind"
  ],
  "derivation": [
    "winder"
  ],
  "examples": [
    "wind your watch"
  ]
}
```

