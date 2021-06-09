import Head from "next/head";
import Header from "../components/Header";
import TitleTile from "../components/TitleTile";

export default function Home() {
  //Button links
  const links = ["home", "about", "posts"];

  return (
    <div>
      <Head>
        <title>Sid's Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Heaeder Component */}
      <Header links={links} />

      {/* Title */}
      <TitleTile
        title="Lets Code together learn together."
        subtitle=" Welcome to my blog, where I post my coding ideas, tutorials and tech
            reletade articles."
        img="/hacker.svg"
        direction="left"
      />

      {/* Direction */}
      {/* <TitleTile
        title="Lets Code together learn together."
        subtitle=" Welcome to my blog, where I post my coding ideas, tutorials and tech
                    reletade articles."
        img="/hacker.svg"
        direction="right"
      /> */}


      {/* Footer */}
    </div>
  );
}
