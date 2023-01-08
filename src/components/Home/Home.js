import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Motors from "../Motors/Motors";
import Prize from "../Prize/Prize";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Prize></Prize>
      <Motors></Motors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
