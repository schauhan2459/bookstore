// message.controller.js

import Message from "../model/message.model";

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new message instance
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save the message to MongoDB
    await newMessage.save();

    // Respond with a success message
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
