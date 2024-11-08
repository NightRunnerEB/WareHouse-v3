import React, { useState } from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import { Product } from '../../types/Product';
import './GoodsList.css';

const productsData = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13',
    description: 'Смартфон Apple iPhone 13 с 6.1-дюймовым дисплеем, 128 ГБ памяти и двойной камерой.',
    category: 'Смартфоны',
    quantity: 15,
    unit: 'шт',
    imageUrl: 'src/assets/iphone13.jpg',
  },
  {
    id: 2,
    name: 'Ноутбук Dell XPS 13',
    description: 'Ультрабук Dell XPS 13 с процессором Intel Core i7, 16 ГБ ОЗУ и SSD на 512 ГБ.',
    category: 'Ноутбуки',
    quantity: 7,
    unit: 'шт',
    imageUrl: 'src/assets/dell.jpg',
  },
  {
    id: 3,
    name: 'Беспроводные наушники Sony WH-1000XM4',
    description: 'Беспроводные наушники с активным шумоподавлением и до 30 часов работы от батареи.',
    category: 'Аудиотехника',
    quantity: 20,
    unit: 'шт',
    imageUrl: 'src/assets/sony.png',
  },
  {
    id: 4,
    name: 'Смарт-часы Samsung Galaxy Watch 4',
    description: 'Смарт-часы с функцией мониторинга здоровья и спортивными режимами.',
    category: 'Носимые устройства',
    quantity: 10,
    unit: 'шт',
    imageUrl: 'src/assets/смарт-часы.jpg',
  },
  {
    id: 5,
    name: 'Планшет Apple iPad Pro 11',
    description: 'Планшет с 11-дюймовым дисплеем Liquid Retina и поддержкой Apple Pencil.',
    category: 'Планшеты',
    quantity: 5,
    unit: 'шт',
    imageUrl: 'src/assets/apple-ipad-pro-11.jpg',
  },
];

const GoodsList: React.FC = () => {
  const [products] = useState<Product[]>(productsData);

  return (
    <main className="goods-list">
      {products.map((product) => (
        <GoodsCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default GoodsList;
