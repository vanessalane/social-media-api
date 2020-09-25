const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: email
    },
    thoughts: [],
    friends: []
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

User.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;