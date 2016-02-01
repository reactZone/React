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
 * @Date: 2016/1/23 11:05
 * @Description: hello world
 * @Copyright(©) 2015 by xiaomo.
 **/


        /**
         * 在虚拟DOM上创建p元素
         * 参数类型
         * type,  节点
         * config, style 样式
         * children... 子节点  可以写多个
         * case1: 直接写一个字符串 表示 渲染的内容
         */
        var e = React.createElement(
            "p",
            null,
            "hello World!!"
        );

        /**
         * 在虚拟DOM上创建p元素
         * 参数类型
         * type,  节点
         * config, style 样式
         * children... 子节点  可以写多个
         * case2: 创建多个元素
         */
        var e1 = React.createElement(
            "p",
            null,
            React.createElement("li", null, "我是第一个li"),
            React.createElement("li", null, "我是第二个li"),
            React.createElement("li", null, "我是第三个li"),
            React.createElement("li", null, "我是第四个li")
        );

        /**
         * 将虚拟DOM上的p元素渲染到真实DOM上的#content容器
         * @parm el 虚拟dom
         * @parm getElementById("xxx") 要绑定的容器，只能用原生，不能用JQ选择器
         * 当前 还有一种写法  React.render(e, document.querySelector("#content"))
         */
        React.render(e, document.getElementById("content"));
        React.render(e1, document.getElementById("moreChildren"));