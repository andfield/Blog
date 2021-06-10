function Header({ links }) {
  return (
    <div className="border bottom-1">
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
        <h1 className="text-3xl mb-4 cursor-pointer font-serif font-extrabold text-gray-800">
          Sid's Blog
        </h1>

        {/* Button Div */}
        <div className="flex flex-grow justify-evenly items-center max-w-sm">
          {links.map((link, index) => (
            <a
              className="text-base leading-6 font-semibold
                       hover:text-green-500 transition-colors
                        duration-200 mx-5 sm:mx-auto transition 
                        transform hover:scale-110 
                        motion-reduce:transition-none 
                        motion-reduce:transform-none ...
                        cursor-pointer
                        font-serif
                        text-gray-700
                        "
              key={index}
            >
              {link}
            </a>
          ))}

          <button
            type="button"
            className="mx-auto border border-green-500 rounded-xl h-8 w-32 text-base leading-6 font-medium text-green-500 drop-shadow-sm hover:text-white hover:bg-green-500"
          >
            join for free
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
