import { Link } from 'react-router-dom'

function Newsletters() {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 py-16 px-4">
      <h2 className="mb-8 title">Follow products and discounts on Instagram</h2>

      {/* insta grid */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
        <Link to="/">
          <img src="images/instagram/img1.png" alt="" />
        </Link>
        <Link to="/">
          <img src="images/instagram/img2.png" alt="" />
        </Link>
        <Link to="/">
          <img src="images/instagram/img3.png" alt="" />
        </Link>
        <Link to="/">
          <img src="images/instagram/img4.png" alt="" />
        </Link>
        <Link to="/">
          <img src="images/instagram/img5.png" alt="" />
        </Link>
        <Link to="/">
          <img src="images/instagram/img6.png" alt="" />
        </Link>
      </div>

      {/* newsletter form */}
      <div>
        <h2 className="mb-8 title">Or Subscribe to the newsletter</h2>
        <form className="mx-auto text-center md:w-1/2">
          <input
            type="email"
            name="email"
            placeholder="Enter your email.."
            className="w-full h-8 pl-2 mb-5 mr-4 bg-transparent border-b-2 border-black outline-none md:w-2/3 placeholder:text-black/50 "
          />
          <input
            type="submit"
            value={'Submit'}
            className="gap-2 px-6 py-1 font-semibold text-white transition duration-200 rounded-sm cursor-pointer bg-Black hover:bg-orange-500"
          />
        </form>
      </div>
    </div>
  )
}
export default Newsletters
