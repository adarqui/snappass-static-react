var React = require('react');
var Router = require('react-router');
var $ = require('jquery');

var Get = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
            password: ''
        };
    },
    getPassword: function() {
        $.ajax({
            type: 'GET',
            url: '/key/'+this.getParams().id,
            dataType: 'text',
            success: function(data) {
                this.setState({ password: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err);
            },
        });
    },
    componentDidMount: function() {
        this.getPassword();
    },
    render: function () {
        return (
            <div>
                <p>{this.state.password}</p>
            </div>
        );
    }
});

module.exports = Get;
