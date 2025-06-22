import Header from "./components/layouts/Header";
import Main from "./components/home/Main";
import Footer from "./components/layouts/Footer";
import Footer2 from "./components/layouts/Footer2";
import Footer3 from "./components/layouts/Footer3";
import Footer4 from "./components/layouts/Footer4";

function Home() {
  const fullName = "mahdi ram";

  return (
    <>
      <p>built by {fullName}</p>
      <hr />
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer fullName={fullName} />
      <Footer2 />
      <Footer3 />
      <Footer4 />
    </>
  );
}

export default Home;
