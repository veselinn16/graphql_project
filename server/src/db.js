// helper file for connection with db
import { Pool } from 'pg'
import humps from 'humps'

const pool = new Pool({
  host: 'localhost', // db host
  database: 'hackerbook' // db name
})

// this funciton is used to run our sql queries
// one of the reasons for creating this function is to not drain the connection pool
const query =  async (sql, params) => {
  const client = await pool.connect() // establishes db connection
  try {
    const result = await client.query(sql, params)
    // transform snake case to camel case
    const rows = humps.camelizeKeys(result.rows)
    return { ...result, rows }
  } catch(err) {
    console.error(err)
  } finally {
    client.release() // puts db connection back into connection pool so it can be used again
  }
}

export default query