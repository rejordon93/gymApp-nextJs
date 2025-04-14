"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

// Define the shape of an employee object
interface Employee {
  _id: string;
  username: string;
  email?: string;
}

export default function ManageEmployees() {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredResults, setFilteredResults] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [editedUsername, setEditedUsername] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/employee/getEmployee");
        setEmployees(res.data.getAllEmployee);
      } catch (err) {
        console.error("Error fetching employees:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = employees.filter((emp) =>
        emp.username?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchQuery, employees]);

  const handleEditClick = (emp: Employee) => {
    setSelectedEmployee(emp);
    setEditedUsername(emp.username);
    setEditedEmail(emp.email || "");
    setEditDialogOpen(true);
  };

  const handleEditSave = async () => {
    if (selectedEmployee) {
      // Optional: Make an API call to save edited employee
      try {
        await axios.put(
          `/api/employee/updateEmployee/${selectedEmployee._id}`,
          {
            username: editedUsername,
            email: editedEmail,
          }
        );

        // Update employee in the local state
        const updatedEmployees = employees.map((emp) =>
          emp._id === selectedEmployee._id
            ? { ...emp, username: editedUsername, email: editedEmail }
            : emp
        );
        setEmployees(updatedEmployees);
      } catch (err) {
        console.error("Failed to update employee:", err);
      } finally {
        setEditDialogOpen(false);
      }
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={2}>
        Manage Employees
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search employees..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {loading ? (
        <CircularProgress />
      ) : filteredResults.length > 0 ? (
        <List>
          {filteredResults.map((emp) => (
            <ListItem key={emp._id} sx={{ borderBottom: "1px solid #eee" }}>
              <ListItemText
                primary={emp.username}
                secondary={`Email: ${emp.email || "N/A"}`}
              />
              <Button onClick={() => handleEditClick(emp)}>Edit</Button>
              <Button color="error">X</Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No employees found.</Typography>
      )}

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleEditSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
