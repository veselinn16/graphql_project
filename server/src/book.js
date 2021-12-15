import query from './db'

export async function allBooks() {
  const sql = `
  select * from hb.book;
  `
  try {
    const result = await query(sql) // query returns a Promise so we need to await
    return result.rows // returns rows returned from sql query
  } catch (err) {
    console.error(err)
    throw err // return error to client
  }
}

// id is google book id
export function imageUrl(size, id) {
  const zoom = size === 'SMALL' ? 1 : 0
  return `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=${zoom}&source=gbs_api`
}