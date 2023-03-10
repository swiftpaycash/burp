const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));


// About Us
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));

// Investor relation 
router.get('/investor-relations', forwardAuthenticated, (req, res) => res.render('relation'));

// Assets Mangement
router.get('/asset-management', forwardAuthenticated, (req, res) => res.render('assets'));

// Defi ventutres
router.get('/defi-ventures', forwardAuthenticated, (req, res) => res.render('ventures'));

// Defi government Us
router.get('/defi-governance', forwardAuthenticated, (req, res) => res.render('government'));

// Defi Treasury
router.get('/defi-treasury', forwardAuthenticated, (req, res) => res.render('treasury'));







//FINANACIAL SERVIVES 

// TERMS
router.get('/term-and-condition', forwardAuthenticated, (req, res) => res.render('terms'));

//PRIVACY POLICY
router.get('/privacy-policy', forwardAuthenticated, (req, res) => res.render('privacy'));

//REFUND POLICY
router.get('/refund-policy', forwardAuthenticated, (req, res) => res.render('refund'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);
router.get('/invest', ensureAuthenticated, (req, res) =>
  res.render('invest', {
    user: req.user
  })
);

router.get('/return-on-investments', ensureAuthenticated, (req, res)=>{
  res.render('returns')
  user: req.user
})
router.get('/withdrawal', ensureAuthenticated, (req, res) =>
  res.render('withdrawal', {
    user: req.user
  })
);
router.get('/history', ensureAuthenticated, (req, res) =>
  res.render('history', {
    user: req.user
  })
);
router.get('/analytics', ensureAuthenticated, (req, res) =>
  res.render('analytics', {
    user: req.user
  })
);

router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);

router.get('/withdrawal-success', ensureAuthenticated, (req, res) =>
  res.render('success', {
    user: req.user
  })
);

router.get('/deposit-success', ensureAuthenticated, (req, res) =>
  res.render('deposit', {
    user: req.user
  })
);
router.get('/checkout', ensureAuthenticated, (req, res) =>
  res.render('checkout', {
    user: req.user
  })
);
router.get('/bloop', ensureAuthenticated, (req, res) =>
  res.render('complete', {
    user: req.user
  })
);
router.get('/select-coin-19843667164', ensureAuthenticated, (req, res) =>
  res.render('coin', {
    user: req.user
  })
);
router.get('/bit-pay', ensureAuthenticated, (req, res) =>
  res.render('bitpay', {
    user: req.user
  })
);


router.get('/ether-pay', ensureAuthenticated, (req, res) =>
  res.render('etherpay', {
    user: req.user
  })
);


router.get('/litecoin-pay', ensureAuthenticated, (req, res) =>
  res.render('litecoinpay', {
    user: req.user
  })
);


router.get('/binance-pay', ensureAuthenticated, (req, res) =>
  res.render('binancepay', {
    user: req.user
  })
);


router.get('/doge-pay', ensureAuthenticated, (req, res) =>
  res.render('doge', {
    user: req.user
  })
);


router.get('/ripple-pay', ensureAuthenticated, (req, res) =>
  res.render('ripplepay', {
    user: req.user
  })
);

router.get('/usdt-pay', ensureAuthenticated, (req, res) =>
  res.render('usdt', {
    user: req.user
  })
);
router.get('/ltc-pay', ensureAuthenticated, (req, res) =>
  res.render('ltc', {
    user: req.user
  })
);


router.get('/tron-pay', ensureAuthenticated, (req, res) =>
  res.render('tronpay', {
    user: req.user
  })
);


module.exports = router;
