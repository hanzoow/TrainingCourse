import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';

const FunctionComponent = props => {
  const [data, setData] = useState('');

  useEffect(() => {
    if (data) {
      //callapi
    }
  }, [data]);

  return (
    <View
      style={{
        backgroundColor: 'green',
      }}>
      <View style={{backgroundColor: 'blue'}}>
        <Text style={{}}>Tài khoản nhận tiền</Text>
      </View>
      <View style={{backgroundColor: 'blue'}}>
        <Text style={{}}>Tài khoản nhận tiền</Text>
      </View>
    </View>
  );
};

export default React.memo(FunctionComponent);

/**
 *  {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'green',
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'center',
          }}>
          {[1, 2, 3, 4, 5, 6].map(element => {
            return (
              <View
                style={{
                  borderRadius: 10,
                  width: '30%',
                  backgroundColor: 'blue',
                  alignItems: 'center', // align cross
                  justifyContent: 'center', // align main
                  marginVertical: 20,
                }}>
                <Text>{element}</Text>
              </View>
            );
          })}
        </View> */
