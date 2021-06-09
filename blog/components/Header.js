function Header() {
  return (
    <div className="border bottom-1">
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
        <h1 className="text-3xl font-extrabold sm: mb-4 cursor-pointer">
          Sid's Blog
        </h1>

        {/* Button Div */}
        <div className="flex flex-grow justify-evenly items-center max-w-sm">

            <a className="text-base leading-6 font-medium hover:text-green-500 transition-colors duration-200 mx-5 sm:mx-auto">home</a>
            <a className="text-base leading-6 font-medium hover:text-green-500 transition-colors duration-200 mx-5 sm:mx-auto">about</a>
            <a className="text-base leading-6 font-medium hover:text-green-500 transition-colors duration-200 mx-5 sm:mx-auto">posts</a>
            
            <button type="button" className="mx-auto border border-green-400 rounded-xl h-8 w-32 text-sm font-medium text-center">join for free</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
