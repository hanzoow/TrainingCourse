import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

const Item = ({
  onItemPressed,
  customColor,
  item,
  truncateContent,
  ...props
}) => {
  console.log('ItemItemItemItemItem render');
  return (
    <TouchableOpacity
      onPress={event => {
        onItemPressed(item);
      }}
      style={[customColor]}>
      <Text>{item.title}</Text>
      <Image source={{uri: item.image}} style={{width: '100%', height: 60}} />
      {/* <Text>{truncateContent}</Text> */}
    </TouchableOpacity>
  );
};

export default React.memo(Item);
