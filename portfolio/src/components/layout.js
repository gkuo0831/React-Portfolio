import React from "react";
import { Header, Container, Button, Segment, Divider } from "semantic-ui-react";
import AboutMe from "./aboutme";
import Modal from "./modal";
import Projects from "./project";
const HomepageLayout = () => (
  <Container>
    <AboutMe />
    <Segment style={{ padding: "3em 0em" }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "5em 0em", textTransform: "uppercase" }}
        >
          <a href="#" className="projectstitle">
            Changing Course is Never Easy!
          </a>
        </Divider>

        <p style={{ fontSize: "1.33em" }}>
          I was not always interested in web development. During and after I
          graduated from CU Boulder I held many jobs while trying to learn how
          to code. Check out my resume below:
        </p>
        <Modal />
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "5em 0em", textTransform: "uppercase" }}
        >
          <a href="#" className="projectstitle">
            My Projects
          </a>
        </Divider>

        <Projects />
      </Container>
    </Segment>
  </Container>
);

export default HomepageLayout;
