var db = require('./db');

var collections = [{
    name: 'categories',
    validator: {
        '$or': [
            {'name': {'$type': "string"}}
        ]
    }
}, {
    name: 'buckets',
    validator: {
        '$or': [
            {'categoryId': {'$type': "uuid"}},
            {'type': {'$type': "string"}}
        ]
    }
}];

var init = function () {
    db.execute((db) => {
        collections.forEach(c => create(c, db));
    });
};

var create = function (c, db) {
    db.createCollection(c.name,
        {
            'validator': c.validator
        },
        (err, results) => {
            console.log(c.name, " Collection created.");
        }
    );
};

module.exports = {
    init: init
};