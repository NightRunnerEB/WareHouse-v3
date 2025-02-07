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
import { addCategory } from "./categoriesSlice";

interface AddCategoryModalProps {
    open: boolean;
    onClose: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
    open,
    onClose,
}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleSave = () => {
        if (!name.trim()) {
            alert("Название категории не может быть пустым.");
            return;
        }

        dispatch(addCategory(name));

        onClose();
        setName("");
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Добавить категорию</DialogTitle>
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

export default AddCategoryModal;
