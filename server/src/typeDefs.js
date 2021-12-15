const typeDefs = `
schema {
  query: Query
}
# this is how you add a comment
type Query {
  books: [Book]
}
type Book {
  id: ID!
  """
  This is how
  a
  multi-line comment is made
  """
  title: String!
  description: String!
  imageUrl(size: ImageSize = LARGE): String!
  rating: Float
  subtitle: String
  ratingCount: Int
  authors: [Author]
}

type Author {
  id: ID!
  name: String
}

enum ImageSize {
  SMALL
  LARGE
}
`
// Be careful when selecting fields - some can be in SNAKE CASE, not camelCase
// to finx this, one option would be to add a resolver for this field BUT if you have dozens of these fields, it's not preferrable
// to fix this elegantly, we can use humps package in query function in db.js to transform all keys
export default typeDefs;