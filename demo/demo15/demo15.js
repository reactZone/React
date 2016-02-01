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
    * @Description: log
    * @Copyright(©) 2015 by xiaomo.
    **/


//日志mixin
var EzLoggerMixin = {
    log:function(txt){
        //按需撞见日志板DOM对象
        if(!window._logger_){
            var el = window._logger_  = document.createElement("pre");
            el.className = "ez-logger";
            document.body.appendChild(el);
        }
        //计算时间戳
        var time = new Date,
            h = time.getHours(),
            m = time.getMinutes(),
            s = time.getSeconds(),
            ts = [h,m,s].join(":");

        //this.constructor.displayName表示组件的显示名，React自动设置该属性
        var compName = "[" + this.constructor.displayName + "]";

        //输出到日志板
        window._logger_.innerText = [window._logger_.innerText, ts + compName + " : " + txt].join("\n");
    }
};
//组件1定义
var EzDemo1Comp = React.createClass({
    mixins : [EzLoggerMixin], //使用日志mixin
    componentDidMount : function(){
        this.log("component rendered!");
    },
    render : function(){
        this.log("rendering the component");
        return 	<div>
            <p>This is a demo component.</p>
        </div>;
    }
});
//组件2定义
var EzDemo2Comp = React.createClass({
    mixins : [EzLoggerMixin],  //使用日志mixin
    componentDidMount : function(){
        this.log("component rendered!");
    },
    render : function(){
        this.log("rendering the component");
        return 	<div>
            <p>This is another demo component.</p>
        </div>;
    }
});
//渲染
React.render(
    <div>
        <EzDemo1Comp/>
        <EzDemo2Comp/>
    </div>,
    document.querySelector("#content"));