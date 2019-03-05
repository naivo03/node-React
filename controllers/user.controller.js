const User = require('../models/user.model');

//default GET test
exports.test = function (req, res) {
    res.send('Appel au controlleur ');
};

//create POST request
exports.user_create = function (req, res, next) {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
    }); //creation du nouvel utilisateur selon les parametres envoyer de la request

    user.save(function (err) { //sauvegarde du nouvel user
        if (err) {
            return next(err); // la fonction next permet d'appeler la fonction middleware suivante jusqua ce qu'une fonction middleware termine le cycle
        }

        res.send('Nouvel User creer!!!');
    });
};

//PS. une fonction middleware est une focntion qui a acces aux object request response et a la prochaine fonction middleware suivante grace a next()

//read GET request
exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send(user);
    });
};

//update PUT request
exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) { //la fonction findbyidandupdate permet de mettre a jour les attribut envoyer en param de la req de l objet param.id
        if (err) {
            return next(err);
        }
        res.send('User mis a jours');
    });
}

//delete DELETE request
exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('User supprimer!!!!!');
    });
}