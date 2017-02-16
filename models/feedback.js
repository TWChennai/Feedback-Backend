const db = require('../db/db');
const uuidV4 = require('uuid/v4');
const assert = require('assert');

const add = (categoryId, feedback, callback) => {
    db.execute((db) => {
        const collection = db.collection('feedbacks');
        collection.insertOne({
                _id: uuidV4(),
                categoryId: categoryId,
                feedback: feedback,
                createdAt: new Date()
            }, {}, function (err, r) {
                assert.equal(null, err);
                console.log("feedback is created");
                callback(r.ops[0])
            }
        );
    });
};

const list = (categoryId, callback) => {
    db.execute((db) => {
        const collection = db.collection('feedbacks');
        collection.find({categoryId: categoryId}).toArray((err, r) => {
                assert.equal(null, err);
                callback(r)
            }
        );
    });
};

const one = (feedbackId, callback) => {
    db.execute((db) => {
        const collection = db.collection('feedbacks');
        collection.find({_id: feedbackId}).toArray((err, r) => {
                assert.equal(null, err);
                callback(r[0])
            }
        );
    });
};

module.exports = {
    add: add,
    list: list,
    one: one
};