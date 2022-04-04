import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const CustomText = ({eachCustomText, ...props}) => {
  const [input, setInput] = useState('');

  console.log('>>>> RENDER');

  useEffect(() => {
    console.log('useEffect item');
  });

  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
      <TextInput
        style={{backgroundColor: 'red', flex: 0.9, borderWidth: 1, height: 40}}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Text style={{marginLeft: 10, fontSize: 20}}>
        {props.timeAdd.toTimeString()}
      </Text>
    </View>
  );
};

export default React.memo(CustomText);

// 0 => 1237
// 1 =>
// 2 =>
// 3 =>
// 4 =>
