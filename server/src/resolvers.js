import { allBooks } from "./book";

const resolvers = {
  Book: {
    // we can add resolvers for all fields if we want, but if we dont do so, the gql library assumes you want to use the property from the parent object which is THE FIRST PARAM to the resolver funciton like below!
    // title: (book) => book.title
  },
  Query: {
    books: () => {
      // avoid putting much logic here like SQL queries
      // use files/functions in the business logic layer here
      return allBooks();
    },
  }
}

export default resolvers;