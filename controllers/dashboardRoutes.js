const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Pass to a different page
router.get('/addBlog', withAuth, (req, res) => {
  res.render('addBlog');
});

// Get blog data based on the id and then pass to a different page
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: [
            'id',
            'comment',
            'date_created',
            'user_id',
            'blog_id',
          ],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    console.log(blog);
    res.render('editBlog', {
      ...blog, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;