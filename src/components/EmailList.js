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
            selected: selected,
        }
    }

    toggleEmailSelection (id) {
        const selected = Object.assign({}, this.state.selected);
        selected[id] = !this.state.selected[id];
        this.setState({
            selected: selected
        })
    }

    addIds () {
        const { emailListData } = props;
        for (let i = 0; i < emailData.length; i++) {
            emailListData.id = i;
        }
    }

    addSelectedData () {
        const { emailListData } = props;
        for (let i = 0; i < emailData.length; i++) {
            emailListData.id = i;
        }
    }

    prepareData () {
        
        
    }

    getEmailList () {
        return emailDataList.map( (emailData) => <Email {...emailData}/> )
    }

    render () {
        return (
            <div className='listContainer'>
                {this.getEmailList()}
            </div>
        );
    }
}