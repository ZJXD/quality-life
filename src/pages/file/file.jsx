import { AtForm, AtInput } from "taro-ui";
import Taro, { Component } from "@tarojs/taro";
import { View, Button, Image } from "@tarojs/components";
import "./file.scss";

export default class File extends Component {
  state = {
    searchBtnList: [
      {
        name: "产品查询",
        value: 1,
        img: "../../assets/images/file/prodction.svg",
        activeImg: "../../assets/images/file/prodction-active.svg"
      },

      {
        name: "商家查询",
        value: 2,
        img: "../../assets/images/file/store.svg",
        activeImg: "../../assets/images/file/store-active.svg"
      }
    ],
    selectedBtnId: 1
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "品质档案"
  };

  buttonClick(value) {
    this.setState({ selectedBtnId: value });
    // console.log("进入：", value);
  }

  render() {
    return (
      <View className="file">
        {/* 选择按钮 */}
        <View className="search-btn">
          {this.state.searchBtnList.map(item => (
            <Button
              key={"key" + item.value}
              onClick={this.buttonClick.bind(this, item.value)}
              className={
                this.state.selectedBtnId === item.value ? "active" : ""
              }
            >
              <Image
                src={
                  this.state.selectedBtnId === item.value
                    ? item.activeImg
                    : item.img
                }
              />
              {item.name}
            </Button>
          ))}
        </View>
        {/* 表单 */}
        <AtForm className="file-form">
          <AtInput
            name="com"
            title="公司名称"
            type="text"
            placeholder="请输入公司名称"
            value=""
          ></AtInput>
          <AtInput
            name="pingpai"
            title="品牌"
            type="text"
            placeholder="请输入品牌"
            value=""
          ></AtInput>
          <AtInput
            name="production"
            title="产品"
            type="text"
            placeholder="请输入产品"
            value=""
          ></AtInput>
          <AtInput
            name="code"
            title="证书编号"
            type="text"
            placeholder="请输入证书编号"
            value=""
          ></AtInput>
          <Button>立即查询</Button>
        </AtForm>
      </View>
    );
  }
}
