const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: 'vg62yc5y6z2nk76v',
  publicKey: 'x6szcy2kvwptp8pn',
  privateKey: 'ca490a7d97ddfe1eea5808e28b380437'
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.send(response);
      }
    });
  };
  
  exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
  
    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale(
      {
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
  
        options: {
          submitForSettlement: true
        }
      },
      function(err, result) {
        if (err) {
          res.status(500).json(error);
        } else {
          res.json(result);
        }
      }
    );
  };
  
