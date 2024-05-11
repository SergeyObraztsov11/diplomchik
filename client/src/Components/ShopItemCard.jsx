import React, { Component } from 'react'

export class ShopItemCard extends Component {
  render() {

    let IconBackColor = this.props.item.ItemBackgroundColor;

    return (
      <div className = 'ShopItemCard'>
            {this.props.item.ItemCategory === 'Avatar Frame' &&
            <div className='StopItemsImageWrapper'>
                <img className='ShopItemAvatarFrame' src = {"../img/" + this.props.item.ItemImage}/>
                <img className = 'ShopItemUserImage' src = "../img/User1Avatar.png"/>
            </div>
            }
            {this.props.item.ItemCategory !== 'Avatar Frame' && 
            <div className='StopItemsImageWrapper' style = {{backgroundColor: IconBackColor, border: "1px rgba(0, 0, 0, 0.1) solid"}}>
                <img className = 'ShopItemImage' src = {"../img/" + this.props.item.ItemImage}/>
            </div>
            }
            <p style ={{marginBottom: "auto"}}>{this.props.item.ItemName}</p>
            <div className='UserBalance'>
            <p className='UserCardText'>{this.props.item.ItemPrice}</p>
            <img className='SmallImg'src='../img/crystall.png'/>
          </div>
      </div>
    )
  }
}

export default ShopItemCard