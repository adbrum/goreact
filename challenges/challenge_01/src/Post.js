import React from "react";
import "./style.css";
import PostHeader from "./PostHeader";

const Post = props => {
	const { description } = props.data;
	return (
		<div className="box">
			<div>
				<PostHeader data={props.data} />
				<hr />
				<div>{description}</div>
			</div>
		</div>
	);
};

export default Post;
