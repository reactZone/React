var UserGist = React.createClass({
    getInitialState: function () {
        return {
            lastGistUrl: '',
            blogs:[]
        };
    },

    componentDidMount: function () {
        this.props.blog=[];
        $.ajax({
            url: this.props.source,
            method: "GET",
            dataType: "jsonp"
        }).success(function (data) {
            console.log(data);
        });
    },

    render: function () {
        return (
            <div>

            </div>
        );
    }
});

ReactDOM.render(
    <UserGist source="http://localhost/editBlog/2"/>,
    document.getElementById("content")
);