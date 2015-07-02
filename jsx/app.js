/** @jsx React.DOM */
var APP = 
	React.createClass({
		getInitialState: function() {
			return {data: [
					{val:9},
					{val:3},
					{val:4},
					{val:2},
					{val:5}
				]}
		},
		render: function() {
			var items = this.state.data.map(function(item){
				return <li>{ item.val }</li>
			})
			return <ul>{ items }</ul>
		}
	});
React.render(
	<APP />,
	document.getElementById('app'))