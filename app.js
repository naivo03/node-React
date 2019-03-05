const express = require('express'); //initialisation d'express
const bodyParser = require('body-parser'); //initialisation de body-parser permet de creer de requete au format JSON

const users = require('./routes/user.route'); // initialisation du router

//initialisation de la connexion a ma base données
const mongoose = require('mongoose');

let dev_db_url = 'mongodb+srv://admin:admin@nodereactdb-l3esg.mongodb.net/test?retryWrites=true';

let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connection a la base MongoDB'));

//initialistion d'express dans notre app

const app = express();

app.use(bodyParser.json()); //ATTENTION A L'ORDRE D'INITIALISATION : en effet il faut d'abord bien formater la request pour pouvoir effectuer coorectement l'appel
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', users);

let port = 1234;

//initialisation du serveur et config sur le port 1234
app.listen(port, () => {
    console.log('Server is up and running on port number :' + port)
})