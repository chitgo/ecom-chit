import { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowCircleRight, FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('products.json')
        const data = await response.json()
        const product = data.filter((p) => p.id == id)
        console.log(product)
        setProducts(product[0])
      } catch (error) {
        console.log('error fetching data', error)
      }
    }

    fetchData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const { title, category, price, image, status } = products

  return (
    <div className="container px-4 mx-auto mt-28 max-screen-2xl xl:px-28">
      <div className="p-3 m-auto max-w-7xl">
        <div>
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="font-bold text-black">
            {' '}
            / Shop
          </a>
        </div>
        <div className="mt-6=2 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>

            {/* product details */}
            <div>
              <h1 className="text-left title">{title}</h1>
              <p className="mt-3 text-base leading-6 text-justify text-gray-600 sm:text-left sm:mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate suscipit voluptatum error maiores perspiciatis
                officiis nesciunt rem porro, adipisci eum atque. Quas, accusamus
                itaque vel illo labore nisi debitis nobis?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Assumenda, vel. Illo,
                repellat asperiores? Libero harum labore eum illum maxime,
                dolore dolor tempora nam placeat aliquid quibusdam minus ut
                explicabo sed.
              </p>
              <span className="flex items-center gap-1 my-2 text-xl text-yellow-400 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <p className="text-xl font-semibold text-red-500 sm:text-2xl">
                ${price}
              </p>

              <div className="mt-3">
                <div className="flex flex-col w-full gap-2 text-left">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="w-full max-w-full px-4 py-3 m-0 mb-1 text-sm font-semibold border border-gray-300 rounded-md outline-none md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full my-4 text-left">
                  <button className="flex items-center justify-center w-full gap-2 px-4 py-3 font-bold text-white transition-all duration-150 ease-in-out bg-red-500 border border-red-500 shadow-slate-500 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                    <span>Confirm Order</span>
                    <FaArrowCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-black/75">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, impedit! Magni animi hic ab assumenda. Reiciendis
              perferendis ullam nesciunt dolores aut voluptatem earum? Quo optio
              culpa minus. Fugiat, expedita impedit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, impedit! Magni animi hic ab assumenda. Reiciendis
              perferendis ullam nesciunt dolores aut voluptatem earum? Quo optio
              culpa minus. Fugiat, expedita impedit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, impedit! Magni animi hic ab assumenda. Reiciendis
              perferendis ullam nesciunt dolores aut voluptatem earum? Quo optio
              culpa minus. Fugiat, expedita impedit?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, impedit! Magni animi hic ab assumenda. Reiciendis
              perferendis ullam nesciunt dolores aut voluptatem earum? Quo optio
              culpa minus. Fugiat, expedita impedit?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct
