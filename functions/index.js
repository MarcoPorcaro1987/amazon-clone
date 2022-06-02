const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51L5tEMIyK2JzzkJzkck6Mcqc9dejTnz6R8K4Av9LYuUcJdgVTGfOoyonYxvoBrTyCaZeIMqpa5nLcrgx28ycO9iD00ZnegiOpm");

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Received for this ammount >>>", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "gbp"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-c2bab/us-central1/api
