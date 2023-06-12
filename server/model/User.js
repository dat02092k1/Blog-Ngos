const { DataTypes } = require("sequelize");
const sequelize = require('../database/database.js');

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
    },    
    avatarUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


module.exports = User;