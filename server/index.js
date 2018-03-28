const express = require('express');
const bodyParser = require('body-parser');
const messages_controller = require('./controllers/messages_controller.js')


const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.post('/api/messages', messages_controller.create);
app.get('/api/messages', messages_controller.read);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);



const port = 3000;
app.listen(port, () => { console.log(`Server listnening on port ${port}`);});