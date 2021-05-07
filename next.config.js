const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')

// https://nextjs.org/docs/#custom-configuration
module.exports = function (phase) {

    sqlite.open({
        filename: path.join(process.cwd(), 'database.db'),
        driver: sqlite3.Database
    }).then((db) => {
        db.migrate()
    })

    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.APP_ENV === "production";

    const env = {

        IMAGESSUBDOMAIN: (() => {
            if (isProd) {
                return "";
            }

            return "";
        })()
    };
    return {
        env
    };
};
