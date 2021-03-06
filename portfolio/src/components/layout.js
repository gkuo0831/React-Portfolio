import React from "react";
import { Header, Container, Button, Segment, Divider } from "semantic-ui-react";
import AboutMe from "./aboutme";
import Modal from "./modal";
const HomepageLayout = () => (
  <Container>
    <AboutMe />
    <Segment style={{ padding: "3em 3em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
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
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
  </Container>
);

export default HomepageLayout;
