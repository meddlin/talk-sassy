import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane
} from 'spectacle';

const Nesting = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">Nesting</Text>

			<CodePane source={`/* This SCSS */
.container {
    width: 100%;
    h1 {
        color: red;
    }
}

/* Produces... */
.container {
    width: 100%;
}

.container h1 {
    color: red;
}`} lang="css" theme="light" textSize={'17px'} />

			<Text textSize={'30px'} textColor="primary">Finally scoping begins to make sense</Text>
	
			<br />

			<Link href={'https://scotch.io/tutorials/getting-started-with-sass'}>
    			<Text textSize={'28px'} textColor="primary">
    				Ref: Getting Started with Sass
    				<br />
    				<Text textSize={'22px'} textColor="primary">https://scotch.io/tutorials/getting-started-with-sass</Text>
    			</Text>
    		</Link>

		</div>
	);
}

export default Nesting;