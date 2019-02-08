const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const user = require("./Routes/user");
const auth = require("./Routes/auth");
const cart = require("./Routes/cart");
const upload = require("./Routes/product");
const cors = require("cors");
const config = require("config");


// if(!config.get("jwtPrivatekey")){
//     console.error("FATAL ERROR: jwt private key is not defined");
//     process.exit(1);
// }

app.use('/public', express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
 .then(()=> {
    console.log("connected to mongodb");
})
.catch(error => { 
    console.error("error conninting mongodb", error);
});

app.use(express.json());
app.use(cors());


app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/upload", upload);
app.use("/api/cart", cart);


// app.use("*", (req, res) =>{
//    app.use(express.static(path.join(__dirname, '/public')));
// });

app.use(bodyParser.urlencoded({ extended: false }));


const port = 3000 || "";
const server = http.createServer(app);
server.listen(port, () => console.log(`server listing on : ${port}`) );