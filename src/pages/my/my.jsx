import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./my.scss";

export default class My extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "我的"
  };

  render() {
    return (
      <View className="my">
        <Text>我的</Text>
      </View>
    );
  }
}
