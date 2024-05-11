import React, { Component } from "react";
import LogoWrapper from "./../Components/TitleWrapper";
import MinimizeMenuButton from "./../Components/MinimizeMenuButton";
import BackToMainMenu from "./../Components/BackToMainMenu";
import { ChatWidget } from "./../widgets";

export class Chat extends Component {
  render() {
    return (
      <div className="MenuWrapper">
        <div className="Title">
          <LogoWrapper city={this.props.city} />
          <MinimizeMenuButton />
        </div>
        <BackToMainMenu />
        <div className="ChatBlock">
          <ChatWidget />
        </div>
      </div>
    );
  }
}

export default Chat;
