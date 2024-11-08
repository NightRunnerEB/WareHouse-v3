import React, { useState } from 'react';
import { Product } from '../../types/Product';
import Modal from '../Modal/Modal';
import './GoodsCard.css';

interface GoodsCardProps {
  product: Product;
}

const GoodsCard: React.FC<GoodsCardProps> = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <article className="goods-card" onClick={handleCardClick}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="goods-image" />
        ) : (
          <div className="no-image">Изображение отсутствует</div>
        )}
        <h2 className="goods-name">{product.name}</h2>
        {product.description && (
          <p className="goods-description">{product.description}</p>
        )}
        {product.category && (
          <p className="goods-category">Категория: {product.category}</p>
        )}
        <p className="goods-quantity">
          Количество: {product.quantity} {product.unit}
        </p>
      </article>
      {isModalOpen && (
        <Modal product={product} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default GoodsCard;
