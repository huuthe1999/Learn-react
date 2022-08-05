import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = ({ type, color = '#555', height, width }) => {
	return (
		<ReactLoading
			type={type}
			color={color}
			height={height}
			width={width}
			className='loading'
		/>
	);
};

export default Loading;
