Build an API for the DVD Database
====

Build a REST API for the dvd database with the following endpoints. Make sure your request payloads and responses match the formats that I have provided.

### 1. GET /api/v1/genres - All genres

The response should contain all genres in the following structure:

```js
{
  "genres": [
    { "id": 1, "genre_name": "Action" },
    { "id": 2, "genre_name": "Action Adventure" },
    ...
  ]
}
```

### 2. GET /api/v1/genres/{id} - A single genre

This should respond with a single genre for the given id with a structure like:

```json
{
  "genre": {
    "id": 1,
    "genre_name": "Action"
  }
}
```

### 3. GET /api/v1/dvds - The first 20 dvds

Return 20 dvds. `genre_id` should be labeled as `genre`. `rating_id` should be labeled as `rating`. Related records should be sideloaded under the keys `genres` and `ratings`.

```js
{
  "dvds": [
    {
      "id": 1,
      "title": "Fast and Furious",
      "award": "Oscar" ,
      "genre": 1,
      "rating": 7
    },
    ...
  ],
  "genres": [
    {
      "id": 1,
      "genre_name": "Action"
    },
    ...
  ],
  "ratings": [
    {
      "id": 7,
      "rating_name": "R"
    },
    ...
  ]
}
```

### 4. GET /api/v1/dvds/{id} - A single dvd

`genre_id` should be labeled as `genre`. `rating_id` should be labeled as `rating`. Related records should be sideloaded under the keys `genres` and `ratings`.

```json
{
  "dvd": {
    "id": 1,
    "title": "Fast and Furious",
    "award": "Oscar" ,
    "genre": 1,
    "rating": 7
  },
  "genres": [
    {
      "id": 1,
      "genre_name": "Action"
    }
  ],
  "ratings": [
    {
      "id": 7,
      "rating_name": "R"
    }
  ]
}
```

### 5. POST /api/v1/dvds - Create a dvd

Request payload should look like the following:

```json
{
  "dvd": {
    "title": "Fast and Furious",
    "award": "Oscar" ,
    "genre": 1,
    "rating": 7
  }
}
```

Notice how the request payload has no id property. The response should look like the following:

```json
{
  "dvd": {
    "id": 99,
    "title": "Fast and Furious",
    "award": "Oscar" ,
    "genre": 1,
    "rating": 7
  }
}
```

Notice how there is an id property now.
