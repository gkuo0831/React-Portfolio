import React from "react";
import { Header, Container, Button, Icon, Grid } from "semantic-ui-react";
import Navbar from "../components/navbar";

import Layout from "../components/layout";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Container text>
        <Header as="h1" textAlign="center" content="KUO.IO" />
        <Header
          as="h2"
          textAlign="center"
          content="A full stack coding bootcamp graduate, ready to create beautiful and
        immersive web designs."
        />
      </Container>
      <Layout />
      <Footer />
    </div>
  );
}

export default Home;
