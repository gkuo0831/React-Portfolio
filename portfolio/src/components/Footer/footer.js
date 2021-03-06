import React from "react";
import { Grid, List, Header, Segment, Container } from "semantic-ui-react";

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "0em 0em" }}>
      <Container className="footer">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">
                  <a href="mailto:gkuo98@gmail.com">Email</a>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
            </Grid.Column>
            <Grid.Column width={7}>
              <p>Copyright © 2021 KUO.IO. All rights reserved.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
