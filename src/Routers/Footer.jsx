import React from "react";
import { Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Names Section */}
        <Typography variant="h6" className="text-center text-gray-300">
          Made by:
        </Typography>
        <div className="flex space-x-4">
          <Typography className="text-gray-400">Om Dalbhanjan</Typography>
          <Typography className="text-gray-400">Atharva Karval</Typography>
          <Typography className="text-gray-400">Samarth Patil</Typography>
        </div>

        {/* Resumes Section */}
        <div className="flex space-x-4">
          <Button
            variant="outlined"
            color="primary"
            href="/resume1.pdf" // Replace with actual file links
            target="_blank"
            className="hover:underline"
          >
            Resume 1
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="/resume2.pdf" // Replace with actual file links
            target="_blank"
            className="hover:underline"
          >
            Resume 2
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="/resume3.pdf" // Replace with actual file links
            target="_blank"
            className="hover:underline"
          >
            Resume 3
          </Button>
        </div>

        {/* Copyright */}
        <Typography className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Made with ❤️ by Om Dalbhanjan,Atharva Karval, and Samarth Patil
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
