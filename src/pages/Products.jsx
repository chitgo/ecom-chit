import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../components/Cards'

function Products() {
  const [products, setProducts] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOption, setSortOption] = useState('default')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('products.json')
        const data = await response.json()

        setProducts(data)
        setFilteredItems(data)
      } catch (error) {
        console.log('error fetching data', error)
      }
    }
    fetchData()
  }, [])

  // filtering function
  const filterItems = (category) => {
    const filtered =
      category === 'all'
        ? products
        : products.filter((item) => item.category === category)

    const sortedItems = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'A-Z':
          return a.title.localeCompare(b.title)
        case 'Z-A':
          return b.title.localeCompare(a.title)
        case 'low-to-high':
          return a.price - b.price
        case 'high-to-low':
          return b.price - a.price
        default:
          break
      }
    })

    setFilteredItems(sortedItems)
    setSelectedCategory(category)
  }

  // show all products

  const showAll = () => {
    setFilteredItems(products)
    setSortOption('default')

    setSelectedCategory('all')
  }

  // sorting function
  const handleShorting = (option) => {
    setSortOption(option)
    setFilteredItems(
      [...filteredItems].sort((a, b) => {
        switch (option) {
          case 'A-Z':
            return a.title.localeCompare(b.title)
          case 'Z-A':
            return b.title.localeCompare(a.title)
          case 'low-to-high':
            return a.price - b.price
          case 'high-to-low':
            return b.price - a.price
          default:
            break
        }
      })
    )
  }

  return (
    <div className="container px-4 mx-auto mb-12 max-w-screen-2xl xl:px-28">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* product cards */}
      <div>
        <div className="flex flex-col flex-wrap items-center mb-8 space-y-3 md:flex-row md:justify-between">
          <div className="flex flex-row flex-wrap justify-start gap-4 md:items-center md:gap-8">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems('Dress')}>Clothing</button>
            <button onClick={() => filterItems('Hoodies')}>Hoodies</button>
            <button onClick={() => filterItems('Bag')}>Bags</button>
          </div>

          {/* sorting option */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="p-2 bg-black">
              <FaFilter className="w-4 h-4 text-white" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleShorting(e.target.value)}
              value={sortOption}
              className="px-2 py-1 text-white bg-black rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  )
}
export default Products
