import {
  Box,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography,
} from "@mui/material";

interface TrainerRequestModalProps {
  open: boolean;
  onClose: () => void;
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
}

export default function TrainerRequestModal({
  open,
  onClose,
  email,
  setEmail,
  onSubmit,
}: TrainerRequestModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Enter Email to Request Trainer Access
          </Typography>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={onSubmit}
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit Request
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
