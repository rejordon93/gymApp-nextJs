"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import { deepPurple } from "@mui/material/colors";

type EmployeesProps = {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  editedAt: Date;
  name: string;
};

export default function ManageEmployees() {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeesProps | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/admin/getEmployee");
        console.log(res.data);
        setEmployees(res.data.employees);
        console.log(res.data.employeeRole);
        console.log(
          res.data.employeeRole.forEach((r) => console.log(r.role.name))
        );
      } catch (err) {
        console.error("Error fetching employees", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await axios.get("/api/employee/getEmployee");
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error("Error fetching employees", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  const handleEdit = (employee: EmployeesProps) => {
    setSelectedEmployee(employee);
    setOpen(true);
    console.log(employee);
  };

  if (loading) {
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={60} thickness={4} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Manage Employees
      </Typography>
      <Grid container spacing={3}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: deepPurple[500], mr: 2 }}>
                    {employee.username[0].toUpperCase()}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{employee.username}</Typography>
                    <Typography color="text.secondary" fontSize={14}>
                      {employee.email}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Joined: {new Date(employee.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Role: {role}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleEdit(employee)}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Move the dialog down here, outside the map loop */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={selectedEmployee?.username || ""}
            onChange={(e) =>
              setSelectedEmployee((prev) =>
                prev ? { ...prev, username: e.target.value } : null
              )
            }
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={selectedEmployee?.email || ""}
            onChange={(e) =>
              setSelectedEmployee((prev) =>
                prev ? { ...prev, email: e.target.value } : null
              )
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              // TODO: Send PUT request to save changes
              console.log("Updated employee:", selectedEmployee);
              setOpen(false);
            }}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
