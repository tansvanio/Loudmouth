import React from 'react'
import {
  Button,
  Form,
  Glyphicon,
  FormControl,
  ControlLabel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

class InvitationsComponent extends React.Component {
  constructor(props)
  {
    super();
    this.state = 
    {
        invites: []
    }
    this.getInvites = this.getInvites.bind(this);
  }
  getInvites()
  {
      console.log("Getting invites.");
      var data =
      {
              "token": localStorage.getItem("token"),
      };
      var request = new XMLHttpRequest();
      request.open('POST', 'http://vps301278.ovh.net:3561/getInvites');
      request.setRequestHeader("Content-type", "application/json");
      request.onreadystatechange = () => {
          if (request.readyState !== 4) {
              return;
          }
          if (request.status === 200) {
              var res = JSON.parse(request.responseText);
              this.setState({invites:res});
              console.log(this.state.invites);
          } else {
              console.warn('error');
          }
      };
      request.send(JSON.stringify(data));
  }
  componentDidMount() {
      this.getInvites();
  }
  drawInvites() 
  {
    var listInvites = this.state.invites.map((invite) =>
        <ListGroupItem header={invite.chat_name} key={invite.id}> by {invite.user_name}</ListGroupItem>);
    return (<ListGroup>{listInvites}</ListGroup>);
 }
  render() {
    return (
      <div>
        <h1>Invitations</h1>
        <ListGroup>
            {this.drawInvites()}  
        </ListGroup>
      </div>
    )
  }
}
export default InvitationsComponent
