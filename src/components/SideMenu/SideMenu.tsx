import React from 'react';
import './SideMenu.css';

interface SideMenuProps {
  isCollapsed: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed }) => {
  return (
    <aside className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
      {!isCollapsed && (
        <div className="side-menu-content">
          <input type="text" placeholder="Поиск..." />
          <label>
            <input type="checkbox" />
            Показать только товары в наличии
          </label>
          <select>
            <option value="">Все категории</option>
            <option value="Категория 1">Категория 1</option>
            <option value="Категория 2">Категория 2</option>
            <option value="Категория 3">Категория 3</option>
          </select>
        </div>
      )}
    </aside>
  );
};

export default SideMenu;
