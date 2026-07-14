import { createContext , useContext , useState , useEffect } from "react";
import getProducts from "../api/productsApi";


export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all');
    const [search, setSearch] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);
      const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        stock: '',
        thumbnail: '',
      });
      // Modal
      const [isModalOpen, setModalOpen] = useState(false);

    // new Set(.....) de btshel el mtkrar
    const categories = [
    ...new Set(
      products.map((product) => product.category)
    ),
  ]
    useEffect(() => {
        setLoading(true);
        async function loadProducts() {
          try {
            const data = await getProducts();
            setProducts(data);
          } catch (err)  {
              console.log(err);
              setError('Failed to load products');
            
          } finally {
            setLoading(false);
          }
        }
        loadProducts();
    }, [])
    

  // function to handle delete product
  function handleDelete(id) {
    setProducts((prevProducts) => (
      prevProducts.filter((product) => product.id !== id)
    ))
  }

  // function to handle edit products
  function handleEditing(product) {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      category: product.category,
      price: product.price,
      stock: product.stock,
      thumbnail: product.thumbnail,
    });
    setModalOpen(true);
  }

  function handleInputChange(event) {

  // 3mlt destructuring badl ma a3mel kda :
  // const name = event.target.name
  // const value = event.target.value
  const { name, value } = event.target

  setFormData((previousFormData) => ({
    ...previousFormData,
    [name]: value,
  }))
  }


  function handleSubmitProduct(event) {
  event.preventDefault()

  if (editingProduct) {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === editingProduct.id
          ? {
              ...product,
              title: formData.title,
              price: Number(formData.price),
              stock: Number(formData.stock),
              category: formData.category,
              thumbnail: formData.thumbnail,
            }
          : product
      )
    )
  } else {
    const newProduct = {
      id: Date.now(),
      title: formData.title,
      price: Number(formData.price),
      stock: Number(formData.stock),
      category: formData.category,
      thumbnail: formData.thumbnail,
    }

    setProducts((previousProducts) => [
      newProduct,
      ...previousProducts,
    ])
  }

  handleCloseModal()
}
  function handleCloseModal() {
  setModalOpen(false)
  setEditingProduct(null)

  setFormData({
    title: '',
    category: '',
    price: '',
    stock: '',
    thumbnail: '',
  })
}
function handleOpenAddModal() {
  setEditingProduct(null)

  setFormData({
    title: '',
    category: '',
    price: '',
    stock: '',
    thumbnail: '',
  })
  setModalOpen(true)
    }
    return <ProductContext.Provider value={{
        products,
        isLoading,
        error,

        category,
        setCategory,
        search, 
        setSearch,
        formData,
        editingProduct,
        handleCloseModal,
        handleDelete,
        isModalOpen,
        categories,
        handleEditing,
        handleInputChange,
        handleSubmitProduct,
        handleOpenAddModal
    }} >
        {children}
    </ProductContext.Provider>
}
// custom Hook
export  function useProduct() {
    return useContext(ProductContext);
}
