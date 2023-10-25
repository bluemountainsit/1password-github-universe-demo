import { ItemBuilder, OnePasswordConnect } from "@1password/connect";

import ejs from 'ejs';
import express from 'express';

const app = express();
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(5000, () =>
    console.log('Example app listening on port 5000!'),
);

// CREATE CLIENT
// const op = OnePasswordConnect({
//     serverURL: process.env.OP_CONNECT_HOST,
//     token: process.env.OP_CONNECT_TOKEN,
//     keepAlive: true,
// });
const vault = process.env.OP_VAULT;

app.get('/', function (req, res) {
    var title = process.env.APP_TITLE;
    var buttonText = process.env.BUTTON_TEXT;
    console.log("title: " + title)
    console.log("buttonText: " + buttonText)
    res.render('index.ejs', { title: title, buttonText: buttonText });
})

app.get('/signup', function (req, res) {
    var title = process.env.APP_TITLE;
    res.render('signup.ejs', { title: title });
})

app.post('/register', async (req, res) => {
    // try {
    //     const flavour = req.body.flavour;
    //     const sprinkles = req.body.sprinkles || "off";
    //     console.log(vault);
    //     console.log(flavour);
    //     console.log(sprinkles);
    //     const newItem = new ItemBuilder()
    //         .setTitle("Submission – " + flavour)
    //         .setCategory("IDENTITY")
    //         .addSection("Identification")
    //         .addSection("Internet Details")
    //         .addField({
    //             sectionName: "Identification",
    //             type: "STRING",
    //             label: "flavour",
    //             value: flavour
    //         })
    //         .addField({
    //             sectionName: "Identification",
    //             type: "STRING",
    //             label: "sprinkles",
    //             value: sprinkles
    //         })
    //         .addTag("favourite-flavour-collector")
    //         .build();
    //     const item = await op.createItem(vault, newItem);
    // } catch (error) {
    //     console.log(error);
    // }
    res.redirect('/');
})