import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from 'react-icons/fa'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navLinks = [
    { title: 'Jewelry & Accessories', path: '#' },
    { title: 'Clothing & Shoes', path: '#' },
    { title: 'Home & Living', path: '#' },
    { title: 'Wedding & Party', path: '#' },
    { title: 'Toys & Entertainment', path: '#' },
    { title: 'Art & Collectibles', path: '#' },
    { title: 'Craft Supplies & Tools', path: '#' },
  ]

  return (
    <div className="">
      <header className="absolute top-0 left-0 right-0 px-4 mx-auto max-w-screen-2xl xl:px-28">
        <nav className="container flex items-center justify-between pt-6 pb-3 md:py-4 ">
          <FaSearch className="hidden w-5 h-5 cursor-pointer text-Black md:block" />
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="items-center hidden gap-4 text-lg text-gray-700 sm:flex">
            <a href="#" className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              Account
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaShoppingBag className="text-gray-500 " />
              Shopping
            </a>
          </div>

          {/* hamburger menu */}
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5 text-Black" />
              ) : (
                <FaBars className="w-5 h-5 text-Black" />
              )}
            </button>
          </div>
        </nav>
        <hr className="border-gray-200" />

        {/* category items */}
        <div className="pt-8">
          <ul className="items-center justify-between hidden lg:flex text-Black">
            {navLinks.map(({ title, path }) => (
              <li key={title} className="hover:text-orange-500">
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu */}
        <div className="sm:hidden">
          <ul
            className={`bg-Black text-white px-4 py-2 rounded ${
              isMenuOpen ? '' : 'hidden'
            }`}
          >
            {navLinks.map(({ title, path }) => (
              <li
                key={title}
                className="my-3 cursor-pointer hover:text-orange-500 "
              >
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}
export default Navbar
