// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Layout = require('grommet/components/Layout');
var Panel = require('grommet/components/Panel');

var TodoDashboard = React.createClass({

  render: function () {
    return (
      <Layout centerColumn={true}>
        <Panel title="Hello World!">
          <p>If you&#39;ve made here, congratulations, you&#39;re inside Grommet world.</p>
          <p>Don&#39;t forget to come back to <a href="http://ligo.usa.hp.com/docs/hpe/#/documentation">Hello World</a> page to continue your work.</p>
        </Panel>
      </Layout>
    );
  }

});

module.exports = TodoDashboard;
