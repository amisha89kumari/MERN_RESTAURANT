import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

// GET all reservations (test route)
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    reservations: [
      { id: 1, name: "John Doe", time: "7:00 PM" },
      { id: 2, name: "Jane Smith", time: "8:00 PM" },
    ],
  });
});

// POST route for sending reservation
router.post("/send", send_reservation);

export default router;

