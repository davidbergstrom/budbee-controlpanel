import React from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Text from 'components-styled/Text'
import TextField from 'material-ui/TextField'
import TextLabel from 'components-styled/TextLabel'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class DeliveryAddress extends React.Component {
  static propTypes = {
      street: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      doorCode: PropTypes.string,
      floor: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      street: '',
      postalCode: '',
      city: '',
      doorCode: '',
      floor: 0
    }
  }

  componentWillMount() {
    this.setState({
      street: this.props.street,
      postalCode: this.props.postalCode,
      city: this.props.city,
      doorCode: this.props.doorCode,
      floor: this.props.floor
    })
  }

  toggleEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    })
  }

  saveDeliveryAddressInfo = () => {
    this.toggleEditMode();
    this.props.save({
      street: this.state.street,
      postalCode: this.state.postalCode,
      city: this.state.city,
      doorCode: this.state.doorCode,
      floor: parseInt(this.state.floor, 10)
    });
  }

  handleInputChange = (e, value) => {
    switch (e.target.name) {
      case 'street':
        this.setState({ street: value });
        break;
      case 'postalCode':
        this.setState({ postalCode: value });
        break;
      case 'city':
        this.setState({ city: value });
        break;
      case 'doorCode':
        this.setState({ doorCode: value });
        break;
      case 'floor':
        this.setState({ floor: value });
        break;
      default:
        break;
    }
  }

  render() {
    const { street, postalCode, city, doorCode, floor } = this.props;

    return (
      <div>
        <TitleRow>
          <Title>Leveransadress</Title>
          { !this.state.isEditMode
              ? <FlatButton label='Ändra' secondary onClick={this.toggleEditMode} />
              : <RaisedButton label='Spara' primary onClick={this.saveDeliveryAddressInfo} /> }
        </TitleRow>
        { !this.state.isEditMode ?
          <div>
            <Text>{street} <br /> {postalCode} {city}</Text>
            <TextLabel>Portkod</TextLabel>
            <Text>{doorCode}</Text>
            <TextLabel>Våning</TextLabel>
            <Text>{floor}</Text>
          </div> :
          <div>
            <TextField
              hintText="Adress"
              floatingLabelText="Adress"
              floatingLabelFixed={true}
              name="street"
              value={this.state.street}
              onChange={this.handleInputChange}
            />
            <TextField
              hintText="12345"
              floatingLabelText="Postnummer"
              floatingLabelFixed={true}
              type="number"
              name="postalCode"
              value={this.state.postalCode}
              onChange={this.handleInputChange}
            />
            <TextField
              hintText="T ex Stockholm"
              floatingLabelText="Postort"
              floatingLabelFixed={true}
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
            <TextField
              hintText="T ex 1234"
              floatingLabelText="Portkod"
              floatingLabelFixed={true}
              type="number"
              name="doorCode"
              value={this.state.doorCode}
              onChange={this.handleInputChange}
            />
            <TextField
              hintText="T ex 4"
              floatingLabelText="Våning"
              floatingLabelFixed={true}
              type="number"
              name="floor"
              value={this.state.floor}
              onChange={this.handleInputChange}
            />
          </div>
        }
      </div>
    );
  }
}
