import React from 'react';
import {
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const History = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">History: but why???</Text>

			<List>
				<ListItem textColor="primary">CSS has problems...</ListItem>
				<ListItem textColor="primary">Sass w/ Haml</ListItem>
				<ListItem textColor="primary">Sass whitespace driven...it's weird</ListItem>
				<ListItem textColor="primary">Sass? Less? BEM? ???</ListItem>

				<ListItem textColor="primary">Sass v3 -->  SCSS</ListItem>
			</List>

			<Text textSize={'30px'} textColor="tertiary">
				For our purposes...

				Sass == SCSS
			</Text>

			<br />
			<br />

			<Link href={'http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better'}>
    			<Text textSize={'28px'} textColor="primary">
    				Ref: Sass vs. SCSS
    				<br />
    				<Text textSize={'22px'} textColor="primary">http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better</Text>
    			</Text>
    		</Link>

		</div>
	);
}

export default History;