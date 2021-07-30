import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="md:w-1024 mx-auto md:px-32">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
