import { Request, Response } from "express";
import { Controller, Post } from "@overnightjs/core";

@Controller("api/webhook/dialogflow")
export class DialogflowWebhookController {
  @Post()
  private handleWebhook(request: Request, response: Response) {
    // Here we get the queryResult object from dialogflow
    const { queryResult } = request.body;
    // Deconstruct `queryResult` to get parameters
    const { parameters } = queryResult;

    switch (queryResult.intent.displayName) {
      case "INTENTNAME": {
        const customParameter = parameters.mYCustomParameter;

        // Do something here

        // Return a 200 response to dialogflow
        return response.status(200).send({
          fulfillmentMessages: [
            {
              text: {
                text: [`My custom response based on ${customParameter}`],
              },
            },
          ],
        });
      }

      default: {
        return response.status(200).send();
      }
    }
  }
}
