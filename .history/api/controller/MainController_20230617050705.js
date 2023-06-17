const mongoRegistration = require("../modules/schemas/RegisterSchema.js");
const { setData, getData } = require("../hooks/useStore.js");
const mysql = require('mysql');
require("dotenv").config();
const {
  Wallet,
  LocalProvider,
  PrivateKey,
  AccountCreateTransaction,
  Hbar,
  AccountId,
  Client,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  TokenMintTransaction,
  TransferTransaction,
  TokenNftInfoQuery,
  NftId,
  AccountInfoQuery,
  Mnemonic,
  FileContentsQuery,
  ExchangeRates,
  AccountDeleteTransaction,
  AccountBalanceQuery,
  TransactionId,
  AccountAllowanceApproveTransaction,
  ContractCreateTransaction,
  FileCreateTransaction,
  ContractDeleteTransaction,
  ContractCallQuery,
} = require("@hashgraph/sdk");

//Grab your Hedera testnet account ID and private key from your .env file
const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;

// If we weren't able to grab it, we should throw a new error
if (!myAccountId || !myPrivateKey) {
  throw new Error(
    "Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present"
  );
}


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'HaderaCollection'
})


//Create your Hedera Testnet client
const client = Client.forTestnet();

//Set your account as the client's operator
client.setOperator(myAccountId, myPrivateKey);

//Set the default maximum transaction fee (in Hbar)
client.setDefaultMaxTransactionFee(new Hbar(100));

const createAccount = async (req, res) => {
  if (process.env.MY_ACCOUNT_ID == null || process.env.MY_PRIVATE_KEY == null) {
    throw new Error(
      "Environment variables OPERATOR_ID, and OPERATOR_KEY are required."
    );
  }

  //Set the maximum payment for queries (in Hbar)
  client.setMaxQueryPayment(new Hbar(50));
  const wallet = new Wallet(
    process.env.MY_ACCOUNT_ID,
    process.env.MY_PRIVATE_KEY,
    new LocalProvider()
  );

  // generate a 24-word mnemonic
  const mnemonic = await Mnemonic.generate();
  console.log(`24 words mnemonic = ${mnemonic.toString()}`);

  const key = await mnemonic.toStandardEd25519PrivateKey("", 0);
  console.log(`private key = ${key.toString()}`);
  console.log(`public key = ${key.publicKey.toString()}`);

  // [...]

  let transaction = await new AccountCreateTransaction()
    .setInitialBalance(new Hbar(10)) // 10 h
    .setKey(key.publicKey)
    .freezeWithSigner(wallet);

  transaction = await transaction.signWithSigner(wallet);

  const response = await transaction.executeWithSigner(wallet);

  const receipt = await response.getReceiptWithSigner(wallet);

  console.log(`account id = ${receipt.accountId.toString()}`);
  res.status(200).json({
    message: "account created",
    privateKeys: key.toString(),
    publicKeys: key.publicKey.toString(),
    seedPhrases: mnemonic.toString(),
    accountID:receipt.accountId.toString()
  });
};

const getUsersBalance = async (req, res) => {
  const { usersAccountId } = req.body;
  if (!usersAccountId)
    return res.json({ message: "Ensure to send users Address" });
  const balance = await new AccountBalanceQuery()
    .setAccountId(usersAccountId)
    .execute(client);

  if (!balance)
    return res.status(201).json({ message: "Error occurred fetching data" });

  console.log(`${usersAccountId} balance = ${balance.hbars.toString()}`);
  res.status(200).json({ balance: balance.hbars.toString() });
};

const getAccountDetails = async (req, res) => {
  const { usersAccount } = req.body;
  if (!usersAccount)
    return res.status(201).json({ message: "account must be set" });
  //Create the account info query
  const query = new AccountInfoQuery().setAccountId(usersAccount);

  //Sign with client operator private key and submit the query to a Hedera network
  const accountInfo = await query.execute(client);

  //Print the account info to the console
  console.log(accountInfo);
  res.status(200).json({ userAccountInfo: usersAccount });
  //v1.4.4
};

const getUsersAvailableNFTs = async (req, res) => {
  const { tokenId } = req.body;
  if (!tokenId)
    return res.status(201).json({ message: "token id must be provided" });
  //Returns the info for the specified NFT ID
  const nftInfos = await new TokenNftInfoQuery()
    .byNftId(tokenId)
    .execute(client);

  res.status(200).json({ usersNFTInfo: nftInfos });
  //v1.4.10
};


const createSellOrder = async (req,res) => {
  const { senderAccount, userTokenId, nftToken, password, senderAccountKey, requestAmount } = req.body
    connection.query("SELECT * FROM userscollections WHERE password = ?", [password], function (error, results, fields) {
      if (error) return res.status(404).json({ message: "error occurred"});
      const userMainID = results[0].id;
      console.log(userMainID)
      if (!userMainID) return res.status(404).json({ message: "users id not set" });
        connection.query('INSERT INTO saleorder(usersId, senderAccount, nftToken, userTokenId, senderAccountKey, requestAmount,receiverAccount , status) VALUES(?,?,?,?,?,?,?,?)',
          [userMainID, senderAccount, nftToken, userTokenId, senderAccountKey, requestAmount, "0X0000", 0]
          ,
          function (error, results, fields) {
            if (error) return res.status(404).json({ message: "encountered error while inserting in SALES-ORDER" })
            res.status(200).json({message:"sent successfully"});
            }); 
    })   

}


const atomicBuyNFTWithNFT = async (req, res) => {
  //Atomic swap between a Hedera Token Service token and hbar
  const {
    usersId,
    receiverAccount,
    receiversAddressKey,
    receivernftToken,
    receivernftId,
  } = req.body;
  connection.query(
    "SELECT * FROM saleorder WHERE usersId = ?",
    [usersId],
    async function (error, results, fields) {
      if (error)
        return res.status(404).json({
          message: "encountered error while inserting in SALES-ORDER",
        });
      // res.status(200).json({ message: "sent successfully" });
      const senderAccount = results[0].senderAccount;
      const nftToken = results[0].nftToken;
      const userTokenId = results[0].userTokeId;
      const senderAccountKey = results[0].senderAccountKey;

      //Atomic swap between two hedera Token Service created tokens
      const atomicSwap = await new TransferTransaction()
        .addTokenTransfer(nftToken, senderAccount, userTokenId)
        .addTokenTransfer(nftToken, receiverAccount, userTokenId)
        .addTokenTransfer(receivernftToken, receiverAccount, receivernftId)
        .addTokenTransfer(receivernftToken, senderAccount, receivernftId)
        .build(client);

      //Sign the transaction with accountId1 and accountId2 private keys, submit the transaction to a Hedera network
      const txId = await (
        await (
          await atomicSwap.sign(senderAccountKey)
        ).sign(receiversAddressKey)
      ).execute(client);
      if (txId) {
        res.status(200).json({ message: true });
      }
    }
  );
};



const atomicBuyNFTWithToken = async (req, res) => {//Atomic swap between a Hedera Token Service token and hbar
  const { usersId , receiverAccount , receiversAddressKey } = req.body;
        connection.query('SELECT * FROM saleorder WHERE usersId = ?',
          [usersId]
          ,
          async function (error, results, fields) {
            if (error)
              return res
                .status(404)
                .json({
                  message: "encountered error while inserting in SALES-ORDER",
                });
            // res.status(200).json({ message: "sent successfully" });
            const senderAccount = results[0].senderAccount;
            const nftToken = results[0].nftToken;
            const userTokenId = results[0].userTokeId;
            const senderAccountKey = results[0].senderAccountKey;

            const atomicSwap = await new TransferTransaction()
              .addHbarTransfer(receiverAccount, new Hbar(Number(-amount)))
              .addHbarTransfer(senderAccount, new Hbar(Number(amount)))
              .addTokenTransfer(nftToken, senderAccount, Number(-userTokenId))
              .addTokenTransfer(nftToken, receiverAccount, Number(userTokenId))
              .build(client);

            //Sign the transaction with accountId1 and accountId2 private keys, submit the transaction to a Hedera network
            const txId = await (
              await (
                await atomicSwap.sign(senderAccountKey)
              ).sign(receiversAddressKey)
            ).execute(client);
            if (txId) {
              res.status(200).json({ message: true });
            }
          }); 
}


const transferHbar = async (req, res) => {
  const { senderAddress, receiversAddress, amount } = req.body;
  //Create the transfer transaction
  if (!senderAddress || !receiversAddress || !amount)
    return res
      .status(201)
      .json({
        message:
          "receiver address, senders address and amount can not be empty",
      });
  const transaction = new TransferTransaction()
    .addHbarTransfer(senderAddress, new Hbar(Number(-amount)))
    .addHbarTransfer(receiversAddress, new Hbar(Number(amount)));

  //Sign with the client operator key and submit the transaction to a Hedera network
  const txId = await transaction.execute(client);

  //Request the receipt of the transaction
  const receipt = await txId.getReceipt(client);

  //Get the transaction consensus status
  const transactionStatus = receipt.status;

  console.log("The transaction consensus status is " + transactionStatus);
  res
    .status(200)
    .json({
      message: `${amount} has been transferred from ${senderAddress} to ${receiversAddress}`,
    });
};

const registration = async (req, res) => {
  const { password, walletAddress, privateKey, seedPhrase , nickname , email , accountID} = req.body;
  console.log(req.body);
  if (
    password == null ||
    walletAddress == null ||
    privateKey == null ||
    seedPhrase == null
  )
    return res.status(404).json({ message: "fields should not be empty" });
  connection.query('INSERT INTO userscollections(password , walletAddress , privateKey , seedPhrase , nickname , email , accountID) VALUES(?,?,?,?,?,?,?)',[password , walletAddress , privateKey , seedPhrase , nickname , email , accountID], function(error,result,fields) {
    if (error) return res.status(201).json({ message: "error occurred. data was not sent" });
    res.status(200).json({ message: "Users Registration successful" });
  })
  // const createRegister = new mongoRegistration({
  //   password,
  //   walletAddress,
  //   privateKey,
  //   seedPhrase,
  // });
  // createRegister.save();
};

const usersLogin = async (req, res) => {
  const { password } = req.body;
  connection.query('SELECT EXISTS(SELECT 1 FROM userscollections WHERE password = ?)', [password], (error, results, fields) => {
    if (error) return res.status(404).json({ message: "Error occurred during query" });
    let returnStatus = Object.values(results[0]);
    
    connection.query('SELECT * FROM userscollections WHERE password = ?' , [password],async function (errors , results , fields){

      res.sta
    })

    // res.status(200).json({ message: "password checked" ,status :results });
  })
  // const loginCheck = await mongoRegistration.findOne({ password }).exec();
  // if (!loginCheck)
};

module.exports = {
  registration,
  usersLogin,
  createAccount,
  getUsersBalance,
  transferHbar,
  getAccountDetails,
  getUsersAvailableNFTs,
  atomicBuyNFTWithToken,
  createSellOrder,
  atomicBuyNFTWithNFT 
};
