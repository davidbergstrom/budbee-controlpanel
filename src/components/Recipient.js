import React from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Text from 'components-styled/Text'
import TextField from 'material-ui/TextField'
import TextStrong from 'components-styled/TextStrong'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class Recipient extends React.Component {
  static propTypes = {
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      save: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      isEditMode: false,
      name: '',
      phoneNumber: '',
      email: '',
    }
  }

  componentWillMount() {
    this.setState({
      name: this.props.name,
      phoneNumber: this.props.phoneNumber,
      email: this.props.email,
    })
  }

  toggleEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    })
  }

  saveRecipientInfo = () => {
    this.toggleEditMode()
    this.props.save({
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    })
  }

  textFieldChanged = (e, value) => {
    switch (e.target.name) {
      case 'name':
        this.setState({ name: value });
        break;
      case 'phoneNumber':
        this.setState({ phoneNumber: value });
        break;
      case 'email':
        this.setState({ email: value });
        break;
      default:
        break;
    }
  }

  render() {
    const { name, phoneNumber, email } = this.props;

    return (
      <div>
        <TitleRow>
          <Title>Mottagare</Title>
          { !this.state.isEditMode
              ? <FlatButton label='Ändra' secondary onClick={this.toggleEditMode} />
              : <RaisedButton label='Spara' primary onClick={this.saveRecipientInfo} /> }
        </TitleRow>
        { !this.state.isEditMode ?
          <div>
            <TextStrong>{name}</TextStrong>
            <Text>{phoneNumber} <br /> {email}</Text>
          </div> :
          <div>
            <TextField
              hintText="Förnamn Efternamn"
              floatingLabelText="Namn"
              floatingLabelFixed={true}
              name="name"
              value={this.state.name}
              onChange={this.textFieldChanged}
            />
            <TextField
              hintText="T ex 0701234567"
              floatingLabelText="Telefonnummer"
              floatingLabelFixed={true}
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.textFieldChanged}
            />
            <TextField
              hintText="namn@domän.com"
              floatingLabelText="E-postadress"
              floatingLabelFixed={true}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.textFieldChanged}
            />
          </div>
        }
      </div>
    );
  }
}
