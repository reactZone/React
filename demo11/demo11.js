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
    * @Description: 容器组件
    * @Copyright(©) 2015 by xiaomo.
    **/


var EzPanelComp = React.createClass({
    render: function () {
        var title = this.props.title;
        var children = this.props.children;
        return 	<div className="ez-panel">
            <div className="header">{title}</div>
            <div className="content">
                {children}
            </div>
        </div>;
    }
});

React.render(
    <EzPanelComp title="小莫在测试容器组件">
        <p>这是容器组件的内容。</p>
    </EzPanelComp>,
    document.querySelector("#content"));