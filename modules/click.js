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
    * @Date: 2016/1/27 19:54
    * @Description: todo
    * @Copyright(©) 2015 by xiaomo.
    **/
var MessageBox = React.createClass({
    alertMe: function () {
        alert('你刚才点了我一下。。。');
    },
    render: function () {
        var SubMessages = [];

        // 这里有两个坑 1.onClick的C是大写，2 this.alertMe 不需要括号 加括号会报一大坨的错！！！！！！
        return ( <button onClick={this.alertMe}>确定</button> )
    }
});

