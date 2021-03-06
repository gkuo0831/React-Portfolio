import React from "react";
import { Grid, Header, Button, List } from "semantic-ui-react";
import ETH from "../assets/ETH.png";
import PasswordGenerator from "../assets/PasswordGenerator.png";
import Kanban from "../assets/Kanban.png";
import Fitness from "../assets/Fitness.png";
import Employee from "../assets/Employee.png";

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Header as="h4">Escape the House</Header>
        <List>
          <List.Item as="a">
            <a href="https://github.com/jamesosull16/project_fun">
              Project Repo
            </a>
          </List.Item>
          <List.Item as="a">
            <a href="https://jamesosull16.github.io/project_fun/">View Here</a>
          </List.Item>
        </List>
        <img src={ETH} alt="eth" className="eth" />
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Header as="h4">Password Generator</Header>
        <List>
          <List.Item as="a">
            <a href="https://github.com/gkuo0831/Passwordgenerator">
              Project Repo
            </a>
          </List.Item>
          <List.Item as="a">
            <a href="https://gkuo0831.github.io/Passwordgenerator/">
              View Here
            </a>
          </List.Item>
        </List>
        <img src={PasswordGenerator} alt="eth" className="eth" />
      </Grid.Column>

      <Grid.Column textAlign="center">
        <Header as="h4">Kanban Coster</Header>
        <List>
          <List.Item as="a">
            <a href="https://github.com/jericfey/ProjectApp">Project Repo</a>
          </List.Item>
          <List.Item as="a">
            <a href="https://vast-shore-03076.herokuapp.com/home">View Here</a>
          </List.Item>
        </List>
        <img src={Kanban} alt="eth" className="eth" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column textAlign="center">
        <Header as="h4">Fitness Tracker</Header>
        <List>
          <List.Item as="a">
            <a href="https://github.com/gkuo0831/Fitness-Tracker">
              Project Repo
            </a>
          </List.Item>
          <List.Item as="a">
            <a
              href="
                https://gym-app34.herokuapp.com https://github.com/gkuo0831/Fitness-Tracker"
            >
              View Here
            </a>
          </List.Item>
        </List>
        <img src={Fitness} alt="eth" className="eth" />
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Header as="h4">Employee Summary</Header>
        <List>
          <List.Item as="a">
            <a href="https://github.com/gkuo0831/Employee-Summary">
              Project Repo
            </a>
          </List.Item>
          <List.Item as="a">
            <a
              href="
              https://drive.google.com/file/d/1pX_TdXf2tD5j0R7UXkJ-V9ZgEwEowjGL/view"
            >
              View Recording
            </a>
          </List.Item>
        </List>
        <img src={Employee} alt="eth" className="eth" />
      </Grid.Column>
      <Grid.Column textAlign="center">
        <p>Project 6 Coming Soon! It will be a wellness app!</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleDividedNumber;
