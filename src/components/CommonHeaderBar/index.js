import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import useCustomTimeHook from '../../hooks/useCustomTime';
import useExampleHook from '../../hooks/useExampleHook';
import ItemFlatList from '../ItemFlatList';

const CommonHeaderBar = ({
  onHeaderPressed,
  onChangeText,
  inputValue,
  toggleSwitch,
  onItemPressed,
  objectPass,
  arrPass,
  stringPass,
  abc,
  textTruncate,
  ...props
}) => {
  console.log('CommonHeaderBar RENDER');

  useEffect(() => {
    console.log('onHeaderPressed RENDER');
  }, [onHeaderPressed]);

  useEffect(() => {
    console.log('textTruncatetextTruncate RENDER');
  }, [textTruncate]);

  console.log('arrPassarrPassarrPass', arrPass);

  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 20,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>{stringPass}</Text>
      <TouchableOpacity
        style={{marginVertical: 30}}
        onPress={() => onHeaderPressed()}>
        <Text>onHeaderPressed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginVertical: 30}}
        onPress={() => toggleSwitch()}>
        <Text>Toggle switch</Text>
      </TouchableOpacity>
      <Text>{textTruncate}</Text>
      {/* <Text>{props.numberMember}</Text> */}
      <TextInput
        value={inputValue}
        onChangeText={text => onChangeText(text)}
        style={{
          width: '100%',
          borderWidth: 1,
          paddingVertical: 10,
          backgroundColor: 'green',
          color: 'blue',
        }}
      />
      <FlatList
        data={[1, 2, 3]}
        renderItem={({item, index}) => {
          return (
            <ItemFlatList
              customColor={{width: 500}}
              onItemPressed={onItemPressed}
              item={item}
            />
          );
        }}
      />
    </View>
  );
};

export default React.memo(CommonHeaderBar);

const styles = StyleSheet.create({
  a: {backgroundColor: 'blue'},
});
