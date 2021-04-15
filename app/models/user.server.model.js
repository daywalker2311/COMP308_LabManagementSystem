const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new Schema({
    username: {
        type: Number,
        unique: true,
        // Validate 'username' value existance
        required: 'Username is required',
        // Trim the 'username' field
        trim: true
    },
    firstName: {
        type: String,
        required: 'First name is required',
        trim: true
    },
    lastName: String,
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            'Password should be > 6'
        ]
    },
    address: String,
    city: String,
    phoneNumber: {
        type: Number,
        required: 'phoneNumber is required',
    },
    email: {
        type: String,
        // Validate the email format
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    role: {
        type: String,
        // Validate the 'role' value using enum list
        enum: ['Patient', 'Nurse']
    },

});


// Set the 'fullname' virtual property
UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
// before saving it into database
UserSchema.pre('save', function (next) {
    //hash the password before saving it
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function (password) {
    //compare the hashed password of the database 
    //with the hashed version of the password the user enters
    return this.password === bcrypt.hashSync(password, saltRounds);
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('User', UserSchema);