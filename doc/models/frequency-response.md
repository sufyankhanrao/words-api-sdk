
# Frequency Response

This custom type contains response for frequency endpoint.

## Structure

`FrequencyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Required | The word that is searched. |
| `frequency` | [`FrequencyDetails`](../../doc/models/frequency-details.md) | Required | This model contains frequency details of a specific word. |

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

