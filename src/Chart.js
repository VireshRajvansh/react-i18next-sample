import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import moment from 'moment';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class Chart extends Component {
   constructor(props) {
   super(props);
   this.state = {
          name: "ankit",
          count: 100,
          date:  new Date()
   }

   } 
  render() {
     
    
    const { name, count, date } = this.state;  
    const { t, lng } = this.props;
   

    return (
      <div >          
        <h2>{t('Welcome to Chart')}</h2>
        <p>{t('test', { date :new Intl.DateTimeFormat(lng, options).format(date) })}</p>
        
        <Trans i18nKey="userMessagesUnread">
            Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message.
            <a to="/msgs">Go to messages</a>.
        </Trans>
        {/*<Trans i18nKey="copyright" >
           {{date}}
        </Trans>*/}
             
      </div>
    );
  }
}

export default translate('translations')(Chart);
