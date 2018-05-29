import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import logo from './logo.svg';
import Chart from './Chart';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        lng: ''
    }
  }

  componentWillMount(){
      this.setState({
          lng: 'en'
      })

  }
  render() {
    const { lng } = this.state;
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      this.setState({
            lng
      })
    }
     
    console.log(document.location.hostname); 
    let url = window.location.origin + '?backend=locize';

    if (document.location.href.indexOf('https://') === 0 && document.location.hostname.indexOf('hashbase.io') > 0) {
      url = window.location.origin + '?backend=xhr';
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{t('Welcome to React')}</h2>
          <button onClick={() => changeLanguage('de')}>Germen (de)</button>
          <button onClick={() => changeLanguage('en')}>English (en)</button>
          <button onClick={() => changeLanguage('hi')}>Hindi (hi)</button>
        </div>
        <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div style={{margin: 10}}><a href={url} style={{ textDecoration: 'none' }}>{t('advice', { url })}</a></div>        
         <Chart lng={lng}/>       
      </div>
    );
  }
}

export default translate('translations')(App);
