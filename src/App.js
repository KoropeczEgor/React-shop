import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.item} />
        <Footer/>
      </div>
    );
  }
}

export default App;
