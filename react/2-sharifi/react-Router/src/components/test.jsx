import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>صفحه اصلی</h2>;
}

function About() {
  return <h2>درباره ما</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">خانه</Link> |<Link to="/about">درباره ما</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
