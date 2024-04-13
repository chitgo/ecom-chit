import { Link } from 'react-router-dom'

function Cards({ filteredItems }) {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-12 shadow-xl xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`shop/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className="object-cover w-full mx-auto transition-all duration-300 hover:scale-105"
            />
          </Link>
          <div className="px-4 mt-4">
            <h4 className=" text-base font-semibold min-h-[60px]">
              {item.title}
            </h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold"> ${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Cards
