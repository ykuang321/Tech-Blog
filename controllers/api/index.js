const router = require('express').Router();

const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const dashboardRoutes = require('../dashboardRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;