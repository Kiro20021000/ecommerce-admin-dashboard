import { Button } from '@heroui/react'

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  function goToPrevious() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  function goToNext() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="rounded-xl p-8">
      <p className="mb-6 text-sm text-gray-400">
        Selected Page: {currentPage}
      </p>

      <div className="mb-6 flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-medium transition ${
              currentPage === page
                ? 'bg-purple-500 text-white'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          color="secondary"
          variant="flat"
          onPress={goToPrevious}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>

        <Button
          color="secondary"
          variant="flat"
          onPress={goToNext}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}