import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./magazine.scss";

export default class Magazine extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "电子月刊"
  };

  render() {
    return (
      <View className="magazine">
        <Text>电子月刊</Text>
      </View>
    );
  }
}
