const router = require('express').Router();

// user routes -> login and logout
// blog route -> display, add, update, and delete blog
// comment route -> display, add, delete comment
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoute');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;