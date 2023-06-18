import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import collection from "./src/models/User.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Mongoose Setup
mongoose.connect("mongodb://0.0.0.0:27017/pokemon", {

}).then(() => {
    console.log(`mongo connected`);
}).catch((error) => {
    console.log(`${error} did not connect`);
});


app.get("/", cors(), (req, res) => {

})


app.post("/", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body

    const data = {
        name: name,
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.listen(8000, () => {
    console.log("port connected");
})
