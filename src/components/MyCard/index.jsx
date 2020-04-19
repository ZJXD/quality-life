import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

export default class MyCard extends Component {
  state = {
    user: {
      name: "任同学 Andy",
      avatar: "../../assets/images/my/avatar.jpeg",
      grader: "铜牌大使"
    },
    signList: [5, 5, 10, 5, 5, 5, 10],
    signCount: 1
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="card-box">
        {/* 头部卡片 */}
        <View className="card">
          <Image
            className="setting"
            src="../../assets/images/my/setting.svg"
          ></Image>
          <View className="user">
            <Image
              className="avatar"
              src={this.state.user.avatar}
              mode="aspectFill"
            ></Image>
            <View className="name">
              <Text>{this.state.user.name}</Text>
              <Text>{this.state.user.grader}</Text>
            </View>
          </View>
          <View className="sign-box">
            {this.state.signList.map((item, index) => (
              <View className="sign-item" key={"key1" + index}>
                <Text>第{index + 1}天</Text>
                <View></View>
                <Text>+{item}</Text>
              </View>
            ))}
          </View>
          <View className="sign-count">
            <Image src="../../assets/images/my/signIn.svg"></Image>
            <Text>今日你已签到{this.state.signCount}次</Text>
          </View>
        </View>
      </View>
    );
  }
}
