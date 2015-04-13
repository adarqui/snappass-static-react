var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <div className="page-header">
                <h1>SnapPass <small>Send one-time passwords to friends.</small></h1>
            </div>
        );
    }
});

module.exports = Header;
