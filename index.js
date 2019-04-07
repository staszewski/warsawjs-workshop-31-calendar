const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();
// load cfg
require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});
require('./web/routing/base.router.js')(app);
require('./web/routing/calendar.router.js')(app);
require('./web/routing/event.router.js')(app);

(async () => {

    await db.connect();

    // Start web server
    app.listen(process.env.PORT, () => {
        console.log(
            `Server was started at http://localhost:${process.env.PORT}`
        )
    });

})();
