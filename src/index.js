import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomText from './components/CustomText';

const arr = [
  {
    id: 1,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 2,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 3,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 4,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 5,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 6,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!! [22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm đ[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm đ',
    time: '22 phut truoc',
  },
  {
    id: 7,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
  {
    id: 8,
    image:
      'https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg',
    title: 'abc',
    content:
      '[22/2] Duy nhất hôm nay, nạp tiền điện thoại Vinaphone để nhận ngay ưu đãi 50% và đừng quên lì xì nhóm để nhận voucher nạp điện thoại hoàn tiền cực lớn nhé !!!',
    time: '22 phut truoc',
  },
];

const Root = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('init');
  const [input, setInput] = useState('init input');
  const [count, setCount] = useState(1);
  const [listCustomText, setListCustomText] = useState([
    {id: count, timeAdd: new Date()},
  ]);

  const [objectPass, setObjectPass] = useState({
    key1: 'abc',
  });

  const [arrPass, setArrPass] = useState([1, 2, 3]);

  const [stringPass, setStringPass] = useState('string passed');

  const [dataFlatList, setDataFlatList] = useState(arr);

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
  };

  const onHeaderPressed = React.useCallback(() => {
    console.log('onHeaderPressed', input);
  }, []);

  //ko can thiet render
  const onChangeText = React.useCallback(textInput => {
    console.log('123132');
    setInput(textInput);
  }, []);

  const toggleSwitchPressed = React.useCallback(() => {
    const arrCopy = arrPass;
    arrCopy.push(10 + Math.random(100));
    console.log('arrCopy', arrCopy);
    setStringPass('string passed');
    setArrPass(arrCopy);
    setObjectPass(objectPass);
    setIsEnabled(prevState => !prevState);
  }, [arrPass, objectPass]);

  const onItemPressed = React.useCallback(itemPressed => {
    console.log('itemPressed', itemPressed);
  }, []);

  const addToFirst = () => {
    setListCustomText(value => {
      const copyValue = [...value];
      copyValue.unshift({id: count + 1, timeAdd: new Date()});
      return copyValue;
    });
    setCount(value => value + 1);
  };

  const addToLast = () => {
    setListCustomText(prevValue => {
      return [...prevValue, ...[{id: count + 1, timeAdd: new Date()}]];
    });
    setCount(value => value + 1);
  };

  const sortEarliestTimeAdd = () => {
    const sortedList = listCustomText.sort((a, b) => {
      return a.timeAdd - b.timeAdd;
    });
    setListCustomText([...sortedList]);
  };

  const sortLatestTimeAdd = () => {
    const sortedList = listCustomText.sort((a, b) => {
      return b.timeAdd - a.timeAdd;
    });
    setListCustomText([...sortedList]);
  };

  console.log('listCustomText', listCustomText);

  const textTruncate = React.useMemo(() => {
    console.log('123132321');
    return input + 'abc';
  }, [input]);

  //   O
  // O   O

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* <View style={{flexDirection: 'row'}}>
        <Text prop1={'a'}>text1</Text>
        <Text prop1={'a'}>text2</Text>
        <CommonHeaderBar />
      </View> */}

      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{text}</Text>
      <CommonHeaderBar
        onChangeText={onChangeText}
        onHeaderPressed={onHeaderPressed}
        textTruncate={textTruncate}
        toggleSwitch={toggleSwitch}
      /> */}
      {/* <FlatList
        data={dataFlatList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ItemFlatList customStyle={styles.color} item={item} />;
        }}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          setDataFlatList([...dataFlatList, ...arr]);
        }}
      /> */}
      <TouchableOpacity style={{marginVertical: 10}} onPress={addToFirst}>
        <Text style={styles.fontSizeText}>Add new CustomText to first</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical: 10}} onPress={addToLast}>
        <Text style={styles.fontSizeText}>Add new CustomText to last</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginVertical: 10}}
        onPress={sortEarliestTimeAdd}>
        <Text style={styles.fontSizeText}>Sort earliest by day add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginVertical: 10}}
        onPress={sortLatestTimeAdd}>
        <Text style={styles.fontSizeText}>Sort latest by day add</Text>
      </TouchableOpacity>
      {listCustomText.map((eachCustomText, index) => {
        return (
          <CustomText
            key={eachCustomText.id}
            timeAdd={eachCustomText.timeAdd}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default Root;

const styles = StyleSheet.create({
  color: {color: 'red'},
  fontSizeText: {fontSize: 25},
});

[
  {
    nodeName: 'abc',
    component: 'A',
    props: {},
    children: [
      {
        nodeName: 'abc',
        component: 'A',
        props: {},
        children: [],
      },
    ],
  },
  {nodeName: 'abc', component: 'A', children: []},
];
