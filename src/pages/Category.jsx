import { Link } from 'react-router-dom'

const companyLogo = [
  { id: 1, img: 'images/company/brand1.png' },
  { id: 2, img: 'images/company/brand2.png' },
  { id: 3, img: 'images/company/brand3.png' },
  { id: 4, img: 'images/company/brand4.png' },
  { id: 5, img: 'images/company/brand5.png' },
]

function Category() {
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-28 py-28">
      <div className="flex flex-wrap items-center justify-around gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <img key={id} src={img} alt="" />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
        <p className="md:-rotate-90 font-semibold text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex uppercase min-w-[180px]">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="images/category/image1.png"
              alt=""
              className="w-full transition duration-200 hover:scale-105"
            />
          </Link>
        </div>
        {/* check later className="md:w-1/2" */}
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="images/category/image2.png"
                alt=""
                className="w-full transition duration-200 hover:scale-105"
              />
            </Link>
            <Link to="/">
              <img
                src="images/category/image3.png"
                alt=""
                className="w-full transition duration-200 hover:scale-105"
              />
            </Link>
            <Link to="/">
              <img
                src="images/category/image4.png"
                alt=""
                className="w-full transition duration-200 hover:scale-105"
              />
            </Link>
            <Link to="/">
              <img
                src="images/category/image5.png"
                alt=""
                className="w-full transition duration-200 hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Category
