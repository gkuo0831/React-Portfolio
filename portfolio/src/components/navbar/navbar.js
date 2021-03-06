import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="projects"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
