function Collections() {
  return (
    <div className="px-4 my-20 bg-center bg-no-repeat bg-cover bg-bg-pattern xl:px-28">
      <div className="h-[500px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="images/zara-logo.png" alt="" />
          <p className="my-8 text-left text-white capitalize md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="flex items-center gap-2 px-6 py-2 font-semibold transition duration-200 bg-white rounded-sm text-Black hover:bg-orange-500 hover:text-white">
            See Collection
          </button>
        </div>
      </div>
    </div>
  )
}
export default Collections
