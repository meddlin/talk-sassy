import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane
} from 'spectacle';

const Mixins = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">Mixins</Text>

			<CodePane source={`@mixin flex {
    // write the css here
    display: -webkit-flex;
    display: flex;
}

/* Then...use it */
.row {
    @include flex;
}`} lang="css" theme="light" textSize={'17px'} />

			<Text textSize={'30px'} textColor="primary">For when you want to use the same "mix" of stuff, but all over the place</Text>

			{/*https://scotch.io/tutorials/how-to-use-sass-mixins*/}
		</div>
	);
}

export default Mixins;