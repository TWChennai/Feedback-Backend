var db = require('../db/db');
var uuidV4 = require('uuid/v4');
var assert = require('assert');

var add = (categoryId, type, callback) => {
    db.execute((db) => {
        var collection = db.collection('items');
        collection.insertOne({_id: uuidV4(), type: type, categoryId: categoryId}, {}, function (err, r) {
                assert.equal(null, err);
                console.log("item is created");
                callback(r.ops[0])
            }
        );
    });
};

var list = (categoryId, callback) => {
    db.execute((db) => {
        var collection = db.collection('items');
        collection.find({categoryId: categoryId}).toArray((err, r) => {
                assert.equal(null, err);
                callback(r)
            }
        );
    });
};

module.exports = {
    add: add,
    list: list
};