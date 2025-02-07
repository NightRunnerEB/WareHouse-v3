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
import { Category, updateCategory } from "./categoriesSlice";

interface EditCategoryModalProps {
    open: boolean;
    onClose: () => void;
    category: Category;
}

const EditCategoryModal: React.FC<EditCategoryModalProps> = ({
    open,
    onClose,
    category,
}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(category.name);

    const handleSave = () => {
        if (!name.trim()) {
            alert("Название категории не может быть пустым.");
            return;
        }

        const updated: Category = {
            id: category.id,
            name,
        };

        dispatch(updateCategory(updated));

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Редактировать категорию</DialogTitle>
            <DialogContent dividers>
                <TextField
                    label="Название категории"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">
                    Отмена
                </Button>
                <Button variant="contained" onClick={handleSave}>
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCategoryModal;
