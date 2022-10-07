const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const cors = require('cors')
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler}  = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept json data
app.use(cors());


// app.get("/", (req,res) => {
//     res.send("API is running");
// });

// app.get("/api/chat", (req,res)=> {
//     res.send(chats);
// })

// app.get("/api/chat/:id", (req,res) => {
//     const singleChat = chats.find((c)=> c._id === req.params.id);
//     res.send(singleChat);
// });

app.use('/api/user',userRoutes);

//this end-point is for if any one called unknown end-point which is not in list then show the that message
app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,console.log(`server started on port ${PORT}`));