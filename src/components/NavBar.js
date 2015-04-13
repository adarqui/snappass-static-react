var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        return {
            locations: [{name:'set',title:'Set Password',active:''}, {name:'about',title:'About SnapPass',active:''}]
        };
    },
    render: function() {
        var locations = this.state.locations.map(function(location) {
            var active = location.active || this.isActive(location.name) ? "active" : "";
//            var active = RouterisActive(location.name);
            return (
                <li className={active}><Link to={location.name}>{location.title}</Link></li>
            );
        }.bind(this));
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-collapse">
                        <ul className="nav navbar-nav">
                            {locations}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;
