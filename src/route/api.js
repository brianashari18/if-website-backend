import express from "express";
import tpController from "../controller/tp-controller.js";

const tpRouter = new express.Router();
tpRouter.post("/api/tps", tpController.upload);
tpRouter.patch("/api/tps/:tpId", tpController.update);
tpRouter.get("/api/tps/:tpId", tpController.get);
tpRouter.delete("/api/tps/:tpId", tpController.remove);

export {
    tpRouter
};
