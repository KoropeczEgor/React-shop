import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
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
              </div>
            )}
        </div>
        <div className='presedentation'></div>
    </header>
  )
}
