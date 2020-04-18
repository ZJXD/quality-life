import Taro, { Component } from "@tarojs/taro";
import { View, Input } from "@tarojs/components";
import "./index.scss";

export default class AppHeader extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  static options = {
    addGlobalClass: true
  };

  render() {
    let { className } = this.props;
    return (
      <View className={"app-header " + className}>
        <View className="icon iconfont icon-scan"></View>
        <View className="input-container">
          <View className="iconfont icon-search"></View>
          <Input className="input" placeholder="请输入查询内容"></Input>
        </View>
        <View className="icon iconfont icon-message"></View>
      </View>
    );
  }
}
