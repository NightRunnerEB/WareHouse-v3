import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  Box,
} from "@mui/material";
import Modal from "../Modal/Modal";
import { Product } from "../../types/Product";

interface GoodsCardProps {
  product: Product;
}

const GoodsCard: React.FC<GoodsCardProps> = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
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
          onClick={handleOpenModal}
        >
          {/* Изображение */}
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
            {/* Название */}
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

            {/* Категория */}
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

            {/* Количество */}
            <Typography
              variant="body1"
              sx={{ fontSize: 14, color: "#2d3748", fontWeight: 500 }}
            >
              Количество: {product.quantity} {product.unit}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>

      {/* Модальное окно */}
      {isModalOpen && <Modal product={product} onClose={handleCloseModal} />}
    </>
  );
};

export default GoodsCard;
