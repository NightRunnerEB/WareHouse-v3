import React, { useState } from "react";
import GoodsCard from "../GoodsCard/GoodsCard";
import { Pagination, Stack, Box } from "@mui/material";
import { Product } from "../../types/Product";

interface GoodsListProps {
  products: Product[];
}

const GoodsList: React.FC<GoodsListProps> = ({ products }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

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
      {/* Сетка карточек */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "18px",
          padding: "30px",
          marginLeft: { xs: "0", md: "220px" },
          marginBottom: "30px",
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
    </Box>
  );
};

export default GoodsList;
