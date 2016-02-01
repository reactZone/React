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
 * @Description: 访问dom
 * @Copyright(©) 2015 by xiaomo.
 **/

//定义组件
        var EzWeatherComp = React.createClass({
            //设置初始状态
            getInitialState : function(){
                return {waiting:false};
            },
            //点击按钮时执行搜索
            search : function(){
                //使用FindDOMNOde()方法读取用户输入值
                var city = React.findDOMNode(this.refs.q).value;
                   alert(city);
                //设置为等待状态
                this.setState({waiting:true,info:null});
            },
            render : function(){
                var waitingEl;
                if(this.state.waiting) //是否需要显示等待动画？
                    waitingEl = <img src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/waiting.gif"/>;
                return 	<div className="ez-weather">
                    <div className="ez-search">
                        <input type="text" defaultValue="beijing" ref="q"
                               placeholder="请输入城市拼音，如：beijing"/>
                        <button onClick={this.search}>search</button>
                    </div>
                    {waitingEl}
                </div>;
            }
        });
        //渲染
        React.render(
            <EzWeatherComp/>,
            document.querySelector("#content"));

