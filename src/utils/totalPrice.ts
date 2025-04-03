import { ProductType } from "../models/Products";

/**
 * Calculates total price of a new productsorder
 * @param {Array} products - Array of cart products
 * @returns {Number} Products total price
 */

export const calculateTotalPrice = (products: ProductType[]): number =>
  products.reduce((acc, product) => acc + product.price, 0);
