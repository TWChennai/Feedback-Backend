var db = require('../db/db');
var uuidV4 = require('uuid/v4');
var assert = require('assert');

var add = (name, callback) => {
    db.execute((db) => {
        var collection = db.collection('categories');
        collection.insertOne({_id: uuidV4(), name: name}, function (err, r) {
                assert.equal(null, err);
                console.log("category is created");
                callback(r.ops[0])
            }
        );
    });
};

var list = (callback) => {
    db.execute((db) => {
        var collection = db.collection('categories');
        collection.find().toArray((err, r) => {
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