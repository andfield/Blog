import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sid's Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Heaeder Component */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-left text-5xl p-6 font-bold max-w-md md:px-0 md:text-7xl md:max-w-lg">
            Lets Code together learn together.
          </h1>
          <span className="text-left px-6 text-1xl max-w-md md:px-0 md:text-2xl md:max-w-lg">
            Welcome to my blog, where I post my coding ideas, tutorials and tech
            reletade articles.
          </span>
        </div>
        <div className="">
          <img
            src="/hacker.svg"
            className="max-w-full sm:mt-10 sm:max-w-md md:ml-5"
          />
        </div>
      </div>

      {/* Articles / posts */}
      <div>
        <h1></h1>
      </div>

      {/* Footer */}
    </div>
  );
}
