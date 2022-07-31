
# Frequency Response

This custom type contains response for frequency endpoint.

## Structure

`FrequencyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string \| undefined` | Optional | The word that is searched. |
| `frequency` | [`FrequencyDetails \| undefined`](../../doc/models/frequency-details.md) | Optional | This model contains frequency details of a specific word. |

## Example (as JSON)

```json
{
  "word": "wind",
  "frequency": {
    "zipf": 4.81,
    "perMillion": 64.22,
    "diversity": 0.2
  }
}
```

