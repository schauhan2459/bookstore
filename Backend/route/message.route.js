// message.route.js

import express from "express";
import { createMessage } from "../controller/message.controller";

const router = express.Router();

// POST route to create a new message
router.post("/", createMessage);

export default router;
