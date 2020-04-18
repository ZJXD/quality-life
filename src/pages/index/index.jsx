import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import "./index.scss";
import AppHeader from "../../components/AppHeader";

export default class Index extends Component {
  state = {
    isScrollTop: true,
    homeCTList: [
      { img: "https://i.ibb.co/FqqQSW7/home-ct1.png", name: "口碑榜单" },
      { img: "https://i.ibb.co/qCj44x2/home-ct2.png", name: "志愿者活动" },
      { img: "https://i.ibb.co/DCGSQp3/home-ct3.png", name: "品质榜单" }
    ],
    qualityList: [
      {
        img: "../../assets/images/home/milk.png",
        name: "果粒牛奶优酸乳",
        grade: 1,
        ticket: 1330
      },
      {
        img: "../../assets/images/home/tea.png",
        name: "有机铁观音",
        grade: 1,
        ticket: 1152
      },
      {
        img: "../../assets/images/home/milkTea.png",
        name: "奈雪の茶",
        grade: 1,
        ticket: 986
      }
    ],
    mouthList: [
      {
        img: "../../assets/images/home/mouth-1.png",
        name: "购物中心"
      },
      {
        img: "../../assets/images/home/mouth-2.png",
        name: "家政公司"
      },
      {
        img: "../../assets/images/home/mouth-3.png",
        name: "课外培训"
      },
      {
        img: "../../assets/images/home/mouth-4.png",
        name: "旅行社"
      }
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };

  pageScrollFn = scrollTop => {
    this.setState({ isScrollTop: scrollTop === 0 }, () => {
      console.log("TCL: Index -> isScrollTop", this.state.isScrollTop);
    });
  };

  render() {
    return (
      <View className="index">
        <AppHeader className={this.state.isScrollTop ? "" : "scroll"} />
        <Image
          className="head-image"
          src="../../assets/images/home/home-head.png"
          mode="aspectFill"
        ></Image>

        <View className="home-ct">
          {this.state.homeCTList.map((e, index) => (
            <View className="home-ct-item" key={"key" + index}>
              <Image className="item-img" src={e.img}></Image>
              <Text>{e.name}</Text>
            </View>
          ))}
        </View>
        {/* 品质榜单 */}
        <View className="quality-list">
          <View className="title">—— 品质榜单 ——</View>
          <View className="little-title">中国好品质，由你来决定</View>
          <View className="quality-box">
            {this.state.qualityList.map((e, index) => (
              <View className="quality-item" key={"key" + index}>
                <Image
                  className="item-img"
                  src={e.img}
                  mode="aspectFill"
                ></Image>
                <Text className="item-title">{e.name}</Text>
                <View className="item-grad">
                  <Text>第{e.grade}名</Text>
                  <Text>{e.ticket}票</Text>
                </View>
              </View>
            ))}
          </View>
          <Button className="mor-btn">查看更多</Button>
        </View>
        {/* 口碑榜单 */}
        <View className="mouth-box">
          <View className="title-box">
            <View className="title">口碑榜单</View>
            <View className="more">更多</View>
          </View>
          <View className="mouth-list">
            {this.state.mouthList.map((e, index) => (
              <View className="mouth-item" key={"key1" + index}>
                <Image className="img" src={e.img}></Image>
                <View className="name">{e.name}</View>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
