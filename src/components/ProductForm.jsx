export default function ProductForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  isEditing,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="title"
        value={formData.title}
        onChange={onChange}
        type="text"
        placeholder="Product Name"
        className="w-full rounded-xl border px-4 py-3
        dark:border-gray-700
      dark:bg-gray-800
    dark:text-white
    dark:placeholder:text-gray-500"
        required
      />

      <input
        name="category"
        value={formData.category}
        onChange={onChange}
        type="text"
        placeholder="Category"
        className="w-full rounded-xl border px-4 py-3
        dark:border-gray-700
    dark:bg-gray-800
    dark:text-white
    dark:placeholder:text-gray-500"
        required
      />

      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={onChange}
        placeholder="Price"
        className="w-full rounded-xl border px-4 py-3
        dark:border-gray-700
    dark:bg-gray-800
    dark:text-white
    dark:placeholder:text-gray-500"
        min="0"
        step="0.01"
        required
      />

      <input
        name="stock"
        type="number"
        value={formData.stock}
        onChange={onChange}
        placeholder="Stock"
        className="w-full rounded-xl border px-4 py-3
        dark:border-gray-700
    dark:bg-gray-800
    dark:text-white
    dark:placeholder:text-gray-500"
        min="0"
        required
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="rounded-full bg-blue-600 px-6 py-3 text-white"
        >
          {isEditing ? 'Save Product' : 'Add Product'}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 font-semibold"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}