import React from 'react';

export default class Email extends React.Component {

    render () {
        const { sender, subject, selected, handleSelect, id } = this.props;
        return (<div className='emailContainer'>
            <div className='sender'>
                {sender}
            </div>
            <div className='subject'>
                {subject}
            </div>
            <div className='checkBox'>
                <input type='checkbox' checked={selected} onClick={ () => handleSelect(id)}/>
            </div>
        </div>)
    }
}