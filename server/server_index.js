const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./bins_controller')

const app = express();
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db',dbInstance);

    // dbInstance.read_all.then( (err, res) => {
    //     res.status(200).send( "readAll worked" );
    // }  ).catch( (err) => {
    //     console.log("error in readall")
    // })

    
});//end of massive invoke

app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

app.get('/api/bins3/getAll', controller.getAll);
app.get('/api/bins3/:id', controller.getBin);
app.get('/api/bins3', controller.getBinList);

// app.post('/api/bins3', controller.create);
// app.get('/api/bins3s', controller.getAll);
// app.get('/api/bins3/:id', controller.getOne);
// app.put('/api/bins3/:id', controller.update);
// app.delete('/api/bins3/:id', controller.delete);