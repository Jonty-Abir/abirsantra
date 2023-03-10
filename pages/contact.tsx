import Head from "next/head";
import ContactMe from "../Components/ContactMe";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
function contact() {
  return (
    <>
      <Head>
        <title>Abir Santra | ContactUs page </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/favicone.png" />
      </Head>
      <main className="w-screen h-full flex flex-col gap-y-4">
        <NavBar />
        <div className="flex flex-col justify-center mt-20 mx-4">
          <div className="flex flex-col justify-center capitalize dark:text-white">
            <div className="flex flex-col font-bold text-2xl text-green-500 items-center">
              <h2>ContactUs me</h2>
            </div>

            <ContactMe />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default contact;
