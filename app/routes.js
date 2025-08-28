// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// admin //

router.post(/removeAnswerpool/, (req, res) => {
  const dereg = req.session.data.removeAnswerpool;

  if (dereg === 'yes') {
    res.redirect('confirmation-removed-pool');
  } else {
    res.redirect('error-review-2');
  }
});

router.post(/Adminsignout/, (req, res) => {
  const Adminsignout = req.session.data.Adminsignout;

  if (Adminsignout === 'yes') {
    res.redirect('logout-confirm-admin');
  } else {
    res.redirect('admin/dashboard');
  }
});


// trainee //

router.post(/signout/, (req, res) => {
  const signout = req.session.data.signout;

  if (signout === 'yes') {
    res.redirect('logout-confirm-trainee');
  } else {
    res.redirect('trainee/dashboard');
  }
});
