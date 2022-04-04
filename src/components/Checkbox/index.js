import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import someFunction, {
  validateEmail as validateEmailRename,
} from '../../utils/validation';
class CustomCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    someFunction();
    validateEmailRename();
    return (
      <TouchableOpacity
        onPress={() => null}
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'red',
          borderWidth: 1,
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>{true ? 'v' : null}</Text>
      </TouchableOpacity>
    );
  }
}

export {CustomCheckBox};
