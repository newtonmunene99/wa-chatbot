"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
let BotController = class BotController {
    getMessage(req, res) {
        logger_1.Logger.Info(req.params.msg);
        res.status(200).json({
            message: req.params.msg
        });
    }
    putMessage(req, res) {
        logger_1.Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg
        });
    }
    postMessage(req, res) {
        logger_1.Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg
        });
    }
    delMessage(req, res) {
        try {
            throw new Error(req.params.msg);
        }
        catch (err) {
            logger_1.Logger.Err(err, true);
            return res.status(400).json({
                error: req.params.msg
            });
        }
    }
};
tslib_1.__decorate([
    core_1.Get(":msg"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BotController.prototype, "getMessage", null);
tslib_1.__decorate([
    core_1.Put(":msg"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BotController.prototype, "putMessage", null);
tslib_1.__decorate([
    core_1.Post(":msg"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BotController.prototype, "postMessage", null);
tslib_1.__decorate([
    core_1.Delete(":msg"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BotController.prototype, "delMessage", null);
BotController = tslib_1.__decorate([
    core_1.Controller("api")
], BotController);
exports.BotController = BotController;
