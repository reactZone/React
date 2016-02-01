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
    * @Description: 记忆状态 不仅仅是外部参数影响    能够记忆当前状态
    * @Copyright(©) 2015 by xiaomo.
    **/


        /**
         * 定义一个组件
         *  组件内可以有多个方法。以逗号隔开。
         *  但至少需要一个render返回
         */
        var EzSwitchComp = React.createClass({
                    //初始化状态 getInitialState是React的内置方法，不要随意更改方法名
                    getInitialState:function (){
                        return{on:false};
                    },
                    //处理点击事件
                    onClick : function(){
                        //读取并重设状态，这将触发重新渲染
                        this.setState({on : !this.state.on});
                    },
                    render: function () {
                    //根据状态设置样式
                      if (this.state.on==true){
                          var img="http://www.hubwiz.com/course/552762019964049d1872fc88/img/switch-on.png";
                      } else{
                          var img="http://www.hubwiz.com/course/552762019964049d1872fc88/img/switch-off.png";
                      }
                        //注意： 这里调用 onclick方法 不需要加括号
                        return <img src={img} style={{width:"150px"}} onClick={this.onClick} alt=""/>
                    }
        });
        /**
         * 渲染
         */
        React.render(
            <EzSwitchComp></EzSwitchComp>,
            document.querySelector("#content")
        );