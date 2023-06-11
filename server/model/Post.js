const { DataTypes } = require("sequelize");
const sequelize = require('../database/database.js');

const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,   
    },  
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },      
});


module.exports = Post;
                   