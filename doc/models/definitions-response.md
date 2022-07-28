
# Definitions Response

This custom type contains response for definitions endpoint.

## Structure

`DefinitionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Required | The word that is searched. |
| `definition` | `string[]` | Required | The definitions of the searched word. |

## Example (as JSON)

```json
{
  "word": "lovely",
  "definition": [
    "lovable especially in a childlike or naive way",
    "a very pretty girl who works as a photographer's model",
    "appealing to the emotions as well as the eye"
  ]
}
```

