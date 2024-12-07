import express from 'express';
import {tpRouter} from "../route/api.js";
import {errorMiddleware} from "../middleware/error-middleware.js";

export const app = express();
app.use(express.json());

app.use(tpRouter);
app.use(errorMiddleware);
