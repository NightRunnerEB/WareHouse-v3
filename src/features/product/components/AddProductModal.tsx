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
import { addProduct, Product } from "../productsSlice";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      description.trim() !== "" &&
      category.trim() !== "" &&
      quantity >= 0 &&
      price >= 0
    );
  };

  const handleSave = () => {
    if (!isFormValid()) {
      alert("Заполните все поля! Количество и цена не могут быть отрицательными.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name,
      description,
      category,
      quantity,
      price,
      unit: "шт",
      imageUrl: "",
    };

    dispatch(addProduct(newProduct));

    onClose();
    setName("");
    setDescription("");
    setCategory("");
    setQuantity(1);
    setPrice(0);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Добавить новый товар</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Название товара"
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

export default AddProductModal;
