import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header
          title= 'HIDDEN GEMS'
        />
        <Main
          title= 'main'
        />
        <Footer
          title= 'footer'
          copy= 'Copyright'
        />
      </div>
    );
  }
}

export default App;
