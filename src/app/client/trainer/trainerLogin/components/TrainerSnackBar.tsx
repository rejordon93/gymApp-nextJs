import { Snackbar, Alert } from "@mui/material";

interface TrainerSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function TrainerSnackbar({
  open,
  message,
  onClose,
}: TrainerSnackbarProps) {
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
