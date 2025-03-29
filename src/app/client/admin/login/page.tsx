"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAdminContext } from "@/context/context";
import axios from "axios";
import { Container } from "@mui/material";
import { ActionType } from "@/context/adminReducer";
import AdminLoginForm from "./components/AdminLoginForm";
import AdminSnackbar from "./components/AdminSnackBar";
import AdminRequestModal from "./components/AdminRequestModal";

export default function AdminLogin() {
  const router = useRouter();
  const { adminDispatch } = UserAdminContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [adminRequestEmail, setAdminRequestEmail] = useState("");

  useEffect(() => {
    setIsButtonDisabled(!(email.length > 0 && password.length > 0));
  }, [email, password]);

  const onAdmin = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/admin/createAdmin", {
        email,
        password,
      });
      adminDispatch({ type: ActionType.SET_ADMIN, payload: res.data });
      router.push("/client/admin/adminHome");
    } catch (error) {
      setSnackbarMessage("Access denied. Admins only.");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequest = () => setOpenModal(true);

  const handleRequestAdminSubmit = async () => {
    try {
      const res = await axios.patch("/api/admin/patchRequest", {
        email: adminRequestEmail,
      });

      if (res.status === 200) {
        setSnackbarMessage("Admin request sent successfully!");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage("Failed to send admin request.");
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
      <AdminLoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        isButtonDisabled={isButtonDisabled}
        isLoading={isLoading}
        onAdmin={onAdmin}
        handleRequest={handleRequest}
      />

      <AdminSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        onClose={() => setOpenSnackbar(false)}
      />

      <AdminRequestModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        email={adminRequestEmail}
        setEmail={setAdminRequestEmail}
        onSubmit={handleRequestAdminSubmit}
      />
    </Container>
  );
}
