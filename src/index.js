import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

import Navbar from './components/Navbar';
import Logo from './components/Logo';

import background from './images/background.png';

class Home extends React.Component {
    render() {
      return (
        <div>
            <div>
                <Logo />
                <Navbar />
            </div>
            <div class="base">
                <img src={background} alt="Background" class="bg-img" />
            </div>
        </div>
      );
    }
  }

ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
  