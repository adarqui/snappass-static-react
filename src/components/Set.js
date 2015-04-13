var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var Set = React.createClass({
    getInitialState: function() {
        return {
            result: ''
        };
    },
    setPassword: function(password) {
        $.ajax({
            type: 'POST',
            url: '/pass/'+password+'/day',
            dataType: 'text',
            success: function(data) {
                console.log('data',data);
                this.setState({result:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err);
                console.error(status, err.toString());
            }.bind(this)
        });
    },
    handleSubmit: function(e) {
        console.log('submit');
        e.preventDefault();
        var password = React.findDOMNode(this.refs.password).value;
        if (!password) {
            return;
        }
        this.setPassword(password);
        React.findDOMNode(this.refs.password).value = '';
    },
    render: function () {
        var result_url = '/#get/'+this.state.result;
        return (
            <div>
                <form className="setForm" onSubmit={this.handleSubmit}>
                    <div className="form-group col-md-2">
                        <input className="form-control" type="text" placeholder="password" ref="password" />
                    </div>
                    <input className="btn btn-default" type="submit" value="Post" />
                </form>
                <a href={result_url}>{this.state.result}</a>
            </div>
        );
    }
});

module.exports = Set;
