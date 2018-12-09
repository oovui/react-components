# oovui-react

oovui react  components library.

# install 

`npm install @oovui/core`

# usage


```js
//App.js
import React from 'react'
import {Grid } from '@oovui/core';
const { Row, Col } = Grid;
class App extends React.Component {
  render () {
    return (
      <div>
        <div className="oov-grid-box">
          <Row gutter="20">
            <Col span={24}>Col 24</Col>
          </Row>
          <Row gutter="20px">
            <Col span={8}>Col 8</Col>
            <Col span={8}>Col 8</Col>
            <Col span={8}>Col 8</Col>
          </Row>
          <Row>
            <Col span={4}>Col 4</Col>
            <Col span={4} offset={4}>Col 4, Offset 4</Col>
            <Col span={4} offset={4}>Col 4, Offset 4</Col>
          </Row>
        </div>
      </div>
    )
  }
}

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
require("oovui/styles/index.css");

// 如果需要使用Icon图标，请单独安装 @oovui/react-feather-icons

ReactDOM.render(<App />, document.getElementById('root'))
```

# Docs

[文档](https://oovui.netlify.com/)


# 相关项目

[oovui-vue](http://www.oovui.com)