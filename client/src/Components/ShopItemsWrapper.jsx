import React, { Component } from 'react'
import ShopItemCard from './ShopItemCard'

export class ShopItemsWrapper extends Component {
  render() {
    return (
        <div>
        <p style = {{marginBottom: "10px"}}>{this.props.WrapperText}</p>
        <div className='ShopItemsWrapper'>
        {this.props.shopitems?.map(CurrentItem => (
        <ShopItemCard key = {CurrentItem.ItemId} item = {CurrentItem} />
        ))}
        </div>
      </div>
    )
  }
}

export default ShopItemsWrapper