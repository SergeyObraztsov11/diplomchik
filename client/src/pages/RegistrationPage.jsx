import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class RegistrationPage extends Component {
  render() {
    return (
      <div className='AuthorizationPageContent'>
        <div className = 'AuthorizationDesignCard'>
            <h1>Регистрация во Всеместа</h1>
            <p>Всеместа - это сервис, чтобы вы да леоаои и не тток вв назад карта карта</p>
            <i className = 'fi fi-sr-sun'/>
            <p style = {{marginLeft: "auto"}}>Давайте сделаем классный город вместе ура ура</p>
        </div>
        <div className = 'AuthorizationInfoWrapper'>
        <div className='AuthorizationTextareasWrapper'>
        <p>Имя</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Логин</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Электронная почта</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Пароль</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Повтор пароля</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Город</p>
        <select className='MenuDropDown' name="City" id="City">
          <option value="Dim">Димитровград</option>
          <option value="Msc">Москва</option>
          <option value="Ptrb">Санкт-Петербург</option>
          <option value="Saray">Сарай</option>
        </select>
        </div>

        <div className='AuthorizationButtonWrapper'>
            <div className='AuthorizationButton'>Создать аккаунт</div>
            <Link to = "/login"><p>Уже есть аккаунт? <u>Войти</u></p></Link>
        </div>

        </div>
      </div>
    )
  }
}

export default RegistrationPage