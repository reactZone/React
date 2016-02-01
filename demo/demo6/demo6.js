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
    * @Description: 内联样式
    * @Copyright(©) 2015 by xiaomo.
    **/


/**
 * 定义一个组件
 * 1.获取属性 颜色 开关
 * 2.设置灯光的颜色
 * 3.设置灯的透明度，开是1的透明度，关是0.5的透明度
 * 4.根据开关的值来设置 样式
 * 5. 将创建的组件返回以供使用
 */
        var EzLampComp = React.createClass({
                render: function () {
                    var color = this.props.color;
                    var onoff = this.props.onoff;

                    var lights = {
                        "off":"#888",
                        "on":"#fff"
                    };

                    var opacity ={
                        "off":0.5,
                        "on":1.0
                    };

                    var styles={
                        borderRadius: "50%",
                        opacity:opacity[this.props.onoff],
                        background:"-webkit-radial-gradient(30% 30%," + lights[onoff] + " 5%," + color +" 95%)"
                    };
                    // 注意: jsx 的class是 className !!!
                    return <span className="ez-lamp" style={styles}></span>
                }
        });

        /**
         * 渲染容器 并传入参数 颜色和开关
         */
        React.render(
                <div>
                    <EzLampComp color="green" onoff="off"/>
                    <EzLampComp color="green" onoff="on"/>
                    <EzLampComp color="red" onoff="off"/>
                    <EzLampComp color="red" onoff="on"/>
                    <EzLampComp color="blue" onoff="off"/>
                    <EzLampComp color="blue" onoff="on"/>
                </div>,
                document.querySelector("#content"));
