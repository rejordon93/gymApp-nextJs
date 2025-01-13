import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (message: string, duration = 2500) => {
  Toastify({
    text: message,
    duration,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
  }).showToast();
};

export const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const cardData = ["Chest", "Back", "Legs", "Arms", "Cardio", "Abs"];
