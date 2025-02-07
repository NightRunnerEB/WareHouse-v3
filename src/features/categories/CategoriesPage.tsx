import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Category, removeCategory } from "./categoriesSlice";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

const CategoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [editableCategory, setEditableCategory] = useState<Category | null>(
    null
  );

  const handleAdd = () => {
    setOpenAddModal(true);
  };

  const handleEdit = (category: Category) => {
    setEditableCategory(category);
  };

  const handleDelete = (id: string) => {
    dispatch(removeCategory(id));
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
        <Typography variant="h4" sx={{ mb: 2 }}>
          Список категорий
        </Typography>

        <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
          Добавить категорию
        </Button>

        {/* Список категорий */}
        <List>
          {categories.map((cat) => (
            <ListItem
              key={cat.id}
              secondaryAction={
                <Box>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(cat)}
                    sx={{ mr: 1, color: "#fff" }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(cat.id)}
                    sx={{ color: "#ff5252" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText primary={cat.name} />
            </ListItem>
          ))}
        </List>

        {/* Модалка "Добавить категорию" */}
        {openAddModal && (
          <AddCategoryModal
            open={openAddModal}
            onClose={() => setOpenAddModal(false)}
          />
        )}

        {/* Модалка "Редактировать категорию" */}
        {editableCategory && (
          <EditCategoryModal
            open={Boolean(editableCategory)}
            onClose={() => setEditableCategory(null)}
            category={editableCategory}
          />
        )}
      </Box>
    </Box>
  );
};

export default CategoriesPage;
