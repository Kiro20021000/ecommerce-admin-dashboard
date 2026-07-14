export default function ProductTable({
  products,
  onDelete,
  onEdit,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white
    dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-white">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200 text-sm text-gray-700 dark:border-gray-700 dark:text-white">
            <th className="px-5 py-4 font-semibold dark:text-white">Product</th>
            <th className="px-5 py-4 font-semibold dark:text-white">Category</th>
            <th className="px-5 py-4 font-semibold dark:text-white">Price</th>
            <th className="px-5 py-4 font-semibold dark:text-white">Stock</th>
            <th className="px-5 py-4 text-right font-semibold dark:text-white">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-100 last:border-b-0
              dark:border-gray-700
  dark:hover:bg-gray-800
  dark:text-white"
            >
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  {product.thumbnail && (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-10 w-10 object-contain"
                    />
                  )}

                  <span className="font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </span>
                </div>
              </td>

              <td className="px-5 py-4 capitalize text-gray-700 dark:text-white">
                {product.category}
              </td>

              <td className="px-5 py-4 text-gray-900 dark:text-white">
                ${product.price}
              </td>

              <td className="px-5 py-4">
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm
                 dark:bg-emerald-900/40 dark:text-emerald-300 font-medium ">
                  {product.stock} in stock
                </span>
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-end gap-6">
                  <button
                    type="button"
                    onClick={() => onEdit(product)}
                    className="font-medium text-indigo-700 transition hover:text-indigo-900"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete(product.id)}
                    className="font-medium text-red-600 transition hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}