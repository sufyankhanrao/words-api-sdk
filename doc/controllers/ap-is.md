# AP Is

```ts
const aPIsController = new APIsController(client);
```

## Class Name

`APIsController`

## Methods

* [Synonyms](../../doc/controllers/ap-is.md#synonyms)
* [Definitions](../../doc/controllers/ap-is.md#definitions)
* [Pronunciation](../../doc/controllers/ap-is.md#pronunciation)
* [Word](../../doc/controllers/ap-is.md#word)
* [Examples](../../doc/controllers/ap-is.md#examples)
* [Frequency](../../doc/controllers/ap-is.md#frequency)


# Synonyms

Get synonyms of a word.

```ts
async synonyms(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SynonymsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | The word to search synonyms for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SynonymsResponse`](../../doc/models/synonyms-response.md)

## Example Usage

```ts
const word = 'lovely';
try {
  const { result, ...httpResponse } = await aPIsController.synonyms(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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


# Definitions

Get definitions of a word, including the part of speech.

```ts
async definitions(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DefinitionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | The word to search the definitions for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DefinitionsResponse`](../../doc/models/definitions-response.md)

## Example Usage

```ts
const word = 'lovely';
try {
  const { result, ...httpResponse } = await aPIsController.definitions(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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


# Pronunciation

How to pronounce a word, according to the International Phonetic Alphabet. May include multiple results if the word is pronounced differently depending on its part of speech.

```ts
async pronunciation(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PronunciationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | The word to search pronunciation for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PronunciationResponse`](../../doc/models/pronunciation-response.md)

## Example Usage

```ts
const word = 'wind';
try {
  const { result, ...httpResponse } = await aPIsController.pronunciation(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "word": "wind",
  "pronunciation": {
    "all": "wɪnd",
    "noun": "wɪnd",
    "verb": "waɪnd"
  }
}
```


# Word

Retrieve information about a word. Results can include definitions, part of speech, synonyms, related words, syllables, and pronunciation. This method is useful to see which relationships are attached to which definition and part of speech of a word.

```ts
async word(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | This is a template parameter that is used to provide the word, about which the information is being fetched. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WordResponse`](../../doc/models/word-response.md)

## Example Usage

```ts
const word = 'Testing';
try {
  const { result, ...httpResponse } = await aPIsController.word(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Examples

Get examples of how the word is used.

```ts
async examples(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ExamplesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | The word to search the examples for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExamplesResponse`](../../doc/models/examples-response.md)

## Example Usage

```ts
const word = 'wind';
try {
  const { result, ...httpResponse } = await aPIsController.examples(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "word": "testing",
  "examples": [
    "there are laboratories for commercial testing",
    "it involved testing thousands of children for smallpox",
    "they agreed to end the testing of atomic weapons"
  ]
}
```


# Frequency

Expands upon the frequency score returned by the main /words/{word} endpoint. Returns zipf, a score indicating how common the word is in the English language, with a range of 1 to 7; per Million, the number of times the word is likely to appear in a corpus of one million English words; and diversity, a 0-1 scale the shows the likelihood of the word appearing in an English document that is part of a corpus.

```ts
async frequency(
  word: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FrequencyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `word` | `string` | Template, Required | The word to search frequency for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FrequencyResponse`](../../doc/models/frequency-response.md)

## Example Usage

```ts
const word = 'lovely';
try {
  const { result, ...httpResponse } = await aPIsController.frequency(word);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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

