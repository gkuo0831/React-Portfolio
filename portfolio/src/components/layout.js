import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Container,
  Button,
  Icon,
  Grid,
  Segment,
  Image,
  List,
  Divider,
} from "semantic-ui-react";
import AboutMe from "./aboutme";

const HomepageLayout = () => (
  <Container>
    <AboutMe />

    <Segment style={{ padding: "5em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

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

    <Segment
      inverted
      vertical
      style={{ padding: "0em 0em" }}
      horizontal
      style={{ padding: "5em 0em" }}
    >
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Contact Me!" />
            <List link inverted>
              <List.Item as="a">
                <a href="https://github.com/gkuo0831">Github</a>
              </List.Item>
              <List.Item as="a">
                <a href="https://www.linkedin.com/in/gkuo98/">Linkedin</a>
              </List.Item>
              <List.Item as="a">
                <a href="mailto:gkuo98@gmail.com">Email</a>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default HomepageLayout;
