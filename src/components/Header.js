import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const showOrders = (props) => {
  return (<div>
    {props.orders.map(el => (
      <Order key={el.id} item={el}/>
    ))}
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cart0pen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cart0pen = !cart0pen)} className={`shop-cart-bitton ${cart0pen && 'active'}`}/>

            {cart0pen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                    showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presedentation'></div>
    </header>
  )
}
