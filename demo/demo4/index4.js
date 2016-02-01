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
    * @Date: 2016/1/23 13:38
    * @Description: 转换jsx
    * @Copyright(©) 2015 by xiaomo.
    **/


    /**
     * 模拟JSX语法转换
     */
    var transform = function(){
        var el = document.getElementById("demo");
        //1.将原始JSX代码转换为JS代码
        var jsxt = JSXTransformer.transform(el.text);

        var headEl = document.querySelector("head"),
        scriptEl = document.createElement("script");

        //2.设置新的script元素的内容为转换后的代码
        scriptEl.text = jsxt.code;
        scriptEl.type = "text/javascript";

        //3.将新的script元素追加到文档head元素
        headEl.appendChild(scriptEl);
    };
