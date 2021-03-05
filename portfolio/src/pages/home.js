import React from "react";
import { Header, Container, Button, Icon, Grid } from "semantic-ui-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";

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
    </div>
  );
}

export default Home;
