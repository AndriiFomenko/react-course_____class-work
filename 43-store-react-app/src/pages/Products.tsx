import { useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import type { ProductInterface } from '../types/product.interface'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../utils/mockapi'
import Product from '../components/Product'
import AddProductButton from '../components/AddProductButton'
import { debounce } from '../utils/debounce'
import { ORDER_BY_LIST, SORT_BY_LIST } from '../data/mockData'
import { MdRefresh } from 'react-icons/md'
import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

const Products = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')
  const [reloadTrigger, setReloadTrigger] = useState(0)

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const inputRef = useRef<HTMLInputElement>(null)

  const {
    data: products,
    error,
    isLoading
  } = useFetch<ProductInterface>(
    createUrl(page, name, sort, order),
    undefined,
    reloadTrigger
  )

  const debouncedSetName = debounce(setName, 1000)

  const resetFilters = () => {
    setName('')
    setSort('')
    setOrder('')
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h1>Products List</h1>
      <div className="products-filter">
        <InputField
          ref={inputRef}
          id="filter"
          value={name}
          onChange={(e) => debouncedSetName(e.target.value)}
          placeholder="Filter products by name..."
        />
        <SelectField
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          options={SORT_BY_LIST}
        />
        <SelectField
          id="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          options={ORDER_BY_LIST}
        />
        <button onClick={resetFilters}>
          <MdRefresh />
        </button>
      </div>
      {isLoading && <h2 className="loading">Loading products...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">
            {isAuthenticated && <AddProductButton />}
            <div className="pagination">
              <button
                className="pagination__btn"
                disabled={page === 1}
                onClick={() => setPage((prevState) => prevState - 1)}
              >
                Previous
              </button>
              <button
                className="pagination__btn"
                disabled={products.length < API_ITEMS_PER_PAGE_LIMIT}
                onClick={() => setPage((prevState) => prevState + 1)}
              >
                Next
              </button>
            </div>
          </div>

          {products.length > 0 ? (
            <ul className="products-list">
              {products.map((product: ProductInterface) => (
                <Product
                  key={product.id}
                  product={product}
                  reload={() => setReloadTrigger(product.id)}
                />
              ))}
            </ul>
          ) : (
            <p className="products-empty">No products found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Products
