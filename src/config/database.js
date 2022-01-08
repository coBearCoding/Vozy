const mongoose = require('mongoose');
mongoose.connect(`mongodb://vozy:test123@mongo:27017/vozydb?authSource=admin`).then(db => {
    console.log(`DB is connected in ${db.connection.host}`);
    console.log(`DB is connected in PORT: ${db.connection.port}`);
}).catch(err => console.log(err));

module.exports = mongoose;