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
    * @Date: 2016/1/23 13:22
    * @Description: todo
    * @Copyright(©) 2015 by xiaomo.
    **/

        /**
         * 定义组件 React.createClass
         * @parm 至少需要一个有效的render({render:function(){}}}
         * @return  react组件
         */
        var EzLedComp = React.createClass({
            render: function () {
                //jsx 需要引入 JSXTransformer
               var e =
                   <div>
                       <div className="ez-led">Hello, React!</div>
                       <div className="ez-led">2015-04-15</div>
                   </div>;
                return e;
            }
        });

        /**
         * 渲染容器 React.render
         * @parm 虚拟dom   JSX 需要当成html的标签使用
         * @parm 绑定容器
         * @return 不需要返回值
         *
         */
        React.render(<EzLedComp/>,document.getElementById("content"));