var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <ol>
                    <li><a target="_blank" href="https://github.com/pinterest/snappass">https://github.com/pinterest/snappass</a></li>
                    <li><a target="_blank" href="https://github.com/adarqui/snappass-nodejs-atrocious">https://github.com/adarqui/snappass-nodejs-atrocious</a></li>
                    <li><a target="_blank" href="https://github.com/adarqui/snappass-core-go">https://github.com/adarqui/snappass-core-go</a></li>
                    <li><a target="_blank" href="https://github.com/adarqui/snappass-backend-goji">https://github.com/adarqui/snappass-backend-goji</a></li>
                    <li><a target="_blank" href="https://github.com/adarqui/snappass-frontend-react">https://github.com/adarqui/snappass-frontend-react</a></li>
                </ol>
            </div>
        );
    }
});

module.exports = About;
