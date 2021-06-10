import { useState, useEffect } from "react";

function ContentTile({
  margin,
  firstDivColor,
  secondDivColor,
  direction,
  title,
  subtitle,
}) {
  //States
  const [messageSubject, setMessageSubj] = useState("");
  const [messageCategory, setMessageCat] = useState("");

  useEffect(() => {
    console.log(messageSubject);
  }, [messageSubject]);

  return (
    // Main Flex Box
    <div
      className={`${margin}  
                  grid
                  justify-self-center
                  grid-cols-12
                  grid-rows-6
                  mx-5 mb-5
                  h-72
                 text-gray-900 font-serif
                  md:h-96
                  font-medium 
                  relative`}
    >
      <div
        className={`bg-white
                    rounded-xl
                    shadow-xl
                    ${
                      direction == "left"
                        ? "col-start-1 col-span-5 sm:col-start-2 row-start-1 row-end-6 ml-3"
                        : "col-start-7 col-span-full sm:col-start-7 row-start-1 row-end-6 mr-3"
                    }
                    flex flex-col
                    z-10
                    `}
      >
        <h1
          className="text-left text-2xl ml-3 font-bold
                       sm:text-5xl
                      "
        >
          {title}
        </h1>
        <span
          className="text-left ml-3 mt-6 text-sm
                      md:text-2xl
                      sm:mt-0
                      md:mt-6
                      
          "
        >
          {subtitle}
        </span>
      </div>
      <div
        className={`bg-gradient-to-tr
                      from-green-400
                      ${
                        direction == "left"
                          ? `col-start-1 col-span-full z-1 
                          row-start-3 row-span-full`
                          : `col-start-1 col-span-full z-1
                          row-start-3 row-span-full
                        `
                      }

                      rounded-xl
                      shadow-xl
                      transform
                      -rotate-2
                      
                      `}
      ></div>
      <div className="col-start-1 col-span-6 row-start-4 row-span-5 z-10">
        <form
          className="rounded px-2 pt-0 pb-2 mb-2 md:px-4 lg:px-6
        "
        >
          <input
            className="shadow appearance-none
                    border rounded-xl w-full 
                    py-1 px-2 md:py-4
                  text-green-900 
                    leading-tight focus:outline-none 
                    focus:shadow-outline
                    focus:border-green-300
                    focus:text-green-500
                      focus:bg-transparent
                    "
            id="subject"
            type="text"
            placeholder="Suggestions.."
            value={messageSubject}
            onChange={(e) => setMessageSubj(e.target.value)}
          />

          <div class="relative">
            <select
              class="block w-full bg-white
                  text-gray-400 
                    py-1 px-2 pr-8
                    md:py-4 
                    mt-2
                    sm:mt-5 
                    rounded-xl 
                    leading-tight 
                    focus:outline-none
                  focus:bg-green-400
                  focus:text-green-600"
              id="grid-state"
            >
              <option>Front End</option>
              <option>Back End</option>
              <option>Other Tech</option>
            </select>
          </div>
          <button
            type="button"
            className="mx-1 mt-3 
                       border border-white  
                       rounded-xl h-8 w-full text-base
                       md:mt-4 md:h-10
                       lg:mx-36 lg:mt-5 lg:w-40
                       xl:mx-44
                       font-semibold text-white
                       shadow-xl 
                       drop-shadow-sm hover:text-green-500
                     hover:bg-white"
          >
            join for free
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContentTile;
