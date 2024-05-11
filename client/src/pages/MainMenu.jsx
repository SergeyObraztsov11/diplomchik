import { Component } from "react";
import LogoWrapper from "./../Components/TitleWrapper";
import MinimizeMenuButton from "./../Components/MinimizeMenuButton";
import Search from "./../Components/Search";
import UserCard from "./../Components/UserCard";
import PlacesWrapper from "./../Components/PlacesWrapper";
import { Link } from "react-router-dom";

export class NoPage extends Component {
  render() {
    return (
      <div className="MenuWrapper">
        <div className="Title">
          <LogoWrapper city={this.props.city} />
          <MinimizeMenuButton />
        </div>
        <Search />
        <PlacesWrapper
          places={this.props.places}
          WrapperText="Популярные места"
          WrapperButtonEnabled={true}
        />

        <div className="MainMenuButtonsWrapper">
          <Link to="/favourite">
            <div className="MenuButton">
              <i className="fi fi-sr-heart" />
              <p>Избранное</p>
            </div>
          </Link>

          <Link to="/favourite">
            <div className="MenuButton">
              <i className="fi fi-sr-star" />
              <p>Ваши впечатления</p>
            </div>
          </Link>

          <Link to="/favourite">
            <div className="MenuButton">
              <i className="fi fi-sr-road" />
              <p>Маршруты</p>
            </div>
          </Link>

          <Link to="/mapeditmenu">
            <div className="MenuButton">
              <i className="fi fi-sr-edit" />
              <p>Редактировать карту</p>
            </div>
          </Link>

          <div className="MainMenuSmallButtonsWrapper">
            <Link to="/favourite">
              <div className="MenuButton">
                <i className="fi fi-sr-info" />
                <p>Справка</p>
              </div>
            </Link>

            <Link to="/favourite">
              <div className="MenuButton">
                <i className="fi fi-sr-letter-case" />
                <p>Язык</p>
              </div>
            </Link>

            <Link to="/favourite">
              <div className="MenuButton">
                <i className="fi fi-sr-print" />
                <p>Печать</p>
              </div>
            </Link>
          </div>
          <UserCard
            ShowLvl={false}
            ShowBalance={false}
            IsItProfilePage={false}
          />
        </div>
      </div>
    );
  }
}

export default NoPage;
