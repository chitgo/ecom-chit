import { FaShoppingBag } from 'react-icons/fa'
import bannerImg from '/images/banner.png'

function Banner() {
  return (
    <div className="bg-primaryBG ">
      <div className="px-4 py-12 mx-auto max-w-7xl xl:px-28">
        <div className="flex flex-col items-center justify-between py-28 md:flex-row-reverse gap-14 ">
          <div className="md:1/2 ">
            <img src={bannerImg} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-5 text-4xl font-light md:text-5xl">
              Collections
            </h1>
            <p className="text-xl mb-7">
              You can explore and shop many different collection from various
              brands here.
            </p>
            <button className="flex items-center gap-2 px-6 py-2 font-semibold text-white transition duration-200 rounded-sm bg-Black hover:bg-orange-500">
              <FaShoppingBag className="inline-flex " /> Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
