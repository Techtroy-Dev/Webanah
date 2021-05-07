import { throws } from 'assert'
import openDb from '../../src/database'
const path = require('path')

export default async function handler(req, res) {

    openDb().then(db => {
        db.run(
            'INSERT INTO Contact(first_name, last_name, email, subject, message) VALUES(:first_name, :last_name, :email, :subject, :message)', { ':first_name': req.body.first_name, ':last_name': req.body.last_name, ':email': req.body.email, ':subject': req.body.subject, ':message': req.body.message }
        )
            .then(() => {
                return res.status(201).json({ res: "Created" });
            })
            .catch((err) => {
                if (err.errno == 19) {
                    return res.status(409).json({ res: "SQLITE_CONSTRAINT" });
                }
                // console.log(err)
            })
    })
}
