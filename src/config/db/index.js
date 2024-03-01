const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://onlyplayxerath:iEEzRNyrBjaPPfTt@cluster0.00l13mt.mongodb.net/web-group?retryWrites=true&w=majority');
        console.log('connect successfully')
    } catch (error) {
        console.log('connect fail')
    }

}
module.exports= { connect };

//f8_education_dev