import Header from "./components/layout/Header";
import Main from "./components/home/Main";
import Footer from "./components/layout/Footer";

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
    </>
  );
}

export default Home;
