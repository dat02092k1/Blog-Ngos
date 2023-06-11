const Post = require('./Post.js');
const User = require('./User.js');

User.hasMany(Post, { foreignKey: 'authorId' });
Post.belongsTo(User, { foreignKey: 'authorId' });