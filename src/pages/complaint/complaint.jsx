import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./complaint.scss";

export default class Complaint extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "投诉维权"
  };

  render() {
    return (
      <View className="complaint">
        <Text>投诉维权</Text>
      </View>
    );
  }
}
