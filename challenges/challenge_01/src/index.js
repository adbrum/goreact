import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Post from "./Post";
import "./style.css";

class App extends Component {
	state = {
		posts: [
			{
				id: "1",
				author: "Diego Schell Fernandes",
				avatar:
					"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png",
				date: "há 3 min",
				description:
					"Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus."
			},
			{
				id: "2",
				author: "Rubia Savolksi",
				avatar:
					"https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png",
				date: "há 10 min",
				description:
					"Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
			},
			{
				id: "3",
				author: "Mr. Mustache",
				avatar:
					"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png",
				date: "há 20 min",
				description:
					"Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere					posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam					interdum dolor aliquet dolor sollicitudin fermentum."
			}
		]
	};

	render() {
		return (
			<Fragment>
				<Header />
				{this.state.posts.map(post => <Post data={post} key={post.id} />)}
			</Fragment>
		);
	}
}

render(<App />, document.getElementById("app"));
