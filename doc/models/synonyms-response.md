
# Synonyms Response

This custom type contains response for synonyms endpoint.

## Structure

`SynonymsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string \| undefined` | Optional | The word that is searched. |
| `synonyms` | `string[] \| undefined` | Optional | The synonyms of the searched word. |

## Example (as JSON)

```json
{
  "word": "lovely",
  "synonyms": [
    "adorable",
    "endearing",
    "cover girl",
    "pin-up"
  ]
}
```

