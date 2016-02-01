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
    * @Description: 获取表单内容
    * @Copyright(©) 2015 by xiaomo.
    **/


//组件定义
var EzLoginComp = React.createClass({
    auth : function(){
        var account = React.findDOMNode(this.refs.account).value,
            pass = React.findDOMNode(this.refs.password).value;
        alert([account,pass]);

    },
    render : function(){
        return 	<div className = "ez-login">
            <div className="row title">
                <h1>登录</h1>
            </div>
            <div className="row account">
                <label>用户</label>
                <input type="text" defaultValue="Jason" ref="account"/>
            </div>
            <div className="row pass">
                <label>密码</label>
                <input type="text" ref="password"/>
            </div>
            <div className="row remember">
                <input type="checkbox" defaultChecked/>
                <span>记住密码</span>
            </div>
            <div className="row button">
                <button onClick={this.auth}>登录</button>
            </div>
        </div>;
    }
});
//渲染
React.render(<EzLoginComp/>,document.querySelector("#content"));