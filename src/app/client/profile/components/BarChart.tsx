"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Paper, Box, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";

// Days of the week to display on the chart
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DayTracker = () => {
  const [weeklyData, setWeeklyData] = useState(Array(7).fill(0)); // Stores data for each day of the week
  const [selectedDate, setSelectedDate] = useState(null); // Stores the selected date

  // Fetches data for the current week based on visits data
  const fetchCurrentWeekData = async () => {
    try {
      const response = await axios.get("/api/visits/getVisits");
      const visitsData = response.data;

      if (!visitsData || !visitsData.visits) {
        console.error("No visit data found.");
        return;
      }

      // Get the current week number
      const currentWeek = parseInt(dayjs().format("w"), 10);

      const tempData = Array(7).fill(0);

      // Process the visits to accumulate hours for each day of the week
      visitsData.visits.forEach((visit) => {
        const visitDateStr = visit.checkin;
        const visitDate = new Date(visitDateStr.replace(" at", ","));
        const visitWeek = parseInt(dayjs(visitDate).format("w"), 10);

        if (visitWeek === currentWeek) {
          const dayOfWeek = visitDate.getDay();
          const durationMatch = visit.visitDuration.match(
            /(?:(\d+)h)?\s*(?:(\d+)m)?/
          );

          if (durationMatch) {
            const hours = parseInt(durationMatch[1] || "0", 10);
            const minutes = parseInt(durationMatch[2] || "0", 10);
            const totalDurationInHours = hours + minutes / 60;

            tempData[dayOfWeek] += totalDurationInHours;
          }
        }
      });

      // Filter out days with less than 1 hour
      const filteredData = tempData.map((value) => (value >= 1 ? value : 0));
      setWeeklyData(filteredData); // Set the weekly data
    } catch (error) {
      console.error("Error fetching current week data:", error);
    }
  };

  // Fetches data for a specific week based on the selected date
  const fetchFilteredWeekData = async (date) => {
    try {
      const selectedWeek = parseInt(date.format("w"), 10); // Get the week number from the selected date

      const response = await axios.get("/api/visits/getVisits");
      const visitsData = response.data.visits;

      if (!visitsData || visitsData.length === 0) {
        console.log("No visits data available.");
        setWeeklyData(Array(7).fill(0)); // Reset data if no visits exist
        return;
      }

      const tempData = Array(7).fill(0);

      // Process the visits to accumulate hours for each day of the selected week
      visitsData.forEach((visit) => {
        const visitDate = new Date(visit.checkin.replace(" at", ","));
        const visitWeek = parseInt(dayjs(visitDate).format("w"), 10);

        if (visitWeek === selectedWeek) {
          const dayOfWeek = visitDate.getDay();
          const durationMatch = visit.visitDuration.match(
            /(?:(\d+)h)?\s*(?:(\d+)m)?/
          );

          if (durationMatch) {
            const hours = parseInt(durationMatch[1] || "0", 10);
            const minutes = parseInt(durationMatch[2] || "0", 10);
            const totalDurationInHours = hours + minutes / 60;

            tempData[dayOfWeek] += totalDurationInHours;
          }
        }
      });

      // Filter out days with less than 1 hour
      const filteredData = tempData.map((value) => (value >= 1 ? value : 0));
      setWeeklyData(filteredData);
    } catch (error) {
      console.error("Error fetching filtered week data:", error);
    }
  };

  // Handle changes when a new date is selected
  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      fetchFilteredWeekData(date); // Fetch data for the selected week
    } else {
      console.log("No date selected.");
    }
  };

  useEffect(() => {
    // Fetch the current week's data when the component loads
    fetchCurrentWeekData();
  }, []);

  return (
    <Paper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
        flexWrap="wrap"
        width="100%"
      >
        {/* BarChart showing weekly data */}
        <BarChart
          xAxis={[{ scaleType: "band", data: daysOfWeek }]}
          yAxis={[
            {
              min: 0,
              max: Math.max(...weeklyData) + 1, // Dynamic Y-axis based on data
              label: "Duration (Hours)",
            },
          ]}
          series={[
            {
              data: weeklyData,
              label: "Duration (Hours)",
              type: "bar",
            },
          ]}
          width={800}
          height={400}
        />

        {/* DatePicker to select a week */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ width: "100%", maxWidth: 400, margin: "0 auto", padding: 2 }}
          >
            <DemoContainer components={["DateField", "DatePicker"]}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                slots={{ textField: TextField }}
                sx={{
                  width: "100%", // Ensures the DatePicker is responsive
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f5f5f5", // Light background for the input
                    borderRadius: 2, // Rounded corners for the input
                    boxShadow: 2, // Light shadow for a modern look
                    padding: "6px 12px", // Inner padding for the input
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2", // Blue border on focus
                  },
                  "& .MuiInputLabel-root": {
                    color: "#1976d2", // Blue label color
                  },
                  "& .MuiInputBase-input": {
                    color: "#333", // Dark text color
                  },
                  "& .MuiPickersDay-daySelected": {
                    backgroundColor: "#1976d2", // Blue selected day
                    color: "white",
                  },
                }}
                slotProps={{
                  textField: {
                    variant: "outlined", // Outlined style for the input field
                    label: "Select Week",
                    fullWidth: true,
                  },
                }}
              />
            </DemoContainer>
          </Box>
        </LocalizationProvider>
      </Box>
    </Paper>
  );
};
