import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class RegistrationPage extends Component {
  render() {
    return (
      <div className='AuthorizationPageContent'>
        <div className = 'AuthorizationDesignCard'>
            <h1>Авторизация во Всеместа</h1>
            <p>Всеместа - это сервис, чтобы вы да леоаои и не тток вв назад карта карта</p>
            <i className = 'fi fi-sr-sun'/>
            <p style = {{marginLeft: "auto"}}>Давайте сделаем классный город вместе ура ура</p>
        </div>
        <div className = 'AuthorizationInfoWrapper'>
        <div className='AuthorizationTextareasWrapper'>

        <p>Электронная почта</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>

        <p>Пароль</p>
        <textarea className='MenuTextArea'>Щуковская Анастасия</textarea>
        </div>

        <div className='AuthorizationButtonWrapper'>
            <div className='AuthorizationButton'>Войти</div>
            <Link to = "/registration"><p>Еще нет аккаунта? <u>Создать</u></p></Link>
        </div>

        </div>
      </div>
    )
  }
}

export default RegistrationPage