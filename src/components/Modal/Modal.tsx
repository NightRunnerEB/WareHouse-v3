import React from 'react';
import { Product } from '../../types/Product';
import './Modal.css';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="modal-image" />
        ) : (
          <div className="no-image">Изображение отсутствует</div>
        )}
        <h2 className="modal-name">{product.name}</h2>
        {product.description && (
          <p className="modal-description">{product.description}</p>
        )}
        {product.category && (
          <p className="modal-category">Категория: {product.category}</p>
        )}
        <p className="modal-quantity">
          Количество: {product.quantity} {product.unit}
        </p>
      </div>
    </div>
  );
};

export default Modal;
