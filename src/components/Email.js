import React from 'react';

export default class Email extends React.Component {

    render () {
        const { sender, subject, selected, handleSelect, id, handleKeyDown,  handleKeyUp } = this.props;
        return (<div className='emailContainer' tabIndex='0' onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            <div className='sender'>
                {sender}
            </div>
            <div className='subject'>
                {subject}
            </div>
            <div className='checkBox'>
                <input type='checkbox'  checked={selected} onChange={ () => handleSelect(id)} />
            </div>
        </div>)
    }
}