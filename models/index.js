const User = require("./user");
const BlogPost = require("./blogPost");
const Comment = require("./comment");


// table relationships

User.hasMany(BlogPost, {
    foreignKey: "user_id",
})

BlogPost.belongsTo(User, {
    foreignKey: "user_id",
})

User.hasMany(Comment, {
    foreignKey: "user_id",
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
})

Comment.belongsTo(BlogPost, {
    foreignKey: "blogPost_id",
})

BlogPost.hasMany(Comment, {
    foreignKey: "blogPost_id",
})


module.exports = { User, BlogPost, Comment };