import Header from "./components/layouts/Header";
import Main from "./components/home/Main";
import Footer1 from "./components/layouts/Footer1";
import Footer2 from "./components/layouts/Footer2";
import Footer3 from "./components/layouts/Footer3";
import Footer4 from "./components/layouts/Footer4";
import Footer5 from "./components/layouts/Footer5";
import Footer6 from "./components/layouts/Footer6";
import Footer7 from "./components/layouts/Footer7";
import Footer8 from "./components/layouts/Footer8";

function Home() {
  const fullName = "mahdi ram";

  return (
    <>
      <p>built by {fullName}</p>
      <hr />
      <Header />
      <Main />
      <Footer1 name={fullName} />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <Footer5 />
      <Footer6 />
      <Footer7 />
      <Footer8 />
    </>
  );
}

export default Home;
