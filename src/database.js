import sqlite3, { Database } from 'sqlite3'
import { open } from 'sqlite'
const path = require('path')
// (async () => {
//     const db = await open({
//       filename: '/tmp/database.db',
//       driver: sqlite3.Database
//     })
// })()

sqlite3.verbose()

// you would have to import / invoke this in another file
export async function openDb() {
    return open({
        filename: path.join(process.cwd(), 'database.db'),
        driver: sqlite3.cached.Database
    })
}

// (async () => {
//     const db = await openDb()
//     await db.migrate()
// })

export default openDb;