import React from "react";
import {
  Grid,
  Image,
  Header,
  Button,
  List,
  Container,
} from "semantic-ui-react";
import ETH from "../assets/ETH.png";
import PasswordGenerator from "../assets/PasswordGenerator.png";

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
        <img src={ETH} alt="eth" className="eth" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column textAlign="center">
        <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <p>Project 5 Coming Soon! It will be a book search!</p>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <p>Project 6 Coming Soon! It will be a wellness app!</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleDividedNumber;
