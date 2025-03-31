"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserTrainerContext } from "@/context/context";
import axios from "axios";
import { Container } from "@mui/material";

import { ActionType } from "@/context/trainerReducer";
import TrainerLoginForm from "./components/TrainerLoginForm";
import TrainerSnackbar from "./components/TrainerSnackBar";
import TrainerRequestModal from "./components/TrainerRequestModal";

export default function TrainerLogin() {
  const router = useRouter();
  const { trainerDispatch } = UserTrainerContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [trainerRequestEmail, setTrainerRequestEmail] = useState("");

  useEffect(() => {
    setIsButtonDisabled(!(email.length > 0 && password.length > 0));
  }, [email, password]);

  const onTrainerLogin = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/trainer/createTra", {
        email,
        password,
      });
      console.log(res.data);
      trainerDispatch({ type: ActionType.SET_TRAINER, payload: res.data });
      router.push("/client/trainer/trainerHome"); // Redirect to trainer home page
    } catch (error) {
      setSnackbarMessage("Access denied. Trainers only.");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequest = () => setOpenModal(true);

  const handleRequestTrainerSubmit = async () => {
    try {
      const res = await axios.patch("/api/trainer/patchRequest", {
        email: trainerRequestEmail,
      });

      if (res.status === 200) {
        setSnackbarMessage("Trainer request sent successfully!");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Error sending trainer request:", error);
      setSnackbarMessage("Failed to send trainer request.");
      setOpenSnackbar(true);
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pb: 20,
      }}
    >
      <TrainerLoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        isButtonDisabled={isButtonDisabled}
        isLoading={isLoading}
        onTrainerLogin={onTrainerLogin}
        handleRequest={handleRequest}
      />

      <TrainerSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        onClose={() => setOpenSnackbar(false)}
      />

      <TrainerRequestModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        email={trainerRequestEmail}
        setEmail={setTrainerRequestEmail}
        onSubmit={handleRequestTrainerSubmit}
      />
    </Container>
  );
}
