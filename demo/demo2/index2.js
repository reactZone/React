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
 * @Date: 2016/1/23 12:05
 * @Description: 组件
 * @Copyright(©) 2015 by xiaomo.
 **/


    /**
     * 创建一个组件 这个组件被用于创建虚拟dom
     * @parm {render:function(){....}}  需要创建一个虚拟dom 并返回
     * @return 一个有效的React元素
     * sample:
     *     var EzLedComp = React.createClass(
     *   {
     *       render: function () {
     *       todo:there is code
     *      }
     *   }
     *   );
     */
    var EzLedComp = React.createClass(
        {
            render: function () {
                return React.createElement("div",{className:"ez-led"},"Hello World!!")
            }
        }
    );


    /**
     * 方法：创建虚拟dom
     * @parm EzLedComp 虚拟dom组件
     * 说明：parm可以是 (type,config,children...) 也可以是一个己经创建好的dom组件
     * @return 虚拟dom
     */
    var e = React.createElement(EzLedComp);


    /**
     *  渲染容器
     *  @parm 虚拟dom
     *  @parm 要绑定的容器
     *  return  不需要返回值
     */
    React.render(e,document.getElementById("content"));
