const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
app.use(bodyParser.json());

const serviceAccount = require('C:/Users/pauca/Downloads/expaucasasmunyoz-firebase-adminsdk-ekjpc-f7f8e3a222.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://</n' +
        'expaucasasmunyoz>.firebaseio.com'
});
const db = admin.firestore();

app.post('/:nom/:primer_cognom/mvp/:nom_jugador', async (req, res) => {
    try {
        const { nom, primer_cognom, nom_jugador } = req.params;
        const docRef = db.collection('final22<casas>').doc(`${nom}_${primer_cognom}`);
        const doc = await docRef.get();
        if (!doc.exists) {
            throw new Error(`No se encontró el documento final22<casas>/${nom}_${primer_cognom}`);
        }
        await docRef.update({
            mejor_jugador: nom_jugador
        });
        res.status(200).send(`El campo 'mejor_jugador' se actualizó con éxito en el documento final22casas/${nom}_${primer_cognom}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Se produjo un error al actualizar el campo en el documento de Firebase');
    }
});

app.listen(3000, () => {
    console.log('La API REST está escuchando en el puerto 3000');
});


