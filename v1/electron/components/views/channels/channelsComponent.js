import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem
} from 'react-bootstrap'

import Style from '../../styles/login.module.css';

import MyChannelsComponent from './myChannelsComponent.js';
import InvitationsComponent from './invitationsComponent.js';
import CreateChannelComponent from './createChannelComponent.js';

class ExampleComponent extends React.Component {
    constructor(props)
    {
        super();
        this.state = {
            currMenu: "MyChannels",
            activeKey: 1
        };
        this.showMyChannels = this.showMyChannels.bind(this);
        this.showInvitations = this.showInvitations.bind(this);
        this.logout = this.logout.bind(this);
        this.createChannel = this.createChannel.bind(this);
    }
    logout() {
        this.props.loadComponent(1);
    }
    createChannel() {
        this.setState({currMenu: "CreateChannel", activeKey: 4});
    }
    showMyChannels(event) {
        this.setState({currMenu: "MyChannels", activeKey: 1});
    }
    showInvitations(event) {
        this.setState({currMenu: "Invitations", activeKey: 2});
    }
    render() {
        let choosenMenu;
        if(this.state.currMenu == "MyChannels")
        {
            choosenMenu = (
            <MyChannelsComponent loadChat = {this.props.loadChat} serverURL = {this.props.serverURL}></MyChannelsComponent>
            )
        } else if (this.state.currMenu == "Invitations") {
            choosenMenu = (
            <InvitationsComponent serverURL = {this.props.serverURL}></InvitationsComponent>
            )
        }
        else if (this.state.currMenu == "CreateChannel") {
            choosenMenu = (
            <CreateChannelComponent showMyChannels = {this.showMyChannels} serverURL = {this.props.serverURL}></CreateChannelComponent>
            )
        }
        return (
            <div>
                <Col md={3}></Col>
                <Col md={6}>
                    <div className = {Style.titleBox}>
                            <p> LOUDMOUTH </p>
                    </div>
                    <Nav bsStyle="pills" activeKey={this.state.activeKey}>
                        <NavItem eventKey={1} value="true" onClick={this.showMyChannels}>My Channels</NavItem>
                        <NavItem eventKey={2} value="false" onClick={this.showInvitations} >Invitations</NavItem>
                        <NavItem eventKey={4} onClick={this.createChannel}>New Channel</NavItem>
                        <NavItem eventKey={3} onClick={this.logout}>Logout</NavItem>
                    </Nav>
                    {choosenMenu}
                </Col>
                <Col md={3}></Col>
            </div>
        )
    }
}
export default ExampleComponent
