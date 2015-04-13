var React = require('react');
var Router = require('react-router');
var $ = require('jquery');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Set = require('./components/Set');
var Get = require('./components/Get');
var About = require('./components/About');

var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function () {
        var name = this.context.router.getCurrentPath();
        return (
            <div>
                <ul>
                    <li><Link to="set">Set</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
                <RouteHandler key={name} />
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route url="/key/" name="set" handler={Set} />
        <Route name="get" handler={Get} path="/get/:id" />
        <Route name="about" handler={About} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('snappass'));
});
