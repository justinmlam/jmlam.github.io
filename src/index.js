import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Intro from './components/Intro';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if(window.scrollY < 300) {
        this.setState({scrolled: false});
      } else {
        this.setState({scrolled: true});
      }
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
      return (
        <div>
            <div className="logo-container">
                <Logo />
            </div>
            <div className={this.state.scrolled ? "sticky" : ""}>
                <Navbar />
            </div>
            <div class="base">
                <Intro />
            </div>
        </div>
      );
    }
  }

ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
  