import React, { Component } from 'react'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import BackToMainMenu from './../Components/BackToMainMenu'
import ShopItemsWrapper from './../Components/ShopItemsWrapper'

export class Shop extends Component {
  render() {
    return (
        <div className='MenuWrapper'>

        <div className='MenuTopButtonsWrapper'>
        <BackToMainMenu/>
        <MinimizeMenuButton />
        </div>

        <UserCard ShowLvl = {true} ShowBalance = {false} IsItProfilePage = {true}/>

        <div className='Card'>
        <div className='UserBalanceWrapper'>
          <p className='UserCardText'>Баланс</p>
          <div className='UserBalance'>
            <p className='UserCardText'>542 фантики</p>
            <img className='SmallImg'src='../img/crystall.png'/>
          </div>
        </div>
        <p className='DailyTasksAbout'>Зарабатывайте помойкоены за выполнение ежедневных заданий и обменивайте их на предметы в магазине</p>
        </div>
        <p className='TitleText'>Магазин</p>
        <ShopItemsWrapper shopitems={this.props.shopitems.filter(CurrentItem => CurrentItem.ItemCategory === 'Avatar Frame')} WrapperText = "Рамки для аватара"/>
        <ShopItemsWrapper shopitems={this.props.shopitems.filter(CurrentItem => CurrentItem.ItemCategory === 'Theme')} WrapperText = "Темы"/>
        <br></br>
        </div>
    )
  }
}

export default Shop