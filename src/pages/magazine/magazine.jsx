import Taro, { Component } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import "./magazine.scss";

export default class Magazine extends Component {
  state = {
    magazineList: [
      {
        id: 1,
        title: "《消费杂志》2019年第3期",
        info:
          "我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。用户主动点击分享...",
        img: "../../assets/images/magazine/1.jpg"
      },
      {
        id: 2,
        title: "《消费杂志》2019年第2期",
        info:
          "我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。用户主动点击分享...",
        img: "../../assets/images/magazine/2.jpg"
      },
      {
        id: 3,
        title: "《消费杂志》2019年第1期",
        info:
          "我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。用户主动点击分享...",
        img: "../../assets/images/magazine/3.jpg"
      }
    ]
  };
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
        <View>
          {this.state.magazineList.map(item => (
            <View className="magazine-item" key={"key" + item.id}>
              <Image src={item.img} mode="aspectFill"></Image>
              <View className="title">
                {item.title}
                <Button>点击阅读</Button>
              </View>
              <View className="info">{item.info}</View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
