"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = require("twilio");
const accountSid = "AC5c9ab911440eb7bac18c381ffe1fa404";
const authToken = "6f6d3e27c39a3acdb75e1d47e7beed7e";
const client = new twilio_1.Twilio(accountSid, authToken);
exports.sendMessage = (number, twilioNumber, body) => {
    return new Promise((resolve, reject) => {
        client.messages
            .create({
            to: number,
            from: twilioNumber,
            body: body
        })
            .then(message => {
            resolve(message.sid);
        })
            .catch(error => {
            reject(error);
        });
    });
};
