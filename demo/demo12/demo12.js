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
    * @Description: 多属性存储
    * @Copyright(©) 2015 by xiaomo.
    **/


var EzSliderComp = React.createClass({
    //设置初始状态
    getInitialState : function(){
        return {
            moving : false, //标记是否在移动推子手柄
            oTop : 191, //在推子上按下鼠标时，推子手柄的top属性值
            left : 41,  //推子手柄的left属性值，保持不变
            top : 191,  //推子手柄的top属性值，根据鼠标位置变化
            value : 0.00 //根据推子手柄位置换算的0~10区间的值
        }
    },
    //在推子上按下鼠标时，设置moving标志
    onMouseDown : function(event){
        if(event.target.className != "knob") return;
        this.setState({moving :true,oTop:this.state.top,y:event.clientY})
    },
    //如果moving标志已经置位，则根据鼠标位置设置推子手柄位置
    onMouseMove : function(event){
        //禁止浏览器默认行为
        event.preventDefault();
        if(!this.state.moving) return;

        //计算推子手柄位置
        var deltaY = event.clientY - this.state.y,
            nTop = this.state.oTop + deltaY,
            value = (10 - (nTop - 38)*10/(191-38)).toFixed(2);

        //如果推子手柄top值在有效范围内，设置推子位置和值
        if(nTop <= 191 && nTop >= 38){
            this.setState({top:nTop,value : value});
            this.props.onChange && this.props.onChange(value);
        }
    },
    //松开鼠标时，复位moving标志
    onMouseUp : function(event){
        this.setState({moving:false});
    },
    render : function(){

        //根据当前状态设置推子手柄位置和鼠标形状
        var knobStyle = {
            left : this.state.left,
            top : this.state.top,
            cursor : this.state.moving ? "pointer" : "default"
        };
        //属性包
        var props = {
            className : "ez-slider",
            onMouseDown : this.onMouseDown,
            onMouseUp : this.onMouseUp,
            onMouseMove : this.onMouseMove
        };

        return 	<div {...props}>
            <img className="bg" src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/slider-bg.png" />
            <img className="knob" src="http://www.hubwiz.com/course/552762019964049d1872fc88/img/slider-knob.png" style={knobStyle}/>
        </div>;
    }
});
//渲染
React.render(
    <div>
        <EzSliderComp/>
        <EzSliderComp/>
        <EzSliderComp/>
        <EzSliderComp/>
    </div>,
    document.querySelector("#content"));