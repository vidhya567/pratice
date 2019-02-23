import React from 'react';
import Email from './Email';

export default class EmailList extends React.Component {
    constructor (props) {
        super(props);
        const { emailListData } = props;
        const selected = {};
        for (let i = 0; i < emailListData.length; i++) {
            selected[i] = false;
        }
        this.state = {
            selected : selected,
            selectedId : -1,
            multiSelectMode : false
        }
        this.toggleEmailSelection = this.toggleEmailSelection.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentWillMount () {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }
    
    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown (event) {
        const shiftKey = event.shiftKey;
        if (shiftKey) {
            this.setState({
                multiSelectMode: true
            })
        }
    }

    handleKeyUp (event) {
        const key = event.key;
        if (key === 'Shift') {
            this.setState({
                multiSelectMode: false
            })
        }
    }

    toggleEmailSelection (id) {
        const { multiSelectMode, selected, selectedId } = this.state;
        const newSelected = Object.assign({}, selected);
        if (!selected[id] && multiSelectMode) {
            const minId = Math.min(selectedId, id);
            const maxId = Math.max(selectedId, id);
            for (let i = minId; i <= maxId; i++) {
                newSelected[i] = true; 
            }
        } else {
            newSelected[id] = !selected[id];
        }
        this.setState({
            selected: newSelected,
            selectedId: id
        });
    }

    getEmailList () {
        const { selected } = this.state;
        const { emailListData } = this.props;
        return emailListData.map( (emailData, index) => <Email {...emailData} key={index} id={index} handleSelect={this.toggleEmailSelection} selected={selected[index]} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} /> )
    }

    render () {
        return (
            <div className='listContainer'>
                {this.getEmailList()}
            </div>
        );
    }
}