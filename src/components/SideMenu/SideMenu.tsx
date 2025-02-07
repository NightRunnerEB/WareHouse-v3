import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export interface Filters {
  name: string;
  inStockOnly: boolean;
  category: string;
}

interface SideMenuProps {
  isCollapsed: boolean;
  onApplyFilters: (filters: Filters) => void;
}

// Кастомные кнопки
const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  borderRadius: "6px",
  fontWeight: "bold",
  textTransform: "uppercase",
  "&.apply": {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    "&:hover": { backgroundColor: theme.palette.primary.dark },
  },
  "&.reset": {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
    },
  },
}));

const SideMenu: React.FC<SideMenuProps> = ({
  isCollapsed,
  onApplyFilters,
}) => {
  // Список категорий берём из Redux (например, categoriesSlice)
  const categories = useSelector((state: RootState) => state.categories);

  // Локальные стейты для полей фильтра
  const [name, setName] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [category, setCategory] = useState("");

  const handleApplyFilters = () => {
    // Передаём наружу выбранные значения
    onApplyFilters({ name, inStockOnly, category });
  };

  const handleResetFilters = () => {
    setName("");
    setInStockOnly(false);
    setCategory("");
  };

  return (
    <Box
      component="aside"
      sx={{
        position: "fixed",
        left: 0,
        width: isCollapsed ? "60px" : "220px",
        background: "linear-gradient(135deg, #1b1035, #130a2b)",
        height: "calc(100% - 60px)",
        padding: isCollapsed ? "20px 10px" : "20px",
        boxSizing: "border-box",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        transition: "width 1s ease",
      }}
    >
      {!isCollapsed && (
        <Stack spacing={2}>
          {/* Название товара */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              label="Название товара"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              slotProps={{
                input: {
                  style: { color: "#9c27b0" },
                },
                inputLabel: {
                  style: { color: "#9c27b0" },
                },
              }}
              sx={{
                minWidth: "170px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderWidth: "2px",
                    borderColor: "#9c27b0",
                  },
                },
              }}
            />
            <IconButton onClick={() => setName("")}>
              <ClearIcon
                sx={{
                  color: "#9c27b0",
                  marginLeft: "-13px",
                }}
              />
            </IconButton>
          </Box>

          {/* Чекбокс: Только в наличии */}
          <FormControlLabel
            control={
              <Checkbox
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": { color: "#3f51b5" },
                }}
              />
            }
            label={<Typography color="white">Только в наличии</Typography>}
          />

          {/* Категория */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              fullWidth
              size="small"
              sx={{
                minWidth: "170px",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                color: "#333",
                "& fieldset": { borderColor: "#9c27b0" },
                "&:hover fieldset": { borderColor: "#9c27b0" },
              }}
            >
              <MenuItem value="">Все категории</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
            <IconButton onClick={() => setCategory("")}>
              <ClearIcon sx={{ color: "#9c27b0", marginLeft: "-13px" }} />
            </IconButton>
          </Box>

          {/* Кнопки "Применить" и "Сбросить" */}
          <StyledButton className="apply" onClick={handleApplyFilters}>
            Применить
          </StyledButton>
          <StyledButton
            className="reset"
            variant="outlined"
            onClick={handleResetFilters}
          >
            Сбросить
          </StyledButton>
        </Stack>
      )}
    </Box>
  );
};

export default SideMenu;
