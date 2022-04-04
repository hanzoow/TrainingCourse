import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomCheckBox} from '../components/Checkbox';
import CommonHeaderBar from '../components/CommonHeaderBar';
import {commonFetch as renameFunction} from '../Networking/fetch';

var someValue = '123123';

var someValue = '11111';

var someValue = 'abc';

var someValue;

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'init',
      isChecked: false,
      propsForCommonHeaderBar: {name: 'training'},
    };
    // this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  // Là life cycle chạy trong quá trình mounting,
  // là life cycle chạy đầu tiên và duy nhất 1 lần trong quá trình render của component
  componentDidMount() {
    this.setState({
      text: 'mount',
    });
    // console.log('componentDidMountClassComponent RUN');
  }

  // Là life cycle được chạy trong phase updating,
  // quyết định việc component có update hay không
  shouldComponentUpdate(nextProps, nextState) {
    // const hosting = '123';
    // console.log('this.stateClassComponent', this.state);
    // console.log('nextPropsClassComponent', nextProps);
    // console.log('nextStateClassComponent', nextState);
    // if (nextState.isChecked !== this.state.isChecked) {
    //   return false;
    // }
    return true;
  }

  // Là life cycle được chạy trong phase updating,
  // Được chạy sau khi component đã được render và là nơi nhận các props,state mới
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdateClassComponent RUN');
  }

  // Là life cycle được chạy trong phase unmouting,
  // Được chạy ngay khi component bị unmount
  componentWillUnmount() {}

  onCheckboxFakePressed() {
    this.setState(prevState => {
      return {...prevState, isChecked: !prevState.isChecked};
    });
  }

  /**
   *
   * @param {*} valueText
   * @returns làm setState cho state propsForCommonHeaderBar
   */
  onChangeTitle = objectReceive => {
    console.log('objectReceive', objectReceive);
    this.setState({
      propsForCommonHeaderBar: objectReceive,
    });
  };

  render() {
    // console.log('RENDERClassComponent');
    const {text, isChecked, propsForCommonHeaderBar} = this.state;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {text} {this.props.children}
          {renameFunction()}
        </Text>
        {/* <CommonHeaderBar
          onChangeTitle={this.onChangeTitle}
          screenTitle={this.state.propsForCommonHeaderBar}
        /> */}
        <TouchableOpacity
          onPress={() => this.onCheckboxFakePressed()}
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
          <Text style={{color: 'white'}}>{isChecked ? 'v' : null}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClassComponent;
