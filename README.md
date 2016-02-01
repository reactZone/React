#注意事项:组件的名字首字母要大写
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
# 9.条件判断 不能用if 方式1：三目运算符 方式2：直接在{}中调用函数 方式：用比较运算符  {this.props.name || "this is a name"} 方式4：变量 方式5：直接在{}中写一个函数，类似于闭包 用()包起来  {(这里写函数)}

# 10. key  元素加上key
refs   查看 8
key 列表元素一定要加key
<ul>
		<li key="1">1</li>
		<li key="2">1</li>
		<li key="3">1</li>
</ul>


# 11.生命周期
state 是组件内进行维护的。一个state对应一个render结果   
getDefaultProps(获取默认属性，只调用一次 实例之中共享引用（指向同一个地址）) getInitialState(初始化:每个实例都会调用一次 初始化特有的状态 必须返回一个对象{object})   
componentWillMount(即将被装载，修改状态(this.setState({key:value}))) render(渲染 this.props  和this.state  只有一个顶层组件)
 componentDidMount（装载的时候，可以操作dom  $(React.findDOMNode(this).append("这是后面拼接的内容")) 初始化

componentWillReviceProps(将要接收到属性的时候 修改新属性、状态)   shouldComponentUpdate(接收到新和新状态时：需要返回值 返回flase 会终止render 一般不用)	 
componentWillUpdate(将要更新的时候 不能修改属性和状态及dom输出)  render()  componentDidUpdate(更新的时候 修改dom)						运行中

componentWillMount(销毁之前开发者的操作 清理计时器，事件监听器)		销毁
React.unmountComponentAtNode(document.getElementByTagName("body")[0]); return;
# 12. 属性和状态
props(组件自己不能修改属性，只能由父组件修改)  
使用：
使用组件的时候 传入 key value  <Hello  name="？"/>
{字符串}  var props = {one:"123",two:123} <Hello {...pros} />   也可以是 {key:value,key:value}这种类型的
{[1,2,3]}
{变量}

state  记忆状态    this.state   是事物的私有属性 由本组件决定
getInitialState：function(){return {object}
setState      更新组件状态 diff算法



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
