import Head from "next/head";
import Footer from "@components/Footer/Footer";
import Game from "@components/Game/Game";
import About from "@components/About/About";
import Intro from "@components/Intro/Intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Higher or Lower Weeb Edition</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ichiban" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ichiban.netlify.app/" />
        <meta
          property="og:image"
          content="https://ichiban.netlify.app/imgs/logo.png"
        />
        <meta
          property="og:description"
          content="An anime popularity game!"
        />
        <meta name="Description" content="An anime popularity game!" />
        <meta lang="en" />
      </Head>
      <Intro />
      <Game />
      <About />
      <Footer />
    </>
  );
}
