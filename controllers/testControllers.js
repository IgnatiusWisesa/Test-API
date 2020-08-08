// Import Database
const db = require('../database/db')

module.exports = {
    fetchUser : (req,res) => {
        // Set SQL Syntax
        // Get User test SQL
        let sql = `SELECT * FROM username;`

        // Database Action
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)

            if (result.length === 0) {
                return res.status(400).send({ 
                    error: true, 
                    message: 'Data empty!' 
                });
            } else {
                return res.status(200).send({ 
                    error: false, 
                    result 
                });
            }
        })
    },
}