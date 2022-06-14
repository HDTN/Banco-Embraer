import express from "express";
import { router } from "./router";
import cors from 'cors'
import './database/connection'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json())

app.use("/api", router);

export { app };