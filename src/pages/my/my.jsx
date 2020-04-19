import { AtList, AtListItem } from "taro-ui";
import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import MyCard from "../../components/MyCard";
import "./my.scss";

export default class My extends Component {
  state = {
    functionList: [
      {
        name: "我的关注",
        img: "../../assets/images/my/atention.svg"
      },

      {
        name: "我的发布",
        img: "../../assets/images/my/release.svg"
      }
    ],
    infoList: ["基础资料", "积分详细", "我的助理", "优选投票", "反馈结果"]
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "会员中心"
  };

  // 信息列表点击事件
  handleClick() {}

  render() {
    return (
      <View className="my">
        <MyCard />
        {/* 功能列表 */}
        <View className="function-list">
          {this.state.functionList.map((item, index) => (
            <View className="item" key={"key2" + index}>
              <Image src={item.img}></Image>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
        {/* 信息列表 */}
        <AtList>
          {this.state.infoList.map((item, index) => (
            <AtListItem
              key={"key2" + index}
              title={item}
              arrow="right"
              onClick={this.handleClick}
            />
          ))}
        </AtList>
      </View>
    );
  }
}
