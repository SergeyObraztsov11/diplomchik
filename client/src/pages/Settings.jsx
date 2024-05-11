import React, { Component } from 'react'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import { Link } from "react-router-dom";

export class Settings extends Component {
  render() {
    return (
      <div className='MenuWrapper'>

      <div className='MenuTopButtonsWrapper'>
      <Link style = {{width: "fit-content"}} to = "/profile">
        <div className='SecondarySmallButton'>
            <i className = 'fi-sr-angle-left'/>
            <p>Обратно в профиль</p>
        </div></Link>
        <MinimizeMenuButton />
        </div>

      <p className='TitleText'>Настройки</p>
      <p>Основная информация</p>

      <div className='Card'>
        <p>Имя</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>
        <p>Электронная почта</p>
        <textarea className='MenuTextArea'>pomoechki@moi.com</textarea>
        <p>Город</p>
        <select className='MenuDropDown' name="City" id="City">
          <option value="Dim">Димитровград</option>
          <option value="Msc">Москва</option>
          <option value="Ptrb">Санкт-Петербург</option>
          <option value="Saray">Сарай</option>
        </select>
      </div>

      <p>Фотография профиля</p>
      <div className='UploadImageWrapper'>
        <img className = 'UserCardImage' src = "../img/User1Avatar.png"/>
        <p>Загрузить фото</p>
      </div>

      <p>Безопасность</p>
      <div className='Card'>
        <p>Пароль</p>
        <textarea className='MenuTextArea'>•••••••••••••••••••</textarea>
        <Link to = "/"><div className='MenuButton'>
          <i className = 'fi fi-sr-lock'/>
          <p>Сменить пароль</p>
          </div></Link>
      </div>
      <div className='Card'>
        <p>Двухэтапная аутентификация</p>
        <Link to = "/"><div className='MainMenuButton'>
          <i className = 'fi-sr-data-transfer'/>
          <p>Подключить</p>
          </div></Link>
      </div>
      <div className='MainMenuButtonsWrapper'>
              <Link to = "/favourite"><div className='MenuButton'>
              <i className = 'fi fi-sr-letter-case'/>
              <p>Язык: Русский</p>
              </div></Link>

              <Link to = "/favourite"><div className='MenuButton'>
              <i className = 'fi fi-sr-info'/>
              <p>Справка</p>
              </div></Link>

              <Link to = "/favourite"><div className='MenuButton'>
              <i className = 'fi fi-sr-diamond'/>
              <p>Оценить приложение</p>
              </div></Link>

              <Link to = "/mapeditmenu"><div className='MenuButton'>
              <i className = 'fi fi-sr-undo-alt'/>
              <p>Выйти из аккаунта</p>
              </div></Link>
            </div>
      <br></br>
      </div>
    )
  }
}

export default Settings