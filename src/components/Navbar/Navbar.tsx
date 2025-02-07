import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Menu as MenuIcon, Person as PersonIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoToCategories = () => {
    navigate("/categories");
  };

  const handleGoToProfile = () => {
    navigate("/profile");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#130a2a",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        height: "60px",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        {/* Кнопка "бургер" (сворачивает боковое меню) */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleMenu}
          sx={{
            fontSize: "24px",
            color: "#ffffff",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Заголовок, кликабельный -> переход на "/" */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "#ffffff",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={handleGoHome}
        >
          Товары
        </Typography>

        {/* Ссылки навигации */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {/* "Категории" -> /categories */}
          <Typography
            variant="body1"
            onClick={handleGoToCategories}
            sx={{
              color: "#ffffff",
              padding: "8px 12px",
              borderRadius: "4px",
              transition: "background-color 0.3s ease, color 0.3s ease",
              cursor: "pointer",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            Категории
          </Typography>
        </Box>

        {/* Иконка пользователя (переход в профиль) */}
        <IconButton
          color="inherit"
          sx={{
            color: "#ffffff",
            "&:hover": { color: "#dcdcdc" },
          }}
          onClick={handleGoToProfile}
        >
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
