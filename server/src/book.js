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