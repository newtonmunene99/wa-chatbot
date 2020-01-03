"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const credentials = require("../credentials.json");
const sessionClient = new dialogflow.SessionsClient({
    credentials: credentials
});
const projectId = "saada-ulwqpl";
function runSample(query, number) {
    return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const sessionId = number;
            const sessionPath = sessionClient.sessionPath(projectId, sessionId);
            const request = {
                session: sessionPath,
                queryInput: {
                    text: {
                        text: query,
                        languageCode: "en-US"
                    }
                }
            };
            const responses = yield sessionClient.detectIntent(request);
            const result = responses[0].queryResult;
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    }));
}
module.exports = {
    runSample
};
