const { GoogleGenerativeAI } = require("@google/generative-ai");

const express = require('express');
const app = express();
const fs = require('fs');
require("dotenv").config();


// const PORT = process.env.PORT

app.use(express.json());


const genAI = new GoogleGenerativeAI('');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const image = process.env.img
const prompt = "Extract the invoice data from it ";
const image = {
  inlineData: {
    data: Buffer.from(fs.readFileSync("bill.jpg")).toString("base64"),
    mimeType: "image/jpeg",
  },
};

async function write(prompt){
  const result = await model.generateContent([prompt, image]);
  console.log(result.response.text());
}

write(prompt);


app.get("/", (req, res) => {
    res.send(<h1> This is ME</h1>);w
  });

  app.listen(8080 , ()=>{
    console.log(`server started at port `)
  })