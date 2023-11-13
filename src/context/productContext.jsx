import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Context API
// In practice, it is used to manage the data needed by more than one component in centers located independently in the components.
// It is used to keep and change data.
// It is a central state management tool that can directly transfer between these variables that we keep as context.
// Context are start with Uppercase Letter

// Creating context
export const ProductContext = createContext();

// identifying the provider and the data it holds
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // the first moment it prints the components to the screen
  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products${
          selectedCategory ? "/category/" + selectedCategory : ""
        }`
      )
      .then((res) => setProducts(res.data));
  }, [selectedCategory]);

  // provides components for the data we keep in the context structure
  return (
    <ProductContext.Provider value={{ products, setSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
