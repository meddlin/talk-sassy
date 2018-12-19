import React from 'react';
import {
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const Running = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">Running</Text>

			<List>
				<ListItem textColor="primary">npm/yarn -- Node/JS</ListItem>
				<ListItem textColor="primary">choco -- Windows/Dart</ListItem>
			</List>

			<Text textSize={'30px'} textColor="tertiary">Including it in JS frameworks will often call for node-sass package</Text>

			<br />
			<br />

			<Link href={'https://sass-lang.com/install'}>
    			<Text textSize={'28px'} textColor="primary">
    				Ref: Install Sass/SCSS
    				<br />
    				<Text textSize={'22px'} textColor="primary">https://sass-lang.com/install</Text>
    			</Text>
    		</Link>

		</div>
	);
}

export default Running;