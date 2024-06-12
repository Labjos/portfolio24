const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");



const userSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Escribe tu nombre de usuario para esta plataforma'
        },
        email: {
            type: String,
            required: 'Dirección de email'
        },
        password: {
            type: String,
            required: 'Escribe una contraseña, mínimo 8 caracteres',
            min: [5, ""]
        }
    
                
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret.password;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
            
        }
    }
);


userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt
            .hash(this.password, 10)
            .then((hash) => {
                this.password = hash;
                next()
            })
            .catch(next);
    } else {
        next();
    }

});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
