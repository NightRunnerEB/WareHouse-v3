import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import GoodsList from "./features/product/components/GoodsList";
import ProductDetailsPage from "./features/product/ProductDetailsPage";
import CategoriesPage from "./features/categories/CategoriesPage";
import ProfilePage from "./features/user/ProfilePage";

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box>
      <Navbar toggleMenu={toggleMenu} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        <SideMenu isCollapsed={isCollapsed} onApplyFilters={() => { }} />

        <Routes>
          <Route path="/" element={<GoodsList />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
