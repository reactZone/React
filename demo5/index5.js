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
 * @Description: 使用props获取属性
 * @Copyright(©) 2015 by xiaomo.
 **/


        /**
         * 创建一个组件 使用的是jsx语言
         */
        var EzLampComp = React.createClass({
            render: function () {
                var onoff = this.props.onoff;
                if (onoff == "on") {
                    return <span className="ez-lamp on"></span>;
                } else {
                    return <span className="ez-lamp off"></span>;
                }
            }
        });




        /**
         * 渲染容器
         * 将定义好的组件拿来使用
         * 注意：组件中需要参数，所以在渲染的时候不要忘了传参数过去
         */
        var myOnoff = getProp();
        React.render(
            <EzLampComp onoff={myOnoff}></EzLampComp>,
            document.querySelector("#content")
        );

        function getProp() {
            setInterval(function () {
                return "on";
            }, 1000);
            return "off";
        }


