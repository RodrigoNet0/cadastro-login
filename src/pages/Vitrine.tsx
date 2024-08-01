/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiArrowGoBackFill } from "react-icons/ri";

type Product = {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function Vitrine() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const fetchedProducts = data.slice(0, 10).map((item: any) => ({
        id: item.id,
        name: item.title,
        href: `/product/${item.id}`,
        imageSrc: item.image,
        imageAlt: item.title,
        price: Math.floor(Math.random() * 100) + 1,
        color: 'N/A',
      }));
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCart(cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId: number) => {
    setCart(cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    ));
  };

  const checkout = async () => {
    try {
      const response = await axios.post('https://your-backend-api.com/checkout', { cart });
      console.log('Checkout successful:', response.data);
      localStorage.removeItem('cart');
      setCart([]);
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  return (
    <div className="relative">
    <img
      src="https://wallpapercave.com/wp/wp2757956.gif"
      alt="background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 bg-white bg-opacity-0"> {/* Ajuste aqui para bg-opacity-0 */}
      <h2 className="text-2xl font-bold tracking-tight text-white">VITRINE</h2>
  
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative border p-4 rounded-lg flex flex-col h-full bg-white bg-opacity-70"> {/* Adicione bg-white bg-opacity-70 aqui */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex-grow flex flex-col">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 bg-blue-500 text-white py-2 rounded w-full"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="mt-2 text-sm text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <ul className="mt-4 divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-sm text-red-500"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex space-x-4 mt-4">
          <Link
            className='text-black bg-gray-200 py-2 px-4 rounded flex items-center'
            to={"/Home"}
          >
            <RiArrowGoBackFill size={30} />
            <span className="ml-2">Voltar</span>
          </Link>
          <button
            onClick={checkout}
            className="bg-green-500 text-white py-2 px-4 rounded w-24"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
