import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, Box, Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Product } from '../../types/Product';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  return (
    <Dialog 
      open 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth 
      sx={{ backdropFilter: 'blur(4px)' }} // Плавный фон
    >
      {/* Заголовок */}
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: '28px',
          color: '#333',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {product.name}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#888',
            '&:hover': { color: '#ff6b6b' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Контент */}
      <DialogContent
        sx={{
          background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 0.5s ease-out',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={product.imageUrl || 'placeholder.jpg'}
          alt={product.name}
          sx={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
            marginBottom: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        />

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '16px', color: '#555', lineHeight: 1.8, textAlign: 'justify' }}
        >
          {product.description || 'Описание отсутствует'}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: '15px',
            color: '#666',
            margin: '8px 0',
            '&::before': {
              content: '"\\f07c"',
              fontFamily: '"Font Awesome 5 Free"',
              fontWeight: 900,
              marginRight: '8px',
            },
          }}
        >
          Категория: {product.category}
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: '16px',
            color: '#333',
            '&::before': {
              content: '"\\f543"',
              fontFamily: '"Font Awesome 5 Free"',
              fontWeight: 900,
              marginRight: '8px',
            },
          }}
        >
          Количество: {product.quantity} {product.unit}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '16px',
            marginTop: '20px',
            '&:hover': {
              backgroundColor: '#ff4757',
            },
          }}
        >
          Купить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
