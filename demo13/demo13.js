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
    * @Description: 动画
    * @Copyright(©) 2015 by xiaomo.
    **/


//组件定义
var EzGaugeComp = React.createClass({
    //声明初始状态
    getInitialState : function(){
        return {
            value : 0, 			//速度值
            mounted : false    //是否已挂接到DOM
        };
    },
    //首次渲染后改变状态
    componentDidMount : function(){
        this.setState({mounted : true});
    },
    //校验属性值，无效时不刷新界面
    shouldComponentUpdate : function(nextProps,nextState){
        if(nextProps.value > 220 || nextProps.value<0) return false;
        return true;
    },
    render : function(){
        //速度为0时的旋转角度
        var degree = -201;
        //根据属性值计算旋转角度
        if(this.state.mounted){
            degree = (this.props.value / 220) * 265 - 201;
            //确保之前设置的样式生效
            window.getComputedStyle(React.findDOMNode(this.refs.ptr)).transform;
        }
        //表针样式
        var style={
            transform : "rotate("+degree+"deg)"
        };
        return (
            <div className="ez-gauge">
                <img src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/gauge.jpg" />
                <img src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/gauge-pointer.jpg" className="pointer" style={style} ref="ptr"/>
            </div>
        );
    }
});
//渲染
React.render(
    <EzGaugeComp  value="200"/>,
    document.querySelector("#content"));