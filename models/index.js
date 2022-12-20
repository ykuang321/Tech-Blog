const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User has many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

// Blog belongs to user
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

// Comment belongs to user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Blog has many comments
Blog.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

// Comment belongs to Blog
Comment.belongsTo(Blog, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };