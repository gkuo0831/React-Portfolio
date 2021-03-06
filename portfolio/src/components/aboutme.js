import React from "react";
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
import Avatar from "../assets/Avatar.jpeg";
const AboutMe = () => (
  <Container>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Hello!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              My name is Grace Kuo, and I am a Denver-based front-end web
              developer. If I am not coding and trying to think of new and
              interesting designs, I am trying to learn more about coding
              languages to improve my work.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              My skills...
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              range from design, to HTML + CSS + javascript. Though I have spent
              a lot of time learing full stack web development, I enjoy using
              frontend frameworks to surpass the expectations of a purely
              functional webpage; and create unique and beautiful websites.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <img
              src={Avatar}
              alt="avatar"
              className="computerimg"
              style={{ height: "100%" }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header>Check out my repo below:</Header>
            <Button link inverted>
              <List.Item as="a">
                <a href="https://github.com/gkuo0831">Github</a>
              </List.Item>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default AboutMe;
