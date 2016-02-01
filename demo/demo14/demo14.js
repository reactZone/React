/**
    * 把今天最好的表现当作明天最新的起点．．～
    * いま 最高の表現 として 明日最新の始発．．～
    * Today the best performance  as tomorrow newest starter!
    * Created by IntelliJ IDEA.
    *
    * @author: xiaomo
    * @github: https://github.com/qq83387856
    * @email: hupengbest@163.com
    * @QQ_NO: 83387856
    * @Date: 2016/1/23 13:35
    * @Description: 默认属性
    * @Copyright(©) 2015 by xiaomo.
    **/


//组件定义
var EzThermometerComp = React.createClass({
    //声明默认属性值
    getDefaultProps:function(){
        return {
            value:20,		//温度值
            color : "red"   //液柱颜色
        }
    },
    //声明初始状态
    getInitialState:function(){
        return {
            mounted:false
        }
    },
    //首次渲染后改变状态
    componentDidMount:function(){
        this.setState({mounted:true});
    },
    render:function(){
        //液体球样式
        var bubbleStyle = {
            background : this.props.color,
            left:65,
            top:350
        };

        //零度时液柱top值
        var top = 253.57;

        //根据属性值计算液柱top值
        if(this.state.mounted){
            top = (50-335)*this.props.value/(50+20)+253.57;
            //确保之前设置的样式生效
            window.getComputedStyle(React.findDOMNode(this.refs.bar)).top;
        }
        //液柱样式
        var barStyle = {
            background : this.props.color,
            top: top,
            bottom:80
        };
        return 	<div className="ez-thermometer">
            <img src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/thermometer.png"/>
            <div className="bubble" style={bubbleStyle}/>
            <div className="bar" style={barStyle} ref="bar"/>
        </div>;
    }
});
//渲染
React.render(
    <EzThermometerComp value="37"/>,
    document.querySelector("#content"));