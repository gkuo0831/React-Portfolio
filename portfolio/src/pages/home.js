import React from "react";
import { Header, Container, Segment, Image } from "semantic-ui-react";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header className="title" size="huge" textAlign="center">
        Hello there, I'm Grace!{" "}
      </Header>
      <Container textAlign="center">
        A full stack coding bootcamp graduate, passionate about.
      </Container>
    </div>
  );
}

export default Home;
