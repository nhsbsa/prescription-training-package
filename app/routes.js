// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// Admin - checks-complete //

router.post(/removeAnswerpool/, (req, res) => {
  const dereg = req.session.data.removeAnswerpool;

  if (dereg === 'yes') {
    res.redirect('/v1/admin/checks-complete/confirmation-removed-pool');
  } else {
    res.redirect('/v1/admin/checks-complete/error-review-2');
  }
});

