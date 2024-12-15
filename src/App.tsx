import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideMenu, { Filters } from './components/SideMenu/SideMenu';
import GoodsList from './components/GoodsList/GoodsList';
import { productsData } from './types/Product';
import './App.css';

const categories = ['Смартфоны', 'Ноутбуки', 'Аудиотехника', 'Носимые устройства', 'Планшеты'];

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filters, setFilters] = useState<Filters>({ name: '', inStockOnly: false, category: '' });

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    setIsCollapsed(true); // Сворачиваем меню после применения фильтров
  };

  const filteredProducts = productsData.filter((product) => {
    const regex = new RegExp(filters.name, 'i');
    const matchesName = regex.test(product.name);
    const matchesInStock = !filters.inStockOnly || product.quantity > 0;
    const matchesCategory = !filters.category || product.category === filters.category;

    return matchesName && matchesInStock && matchesCategory;
  });

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <div className="app-container">
        <SideMenu isCollapsed={isCollapsed} categories={categories} onApplyFilters={handleApplyFilters} />
        <GoodsList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
