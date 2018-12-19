import React from 'react';
import {
	Heading,
	Link,
	Text
} from 'spectacle';

const Purpose = () => {
	return (
		<div>
			<Text textSize={'24px'} textColor="tertiary">A new way to write CSS</Text>

			<ul>
				<li>Variables</li>
				<li>Nesting</li>
				<li>Math</li>
				<li>Functions</li>
				<li>Mixins</li>
			</ul>

			<Text textSize={'18px'} textColor="tertiary">Only the building blocks for what we can do.</Text>

			{/*https://sass-lang.com/guide*/}
		</div>
	);
}

export default Purpose;