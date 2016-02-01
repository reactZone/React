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
 * @Description: todo
 * @Copyright(©) 2015 by xiaomo.
 **/


/**
 * 使用jquery插件获取当前时间
 */
//$("#content").jclock({
//    withDate: true,
//    withWeek: true
//});
//$("#content").jclock();
    
//获取并格式化当前时间
var _getTime =  function(){
    var _=['00','01','02','03','04','05','06','07','08','09'],  //补零
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();

    return [_[h]||h,_[m]||m,_[s]||s].join(":");
};
//组件定义
var EzDigiClockComp = React.createClass({
    //设置状态变量初始值
    getInitialState : function(){
        return {
            time : _getTime()
        };
    },
    //初次渲染后React执行此方法
    componentDidMount : function(){
        //设置定时器
        this.timer = setInterval(function(){
            this.setState({time:_getTime()});
        }.bind(this),1000);
    },
    //即将从DOM树移除时执行此方法
    componentWillUnmount : function(){
        //删除定时器
        clearInterval(this.timer);
    },
    render : function(){
        return 	<div className="ez-digi-clock">
            {this.state.time}
        </div>;
    }
});
//渲染
React.render(
    <EzDigiClockComp />,
    document.querySelector("#content"));