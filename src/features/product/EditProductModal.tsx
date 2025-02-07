import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Product, updateProduct } from "./productsSlice.ts";

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [price, setPrice] = useState<number>(product.price);

  const handleSave = () => {
    if (!name.trim() || !description.trim() || !category.trim()) {
      alert("Все поля (кроме изображения и единицы измерения) должны быть заполнены!");
      return;
    }
    if (quantity < 0 || price < 0) {
      alert("Количество и цена не могут быть отрицательными!");
      return;
    }

    const updated: Product = {
      ...product,
      name,
      description,
      category,
      quantity,
      price,
    };

    dispatch(updateProduct(updated));

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Редактирование товара</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Количество"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Цена"
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          required
          fullWidth
          margin="normal"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Отмена
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal;
