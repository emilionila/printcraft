/* eslint-disable no-useless-catch */
import axios from 'axios';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types/product';

export const SERVER_HOST = 'http://localhost:3005';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const generateId = () => Math.floor(Math.random() * 10001);

export const PageToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function searchProductList(
  product: Product[],
  query?: string,
) {
  let preparedList = [...product];

  if (query) {
    preparedList = preparedList.filter(
      item => item.name.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return preparedList;
}

export function getLocation(product: Product) {
  let location = '';

  switch (product.categoryId) {
    case 1:
      location = '/phones';
      break;
    case 2:
      location = '/tablets';
      break;
    case 3:
      location = '/accessories';
      break;
    default:
      location = '/';
      break;
  }

  const productPageLink = `${location}/${product.name}`;

  return productPageLink;
}

export const fetchData = async () => {
  return [
    {
      "id": 1,
      "category": "phones",
      "itemId": "apple-iphone-7-32gb-black",
      "name": "Apple iPhone 7 32GB Black",
      "fullPrice": 400,
      "price": 375,
      "screen": "4.7' IPS",
      "capacity": "32GB",
      "color": "black",
      "ram": "2GB",
      "year": 2016,
      "image": "img/phones/apple-iphone-7/black/00.webp"
    },
    {
      "id": 2,
      "category": "phones",
      "itemId": "apple-iphone-7-plus-32gb-black",
      "name": "Apple iPhone 7 Plus 32GB Black",
      "fullPrice": 540,
      "price": 500,
      "screen": "5.5' IPS",
      "capacity": "32GB",
      "color": "black",
      "ram": "3GB",
      "year": 2016,
      "image": "img/phones/apple-iphone-7-plus/black/00.webp"
    },
    {
      "id": 3,
      "category": "phones",
      "itemId": "apple-iphone-8-64gb-gold",
      "name": "Apple iPhone 8 64GB Gold",
      "fullPrice": 600,
      "price": 550,
      "screen": "4.7' IPS",
      "capacity": "64GB",
      "color": "gold",
      "ram": "2GB",
      "year": 2017,
      "image": "img/phones/apple-iphone-8/gold/00.webp"
    },
    {
      "id": 4,
      "category": "phones",
      "itemId": "apple-iphone-11-64gb-black",
      "name": "Apple iPhone 11 64GB Black",
      "fullPrice": 932,
      "price": 880,
      "screen": "6.1' IPS",
      "capacity": "64GB",
      "color": "black",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/black/00.webp"
    },
    {
      "id": 5,
      "category": "phones",
      "itemId": "apple-iphone-11-128gb-yellow",
      "name": "Apple iPhone 11 128GB Yellow",
      "fullPrice": 1100,
      "price": 1050,
      "screen": "6.1' IPS",
      "capacity": "128GB",
      "color": "yellow",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/yellow/00.webp"
    },
    {
      "id": 6,
      "category": "phones",
      "itemId": "apple-iphone-11-256gb-green",
      "name": "Apple iPhone 11 256GB Green",
      "fullPrice": 1172,
      "price": 1115,
      "screen": "6.1' IPS",
      "capacity": "256GB",
      "color": "green",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/green/00.webp"
    },
    {
      "id": 7,
      "category": "phones",
      "itemId": "apple-iphone-11-pro-64gb-gold",
      "name": "Apple iPhone 11 Pro 64GB Gold",
      "fullPrice": 1312,
      "price": 1270,
      "screen": "5.8' OLED",
      "capacity": "64GB",
      "color": "gold",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/gold/00.webp"
    },
    {
      "id": 8,
      "category": "phones",
      "itemId": "apple-iphone-11-pro-256gb-midnightgreen",
      "name": "Apple iPhone 11 Pro 256GB Midnight green",
      "fullPrice": 1640,
      "price": 1570,
      "screen": "5.8' OLED",
      "capacity": "256GB",
      "color": "midnightgreen",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/midnightgreen/00.webp"
    },
    {
      "id": 9,
      "category": "phones",
      "itemId": "apple-iphone-11-pro-512gb-silver",
      "name": "Apple iPhone 11 Pro 512GB Silver",
      "fullPrice": 1880,
      "price": 1780,
      "screen": "5.8' OLED",
      "capacity": "512GB",
      "color": "silver",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/silver/00.webp"
    },
    {
      "id": 10,
      "category": "phones",
      "itemId": "apple-iphone-11-pro-max-64gb-spacegray",
      "name": "Apple iPhone 11 Pro Max 64GB Spacegray",
      "fullPrice": 1480,
      "price": 1400,
      "screen": "6.5' OLED",
      "capacity": "64GB",
      "color": "spacegray",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro-max/spacegray/00.webp"
    }
  ]


};
