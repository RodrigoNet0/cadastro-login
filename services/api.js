    import { PrismaClient } from '@prisma/client';
        
    const prisma = new PrismaClient();
        
    export const getProducts = async () => {
      const products = await prisma.product.findMany();
      return products;
    };
        
    export const getProduct = async (id) => {
      const product = await prisma.product.findUnique({
        where: {
          id,
        },
      });
      return product;
    };
        
    export const createProduct = async (product) => {
      const newProduct = await prisma.product.create({
        data: product,
      });
      return newProduct;
    };
        
    export const updateProduct = async (id, product) => {
      const updatedProduct = await prisma.product.update({
        where: {
          id,
        },
        data: product,
      });
      return updatedProduct;
    };
        
    export const deleteProduct = async (id) => {
      const deletedProduct = await prisma.product.delete({
        where: {
          id,
        },
      });
      return deletedProduct;
    };
        
    export const getCart = async () => {
      const cart = await prisma.cart.findMany();
      return cart;
    };
        
    export const createCart = async (cart) => {
      const newCart = await prisma.cart.create({
        data: cart,
      });
      return newCart;
    };
        
    export const updateCart = async (id, cart) => {
      const updatedCart = await prisma.cart.update({
        where: {
          id,
        },
        data: cart,
      });
      return updatedCart;
    };
        
    export const deleteCart = async (id) => {
      const deletedCart = await prisma.cart.delete({
        where: {
          id,
        },
      });
      return deletedCart;
    };
        
    export const getOrders = async () => {
      const orders = await prisma.order.findMany();
      return orders;
    };
        
    export const createOrder = async (order) => {
      const newOrder = await prisma.order.create({
        data: order,
      });
      return newOrder;
    };
        
    export const updateOrder = async (id, order) => {
      const updatedOrder = await prisma.order.update({
        where: {
          id,
        },
        data: order,
      });
      return updatedOrder;
    };
        
    export const deleteOrder = async (id) => {
      const deletedOrder = await prisma.order.delete({
        where: {
          id,
        },
      });
      return deletedOrder;
    };
        
   