import { Snackbar, Alert } from "@mui/material";

interface AdminSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function AdminSnackbar({
  open,
  message,
  onClose,
}: AdminSnackbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
