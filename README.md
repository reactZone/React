#注意事项
# 1.react的内容要放在body内 置于容器的下面
# 2.使用jsx 一定要将将script的type定义成 text/jsx并引入JSXTransformer.js
# 3.react 的样式 关键字是 class
# 4.组件交组：onClick的C是大写    方法调用不需要加括号 加括号会报一大坨的错！！！！！！
```
		var MessageBox = React.createClass({
			alertMe: function(){
				alert('你刚才点了我一下。。。。');
			},
			render:function(){
				return ( <h1 onClick={this.alertMe}>你好世界！！！</h1> )
			}
		});
```
# 5. 组件嵌套的时候 
# 6. 循环   1 for   然后component.push
# 7.使用props 创建一个组件 接收 props  在使用组件的时候传入属性
这是一个组件
```
var HelloMessage = React.createClass({
    render:function(){
        return (
            <div>hello {this.props.name}</div>
        )
    }
})
```
开始使用组件
```
    React.render(<HelloMessage name="xiaomo" />);
```

# 8.使用state  和refs
```
var App = React.createClass({
    //初始化
    getInitialState:function(){
        return {
            userInput:""
        };
    }
    //当输入框内容发生变化时进行的操作
    handlerChange:function(e){
        this.setState{userInput:e.target.value}
    }
    //当点击div的时候进行的操作
    clearAndFocusInput:function(){
        this.setState{userInput:""},
        function(){
            // this.refs.theInput.getDOMNode 可以取到 ref= "theInput"的dom节点
            this.refs.theInput.getDOMNode.focus();
        }
    }
});
},
render:function(){
    return (
        <div onClick={this.clearAndFocusInput}>
        清除并获取焦点
        <input ref="theInput" value={this.state.userInput} onChange = {this.handlerChange}
        </div>
    )
    
}


```
<hr>

#demo

```
<body>

<!-- 定义一个容器承载内容 begin -->
<div id="content"></div>
<div id="moreChildren"></div>

<!-- 真正的代码要开始了  -->
<script src="index1.js"></script>

</body>
```
<hr>
#本项目总共有15个demo
每个demo都讲了一个react的使用,为了让html干净整洁，也为了让编译器能够识别jsx颜色高亮，因此js部分都使用的外部引用

<hr>
#鸣谢
感谢React 让我一个做服务端的前端喳喳能够体验前端开发的乐趣
希望这个项目能够给大家学习React带来帮助

