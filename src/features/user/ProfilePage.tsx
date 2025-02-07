// src/features/user/ProfilePage.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Typography, Avatar } from "@mui/material";

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box
      sx={{
        marginLeft: { xs: 0, md: "220px" },
        p: 3,
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(3px)",
          borderRadius: 2,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          color: "#fff",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Профиль пользователя
        </Typography>

        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            mb: 3,
            border: "2px solid #ccc",
          }}
        />

        <Typography variant="h6" sx={{ mb: 1 }}>
          Имя: {user.name}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Email: {user.email}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Группа: {user.group}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePage;
