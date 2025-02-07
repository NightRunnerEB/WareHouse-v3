import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { removeProduct, Product } from "./productsSlice";
import { Button, Typography, Box } from "@mui/material";
import EditProductModal from "./EditProductModal";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openEditModal, setOpenEditModal] = useState(false);

  const product: Product | undefined = useSelector((state: RootState) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return (
      <Box
        sx={{
          marginLeft: { xs: 0, md: "220px" },
          p: 3,
          color: "#fff",
        }}
      >
        <Typography variant="h5">Товар не найден</Typography>
      </Box>
    );
  }

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
    navigate("/");
  };

  const handleEdit = () => {
    setOpenEditModal(true);
  };

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
          maxWidth: 600,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(3px)",
          borderRadius: 2,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          color: "#fff",
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          <strong>Категория:</strong> {product.category}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          <strong>Количество:</strong> {product.quantity} {product.unit}
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          <strong>Цена:</strong> {product.price} руб.
        </Typography>

        {/* Кнопки "Редактировать" и "Удалить" */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Редактировать
          </Button>
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Удалить
          </Button>
        </Box>
      </Box>

      {openEditModal && (
        <EditProductModal
          open={openEditModal}
          onClose={() => setOpenEditModal(false)}
          product={product}
        />
      )}
    </Box>
  );
};

export default ProductDetailsPage;
