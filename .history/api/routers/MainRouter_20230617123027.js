// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const express = require("express");
const router = express.Router();
const { registration,
  usersLogin,
  createAccount,
  getUsersBalance,
  transferHbar,
  getAccountDetails,
  getUsersAvailableNFTs,
  atomicBuyNFTWithToken,
  createSellOrder,
  atomicBuyNFTWithNFT} = require("../controller/MainController.js");
router.route("/register").post(registration);
router.route('/createWallet').get(createAccount);
router.route('/login').post(usersLogin);
router.route('/usersDetails').ps
router.route("/createNftTokenSale").post(createSellOrder);
module.exports = router;