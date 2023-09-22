const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const users = require("./controller/userController");
const displays = require("./controller/displayController");

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.use(express.static('./public'));

mongoose.connect(`mongodb+srv://ethanheimer12357:${process.env.PASSWORD}@cluster.xw6cpyi.mongodb.net/${process.env.DATABASE_NAME}t?retryWrites=true&w=majority`)
.then(() => {
    console.log("Connected To Database")

    app.get('/register', displays.displayRegister);

    app.get("/", displays.displayUsers)

    app.post("/add", users.addUser);

    app.get("/edit/:id", displays.displayEdit);

    app.post('/edit/:id', users.editUser);

    app.get('/delete/:id', users.deleteUser);

    app.listen(port, () => console.log("Server is up"));
}).catch(error => {
    console.log(error);
})

