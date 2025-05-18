const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{console.log("connection success");

})
.catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
    from: "neha",
    to: "preeti",
    msg: "send me your notes examsheet",
    created_at: new Date(),
   },
   {
    from: "rohit",
    to: "mohit",
    msg: "teach me js callback",
    created_at: new Date(),
   },
   {
     from: "ramesh",
     to: "suresh",
     msg:"bring some fruits",
     created_at: new Date(),
   },
   {
    from: "tony",
    to: "peter",
    msg: "i love u 3000",
    created_at: new Date(),
   },

];

Chat.insertMany(allChats);


