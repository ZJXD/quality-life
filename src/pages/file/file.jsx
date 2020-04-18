import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./file.scss";

export default class File extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "品质档案"
  };

  render() {
    return (
      <View className="file">
        <Text>这里是品质档案</Text>
      </View>
    );
  }
}
