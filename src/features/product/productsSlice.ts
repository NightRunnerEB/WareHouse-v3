import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    price: number;
    unit?: string;
    imageUrl?: string;
}

const initialProducts: Product[] = [
    {
        id: 1,
        name: 'Смартфон Apple iPhone 13',
        description: 'Смартфон Apple iPhone 13 с 6.1-дюймовым дисплеем, 128 ГБ памяти и двойной камерой.',
        category: 'Смартфоны',
        quantity: 15,
        unit: 'шт',
        imageUrl: 'src/assets/iphone13.jpg',
        price: 75990,
    },
    {
        id: 2,
        name: 'Ноутбук Dell XPS 13',
        description: 'Ультрабук Dell XPS 13 с процессором Intel Core i7, 16 ГБ ОЗУ и SSD на 512 ГБ.',
        category: 'Ноутбуки',
        quantity: 7,
        unit: 'шт',
        imageUrl: 'src/assets/dell.jpg',
        price: 139990,
    },
    {
        id: 3,
        name: 'Беспроводные наушники Sony WH-1000XM4',
        description: 'Беспроводные наушники с активным шумоподавлением и до 30 часов работы от батареи.',
        category: 'Аудиотехника',
        quantity: 20,
        unit: 'шт',
        imageUrl: 'src/assets/sony.png',
        price: 24990,
    },
    {
        id: 4,
        name: 'Смарт-часы Samsung Galaxy Watch 4',
        description: 'Смарт-часы с функцией мониторинга здоровья и спортивными режимами.',
        category: 'Носимые устройства',
        quantity: 10,
        unit: 'шт',
        imageUrl: 'src/assets/смарт-часы.jpg',
        price: 18990,
    },
    {
        id: 5,
        name: 'Планшет Apple iPad Pro 11',
        description: 'Планшет с 11-дюймовым дисплеем Liquid Retina и поддержкой Apple Pencil.',
        category: 'Планшеты',
        quantity: 5,
        unit: 'шт',
        imageUrl: 'src/assets/apple-ipad-pro-11.jpg',
        price: 109990,
    },
    {
        id: 6,
        name: 'Смартфон Apple iPhone 13',
        description: 'Смартфон Apple iPhone 13 с 6.1-дюймовым дисплеем, 128 ГБ памяти и двойной камерой.',
        category: 'Смартфоны',
        quantity: 15,
        unit: 'шт',
        imageUrl: 'src/assets/iphone13.jpg',
        price: 75990,
    },
    {
        id: 7,
        name: 'Ноутбук Dell XPS 13',
        description: 'Ультрабук Dell XPS 13 с процессором Intel Core i7, 16 ГБ ОЗУ и SSD на 512 ГБ.',
        category: 'Ноутбуки',
        quantity: 7,
        unit: 'шт',
        imageUrl: 'src/assets/dell.jpg',
        price: 139990,
    },
    {
        id: 8,
        name: 'Беспроводные наушники Sony WH-1000XM4',
        description: 'Беспроводные наушники с активным шумоподавлением и до 30 часов работы от батареи.',
        category: 'Аудиотехника',
        quantity: 20,
        unit: 'шт',
        imageUrl: 'src/assets/sony.png',
        price: 24990,
    },
    {
        id: 9,
        name: 'Смарт-часы Samsung Galaxy Watch 4',
        description: 'Смарт-часы с функцией мониторинга здоровья и спортивными режимами.',
        category: 'Носимые устройства',
        quantity: 10,
        unit: 'шт',
        imageUrl: 'src/assets/смарт-часы.jpg',
        price: 18990,
    },
    {
        id: 10,
        name: 'Планшет Apple iPad Pro 11',
        description: 'Планшет с 11-дюймовым дисплеем Liquid Retina и поддержкой Apple Pencil.',
        category: 'Планшеты',
        quantity: 5,
        unit: 'шт',
        imageUrl: 'src/assets/apple-ipad-pro-11.jpg',
        price: 109990,
    },
    {
        id: 11,
        name: 'Беспроводные наушники Sony WH-1000XM4',
        description: 'Беспроводные наушники с активным шумоподавлением и до 30 часов работы от батареи.',
        category: 'Аудиотехника',
        quantity: 20,
        unit: 'шт',
        imageUrl: 'src/assets/sony.png',
        price: 24990,
    },
    {
        id: 12,
        name: 'Смарт-часы Samsung Galaxy Watch 4',
        description: 'Смарт-часы с функцией мониторинга здоровья и спортивными режимами.',
        category: 'Носимые устройства',
        quantity: 10,
        unit: 'шт',
        imageUrl: 'src/assets/смарт-часы.jpg',
        price: 18990,
    },
    {
        id: 13,
        name: 'Планшет Apple iPad Pro 11',
        description: 'Планшет с 11-дюймовым дисплеем Liquid Retina и поддержкой Apple Pencil.',
        category: 'Планшеты',
        quantity: 5,
        unit: 'шт',
        imageUrl: 'src/assets/apple-ipad-pro-11.jpg',
        price: 109990,
    },
]

const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const updatedProduct = action.payload;
            const index = state.findIndex((p) => p.id === updatedProduct.id);
            if (index !== -1) {
                state[index] = updatedProduct;
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            return state.filter((p) => p.id !== productId);
        },
    },
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
