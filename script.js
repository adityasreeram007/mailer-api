var nodemailer = require('nodemailer');
var ex = require('express');
const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: 'adityasreeram99@gmail.com',
        pass: 'NeuralNet@1'
    }
});
var app = ex();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
app.post('/', function(req, res) {
    console.log(req.body)
    if (req.body.pass === "NeuralNet@1") {

        var mailOptions = {
            from: req.body.sender,
            to: req.body.reciever,
            subject: req.body.sub,
            text: req.body.msg
        };
        transporter.sendMail(mailOptions, function(error, info) {
            console.log(error)
            if (error) {
                return res.status('404').end()
            } else {
                return res.status('200').end()
            }
        })
    }
})