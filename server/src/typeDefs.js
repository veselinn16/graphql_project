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
  imageUrl: String!
  rating: Float
}
`

export default typeDefs;