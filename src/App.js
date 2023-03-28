import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [

      ],
      item: [
        {
          id: 1,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        },
        {
          id: 2,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        },
        {
          id: 3,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        },
        {
          id: 4,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        },
        {
          id: 5,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        },
        {
          id: 6,
          title: 'Диван от дизайнера',
          img: 'divan.jpg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'divan',
          price: '109.90'
        } 
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.item} onAdd={this.addToOrder} />
        <Footer/>
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
