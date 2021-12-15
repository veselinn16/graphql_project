import { allBooks, imageUrl } from "./book";
import { authorsByBookId } from "./authors";

const resolvers = {
  Book: {
    // we can add resolvers for all fields if we want, but if we dont do so, the gql library assumes you want to use the property from the parent object which is THE FIRST PARAM to the resolver funciton like below!
    // title: (book) => book.title
    // the second parameter passed to resolvers is an object with the variables that are passed to the field the resolver is associated to
    imageUrl: (book, { size }) => imageUrl(size, book.googleId),
    authors: book => authorsByBookId(book.id)
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