import React from 'react';
import {
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const Purpose = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">A new way to write CSS</Text>

			<List>
				<ListItem textColor="primary">Variables</ListItem>
				<ListItem textColor="primary">Nesting</ListItem>
				<ListItem textColor="primary">Math</ListItem>
				<ListItem textColor="primary">Functions</ListItem>
				<ListItem textColor="primary">Mixins</ListItem>
			</List>

			<Text textSize={'18px'} textColor="tertiary">Only the building blocks for what we can do.</Text>

			{/*https://sass-lang.com/guide*/}
		</div>
	);
}

export default Purpose;