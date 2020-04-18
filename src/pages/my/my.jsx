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
    navigationBarTitleText: "会员中心"
  };

  render() {
    return (
      <View className="my">
        <Text>会员中心</Text>
      </View>
    );
  }
}
