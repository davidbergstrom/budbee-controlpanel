import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class AdditionalInfo extends React.Component {
  static propTypes = {
      outsideDoorOk: PropTypes.bool.isRequired,
      signatureRequired: PropTypes.bool.isRequired,
      idCheckRequired: PropTypes.bool.isRequired,
      recipientMustMatch: PropTypes.bool.isRequired,
      save: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      outsideDoorOk: false,
      signatureRequired: false,
      idCheckRequired: false,
      recipientMustMatch: false
    }
  }

  componentWillMount() {
    this.setState({
      outsideDoorOk: this.props.outsideDoorOk,
      signatureRequired: this.props.signatureRequired,
      idCheckRequired: this.props.idCheckRequired,
      recipientMustMatch: this.props.recipientMustMatch
    })
  }

  toggleEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    })
  }

  saveAdditionalInfo = () => {
    this.toggleEditMode();
    this.props.save({
      outsideDoorOk: this.state.outsideDoorOk,
      signatureRequired: this.state.signatureRequired,
      idCheckRequired: this.state.idCheckRequired,
      recipientMustMatch: this.state.recipientMustMatch
    })
  }

  handleInputChange = (e, value) => {
    switch (e.target.name) {
      case 'outsideDoorOk':
        this.setState({ outsideDoorOk: value });
        break;
      case 'signatureRequired':
        this.setState({ signatureRequired: value });
        break;
      case 'idCheckRequired':
        this.setState({ idCheckRequired: value });
        break;
      case 'recipientMustMatch':
        this.setState({ recipientMustMatch: value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <TitleRow>
          <Title>Övrig information</Title>
          { !this.state.isEditMode
              ? <FlatButton label='Ändra' secondary onClick={this.toggleEditMode} />
              : <RaisedButton label='Spara' primary onClick={this.saveAdditionalInfo} /> }
        </TitleRow>
        <Checkbox
          label="Får lämnas utanför dörr"
          name="outsideDoorOk"
          checked={this.state.outsideDoorOk}
          disabled={!this.state.isEditMode}
          onCheck={this.handleInputChange} />
        <Checkbox
          label="Signatur krävs"
          name="signatureRequired"
          checked={this.state.signatureRequired}
          disabled={!this.state.isEditMode}
          onCheck={this.handleInputChange} />
        <Checkbox
          label="ID-kontroll krävs"
          name="idCheckRequired"
          checked={this.state.idCheckRequired}
          disabled={!this.state.isEditMode}
          onCheck={this.handleInputChange} />
        <Checkbox
          label="Mottagare måste matcha angivet mottagarnamn"
          name="recipientMustMatch"
          checked={this.state.recipientMustMatch}
          disabled={!this.state.isEditMode}
          onCheck={this.handleInputChange} />
      </div>
    );
  }
}
