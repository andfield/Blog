function TitleTile({ title, subtitle, img, margin, direction }) {
  return (
    <div
      className={`flex flex-grow items-center
    justify-center mx-5
    text-gray-900 font-serif
    font-medium ${margin}`}
    >
      {direction == "left" ? (
        <>
          <div className="flex flex-col items-center">
            <h1
              className="text-left text-5xl p-6 
                         font-bold max-w-md md:px-0
                         md:text-7xl md:max-w-lg"
            >
              {title}
            </h1>
            <span
              className="text-left px-6 text-1xl 
                        max-w-md md:px-0 md:text-2xl 
                        md:max-w-lg"
            >
              {subtitle}
            </span>
          </div>
          <div>
            <img
              src={img}
              // "/hacker.svg"
              className="max-w-full sm:mt-10 
                       sm:max-w-md md:ml-5"
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <img
              src={img}
              // "/hacker.svg"
              className="max-w-full sm:mt-10 
                       sm:max-w-md md:ml-5"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <h1
              className="text-left text-5xl p-6 
                         font-bold max-w-md md:px-0
                         md:text-7xl md:max-w-lg"
            >
              {title}
            </h1>
            <span
              className="text-left px-6 text-1xl 
                        max-w-md md:px-0 md:text-2xl 
                        md:max-w-lg"
            >
              {subtitle}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default TitleTile;
