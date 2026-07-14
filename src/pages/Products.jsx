import React, { useState , useEffect} from 'react'
import PaginationComponent from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable';
import FilterDropDown from '../components/FilterDropDown';
import getProducts from '../../src/api/productsApi';
import Loading from '../components/Loading'
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';
import { useProduct } from '../context/ProductContext';

export default function Products() {

  const {
    products,
    isLoading,
    error,

    search,
    setSearch,

    category,
    setCategory,
    categories,

    editingProduct,
    formData,
    isModalOpen,

    handleDelete,
    handleEditing,
    handleInputChange,
    handleSubmitProduct,
    handleCloseModal,
    handleOpenAddModal,
  } = useProduct()


  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  

  // Filter DropDown and search
  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(search.toLowerCase())
  )
    .filter((product) => category === 'all' ? true : product.category === category)
  
  const totalPages = Math.ceil(filteredProducts.length / perPage); // 12.5 => 13
  
  const startIndex = (currentPage - 1) * perPage;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + perPage);

  function handleCategoryChange(value) {
    setCategory(value);
    setCurrentPage(1);
  }
  

  

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <p className='text-red-500'>{ error}</p>
  }


 

  return (
    <>
      <div className='flex justify-between dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500'>
      <div className='text-start ps-8'>
      <h1 className='text-2xl font-bold dark:text-white'>Products</h1>
      <h2 className='text-gray-400 mb-4'>100 Products Found</h2>
        </div>
        <div>
          <button onClick={handleOpenAddModal} className='bg-blue-600 p-2 hover:bg-blue-800 transition-all duration-300
        text-white rounded-lg'>+ Add Product</button>
          </div>
        </div>
      <div className='flex gap-4'>
        <div >
          <Modal isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={editingProduct ? 'Edit product' : 'Add Product'} 
          >
            <ProductForm   
            formData={formData}
            onSubmit={handleSubmitProduct}
            onCancel={handleCloseModal}
            isEditing={Boolean(editingProduct)}
            onChange={handleInputChange}  
            />
            </Modal>
          <SearchBar value={search} onChange={setSearch} />
      </div>
        <div>
          <FilterDropDown value={category}
            onChange={handleCategoryChange}
            categories={categories}
          />
      </div>
      </div>
      <ProductTable products={visibleProducts}
        onDelete={handleDelete}
        onEdit={handleEditing}
      />
      <PaginationComponent currentPage={currentPage} totalPages={totalPages}
        onPageChange={ setCurrentPage} />
    </>
  )
}