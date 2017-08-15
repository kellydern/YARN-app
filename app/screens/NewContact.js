
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import colors from '../config/colors';
import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';

const fields = [
  { placeholder: 'First Name', stateKey: 'firstName' },
  { placeholder: 'Last Name', stateKey: 'lasttName' },
    { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address' },
  { placeholder: 'Mobile Phone', stateKey: 'mobilePhone' },
  { placeholder: 'City', stateKey: 'city' },
  { placeholder: 'Birthday', stateKey: 'birthday' },
];

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  onInputChange = (text, stateKey) => {
    const mod ={};
    mod[stateKey] = text;
    this.setState(mod);
  }

  handleSubmit = () => {
    alert('Submit');
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.secondaryText }}>
      {
        fields.map((field) => (
          <TextInput
          key={field.stateKey}
          onChange={(text) => this.onInputChange(text, field.stateKey)}
          {...field}
          />
        ))
      }
      <View style={{ marginTop: 20}}>
      <PrimaryButton
        label="Save"
        onPress={() => this.handleSubmit()}
      />
      </View>
        </ScrollView>
    );
  }
}

export default NewContact;
