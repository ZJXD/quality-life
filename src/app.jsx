// 全局引入 taro-ui 样式
import "taro-ui/dist/style/index.scss";
import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/magazine/magazine",
      "pages/file/file",
      "pages/index/index",
      "pages/complaint/complaint",
      "pages/my/my"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#efefef",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#aaa",
      selectedColor: "#2a834e",
      backgroundColor: "#fff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/images/home.png",
          selectedIconPath: "./assets/images/home-active.png"
        },
        {
          pagePath: "pages/file/file",
          text: "品质档案",
          iconPath: "./assets/images/file.png",
          selectedIconPath: "./assets/images/file-active.png"
        },
        {
          pagePath: "pages/magazine/magazine",
          text: "消费杂志",
          iconPath: "./assets/images/magazine.png",
          selectedIconPath: "./assets/images/magazine-active.png"
        },
        {
          pagePath: "pages/complaint/complaint",
          text: "投诉维权",
          iconPath: "./assets/images/complaint.png",
          selectedIconPath: "./assets/images/complaint-active.png"
        },
        {
          pagePath: "pages/my/my",
          text: "我的",
          iconPath: "./assets/images/my.png",
          selectedIconPath: "./assets/images/my-active.png"
        }
      ]
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
