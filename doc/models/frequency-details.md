
# Frequency Details

This model contains frequency details of a specific word.

## Structure

`FrequencyDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `zipf` | `number` | Required | Explains the zipf score. |
| `perMillion` | `number` | Required | Explains the perMillion score. |
| `diversity` | `number` | Required | Explains the diversity score. |

## Example (as JSON)

```json
{
  "zipf": 4.81,
  "perMillion": 64.22,
  "diversity": 0.2
}
```

