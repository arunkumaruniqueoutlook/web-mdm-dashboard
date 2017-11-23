import React, { Component } from "react"
import PropTypes from 'prop-types'
import Calc100PercentMinus from '../../Utils/Calc100PercentMinus'
import IconItemList from '../IconItemList'
import EditUser from './EditUser'

class ContentPane extends Component {

    changePanel = () => {
        console.log(this.props.changeActionList)
        console.log(this.props.actionList)
        console.log(this.props.selectedIndex)
        
        this.props.changeActionList('Edit')
    }
    
    render() {
        if (this.props.selectedIndex === null) {
            return (
                <div className="contentPane" style={{ height: '100%', width: Calc100PercentMinus(this.props.itemListPaneWidth), display: 'inline-block', verticalAlign: 'top' }}>
                    <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 className="win-h1" style={{ color: 'grey' }}>No Selection</h1>
                    </div>
                </div>
            )
        } else {
            if (this.props.actionList !== null) {
                switch (this.props.actionList) {
                    
                    case "Edit":
                        return (
                            <div className="contentPane listPane" style={{ height: '100%', width: Calc100PercentMinus(this.props.itemListPaneWidth), display: 'inline-block', verticalAlign: 'top' }}>
                                <EditUser changeActionList={this.props.changeActionList}/>
                            </div>
                        )
                    default: 
                        return (
                            <div className="contentPane" style={{ width: Calc100PercentMinus(this.props.itemListPaneWidth) }}>
                                <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h1 className="win-h1" style={{ color: 'grey' }}>No Selection</h1>
                                </div>
                            </div>
                        )
                }
            } else {
                let selectedItemList = this.props.itemList.getAt(this.props.selectedIndex)
                return (
                    <div className="contentPane" style={{ height: '100%', width: Calc100PercentMinus(this.props.itemListPaneWidth), display: 'inline-block', verticalAlign: 'top' }}>
                        <div className="contentHeader">
                            <h2 className="win-h2" style={{ margin: '20.1px 0' }}> User </h2>
                            <div className="itemInfo">
                                <IconItemList backgroundUrl={selectedItemList['User.picture']} size={100} />
                                <div className="contentStatus">
                                    <div className="message">
                                        <b>
                                            {selectedItemList['User.name']}
                                        </b>
                                    </div>
                                    <span className="message">
                                        {selectedItemList['User.Profile_User.Profile.name']}
                                    </span>
                                    <span className="source">Joined {selectedItemList['User.date_creation']}</span>
                                    <br/>
                                    <span className="editIcon" onClick={this.changePanel} />
                                </div>
                            </div>
                        </div>
                        <div className="separator" />
                        <div className="contentInfo">
                            <ul>
                                <li>
                                    <span className="phoneIcon" />
                                    <div className="callContent">
                                        <a href={"tel:" + selectedItemList['User.mobile']}>Call Mobile</a>
                                        <div className="number">{selectedItemList['User.mobile']}</div>
                                    </div>
                                </li>
                                <li>
                                    <span className="phoneIcon" />
                                    <div className="callContent">
                                        <a href={"tel:" + selectedItemList['User.phone2']}>Call Work</a>
                                        <div className="number">{selectedItemList['User.phone2']}</div>
                                    </div>
                                </li>
                                <li>
                                    <span className="emailIcon" />
                                    <div className="callContent">
                                    <a href={"mailto:" + selectedItemList['User.UserEmail.email']}>Email</a>
                                    <div className="number">{selectedItemList['User.UserEmail.email']}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    }
}

ContentPane.propTypes = {
    // selectedIndex: PropTypes. ,
    itemList: PropTypes.object.isRequired,
    itemListPaneWidth: PropTypes.number.isRequired,
    actionList: PropTypes.string,
    changeActionList: PropTypes.func.isRequired
}

export default ContentPane
