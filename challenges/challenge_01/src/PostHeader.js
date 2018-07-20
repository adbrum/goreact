import React from "react";

const PostHead = ({ data }) => {
	return (
		<div className="box">
			<h2>
				<img src={data.avatar} width="40" alt="twitter" />
				{data.author}
			</h2>
			<h3>{data.date}</h3>
		</div>
	);
};

export default PostHead;
