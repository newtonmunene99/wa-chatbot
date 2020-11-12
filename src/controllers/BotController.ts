import { Request, Response } from "express";
import { Controller, Post } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { sendMessage } from "../utils/twilio";
import { runQuery } from "../utils/dialogflow";

@Controller("api/bot")
export class BotController {
  @Post()
  private postMessage(request: Request, response: Response) {
    // Here we get the message body, the number to which we're sending the message, and the number sending the message.
    const { Body, To, From } = request.body;

    // Here we're sending the received message to Dialogflow so that it can be identified against an Intent.
    runQuery(Body, From)
      .then((result: any) => {
        // We send the fulfillment text received back to our user via Twilio
        sendMessage(From, To, result.fulfillmentText)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error("error is ", error);
            Logger.Err(error);
          });
      })
      .catch((error) => {
        console.error("error is ", error);
        Logger.Err(error);
      });
    return response.status(200).send("SUCCESS");
  }
}
