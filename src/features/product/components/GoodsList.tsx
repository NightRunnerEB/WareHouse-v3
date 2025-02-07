import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination, Stack, Box, Button } from "@mui/material";
import { RootState } from "../../../store/store";
import GoodsCard from "./GoodsCard";
import AddProductModal from "./AddProductModal";

const GoodsList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const [openAddModal, setOpenAddModal] = useState(false);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Кнопка "Добавить товар" */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "30px",
          marginLeft: { xs: "0", md: "220px" },
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpenAddModal(true)}
        >
          Добавить товар
        </Button>
      </Box>

      {/* Сетка карточек */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "18px",
          padding: "0 30px 30px 30px",
          marginLeft: { xs: "0", md: "220px" },
          boxSizing: "border-box",
        }}
      >
        {paginatedProducts.map((product) => (
          <Box key={product.id}>
            <GoodsCard product={product} />
          </Box>
        ))}
      </Box>

      {/* Пагинация */}
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="secondary"
          sx={{
            "& .MuiPaginationItem-root": { color: "#FFFFFF" },
            "& .Mui-selected": {
              color: "#FFFFFF",
              backgroundColor: "#673AB7",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#424242",
            },
          }}
        />
      </Stack>

      {/* Модалка для добавления нового товара */}
      {openAddModal && (
        <AddProductModal
          open={openAddModal}
          onClose={() => setOpenAddModal(false)}
        />
      )}
    </Box>
  );
};

export default GoodsList;
