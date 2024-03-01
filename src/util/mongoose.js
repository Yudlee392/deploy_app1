module.exports={
    mutipleMongooseToObjects: function(mongooses){
        return mongooses.map(mongose=> mongose.toObject())
    },
    mongoseToObject:function(mongoose){
        return mongoose ? mongoose.toObject(): mongoose;
    }
}