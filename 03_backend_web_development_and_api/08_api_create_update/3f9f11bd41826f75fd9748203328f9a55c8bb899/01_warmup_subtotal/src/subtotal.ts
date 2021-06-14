type CartLine = {
  product: string;
  price: number;
  quantity: number;
};
type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(cart: CartLine[]): CartLineWithSubtotal[] {
  const newCart: CartLineWithSubtotal[] = [];
  cart.forEach((element) => {
    newCart.push({
      product: element.product,
      price: element.price,
      quantity: element.quantity,
      subtotal: element.price * element.quantity,
    });
  });

  return newCart;
}
