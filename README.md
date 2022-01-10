---
home: true
heroText: Peng Blog
tagline: 一个被程序员生涯耽误的段子手
heroTextStyle: {
  color: '#fff'
}
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
# heroImage: ''

isShowTitleInHome: false

---

## 💌 vuepress-plugin-sakura

> 项目地址：[https://njlizhi.github.io/]

> vue vuepress vuepress-theme-reco 

## 📢 说明

## 🏠 项目截图
<p align="center">
  <img width="900" src="http://www.zpzpup.com/assets/image/blog04.png">
</p>


## 📎 项目配置很简单
> npm install vuepress-plugin-sakura -D

or

>cnpm install vuepress-plugin-sakura -D

## 版本更新
> 1.1.0 修复打包报错

```js
// 只要把这个放进 config的plugins中就可以了 有木有很简单
 ["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }     
    }]
```




