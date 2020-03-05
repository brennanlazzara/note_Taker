const express = require("express");
const path = require('path');
let dbJson = require('./develop/db/db.json')

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("develop/public"));

app.get('/api/notes', function (req, res) {
    res.send(dbJson)
  });


app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'))
});

app.get('/takeNotes',function (req, res) {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
});

app.post('/api/notes', function (req, res){
    let newNote = req.body
    dbJson.push(req.body)
    res.send(true)
});

app.delete('/api.note', function (req, res){
    dbJson.splice(req.body)
})

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
