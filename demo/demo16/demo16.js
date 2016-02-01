var UserGist = React.createClass({
    getInitialState: function () {
        return {
            blogs:[]
        };
    },

    componentDidMount: function () {
        $.ajax({
            url: this.props.source,
            method: "GET",
            dataType: "json"
        }).success(function (data) {
            if (this.isMounted()) {
                this.setState({
                    blogs: data
                });
            }
            console.log(data);
        }.bind(this));
    },

    render: function () {
        var msgs = [];
        this.props.blogs.forEach(function(msg,index){
            msgs.push(
                <p>码农说： {msg.title}</p>
            )
        });
        return (
            <div>
                {msgs}
            </div>
        );
    }
});

ReactDOM.render(
    <UserGist source="http://localhost/editBlog/2"/>,
    document.getElementById("content")
);