const mongoose = require('mongoose');

const secretPass = `K8uSDHWXIZP8VlAj`;
const uri = `mongodb+srv://Adityadev:${secretPass}@cluster0.75kbw6j.mongodb.net/Node-Api?retryWrites=true&w=majority`


const connection = () => {
    try {
        mongoose.connect(uri)
            .then(() => {
                console.log("MongoDb Connected");
            }).catch((err) => {
                console.log(err)
            })
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;