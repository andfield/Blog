import Head from "next/head";
import Header from "../components/Header";
import Tile from "../components/Tile";

export default function Home() {
  //Button links
  const links = ["home", "about", "posts"];

  return (
    <div
      className="space-y-20 
                    sm:space-y-10
                    md:space-y-15
                    lg:space-y-20
                    overflow-hidden "
    >
      <Head>
        <title>Sid's Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* header */}
      <header
        className="relative z-10 
                        max-w-screen-lg
                        xl:max-w-screen-xl
                        mx-auto"
      >
        {/* Heaeder Component */}
        <Header links={links} />

        {/* Content */}

        {/* Title */}
        <Tile
          type="title"
          title="Lets Code together learn together."
          subtitle=" Welcome to my blog, where I post my coding ideas, tutorials and tech
      reletade articles."
          img="/hacker.svg"
          direction="left"
        />

        {/* Featured Topics */}
        <Tile
          type="content"
          margin="mt-10 md:mt-20"
          title="I have learnt that I still have a lot to learn."
          subtitle="Help me get better at coding by subbmitting your tech suggestions and questions."
          firstDivColor="bg-gray-100"
          secondDivColor="bg-gradient-to-tr from-green-400 to-blue-500"
          direction="right"
        />
      </header>

      {/* Footer */}
    </div>
  );
}
