import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  Box,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { Product, removeProduct } from "../productsSlice";

interface GoodsCardProps {
  product: Product;
}

const GoodsCard: React.FC<GoodsCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeProduct(product.id));
  };

  return (
    <Tooltip title={product.description || "Описание отсутствует"} arrow>
      <Card
        sx={{
          width: 250,
          padding: 2,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          background: "linear-gradient(135deg, #f9fafb 0%, #eaeef2 100%)",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            transform: "scale(1.05)",
            cursor: "pointer",
          },
        }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          image={product.imageUrl || "placeholder.jpg"}
          alt={product.name}
          sx={{
            height: 140,
            objectFit: "contain",
            backgroundColor: "#ffffff",
            borderRadius: 1,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          }}
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <Box sx={{ maxWidth: "80%" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#2d3748",
                  marginTop: 1,
                  marginBottom: 1,
                }}
                noWrap
              >
                {product.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 13,
                  color: "#718096",
                  fontStyle: "italic",
                  marginBottom: 1,
                }}
                noWrap
              >
                {product.category}
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: 14, color: "#2d3748", fontWeight: 500 }}
              >
                Количество: {product.quantity} {product.unit}
              </Typography>
            </Box>

            <IconButton
              aria-label="Удалить товар"
              onClick={handleDeleteClick}
              sx={{
                color: "#ff4d4f",
                "&:hover": {
                  color: "#d60000",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default GoodsCard;
