var React = require("React");

var Todo = React.createClass({
  render: function () {
    var {text, id} = this.props;
    return (
      <div>
        {id}. {text}      
      </div>
    )
  }
});

module.exports = Todo;