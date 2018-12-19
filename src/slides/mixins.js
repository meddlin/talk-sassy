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
			<Text textSize={'24px'} textColor="tertiary">Mixins</Text>

			<CodePane source={`@mixin flex {
    // write the css here
    display: -webkit-flex;
    display: flex;
}

/* Then...use it */
.row {
    @include flex;
}`} lang="css" theme="light" textSize={'17px'} />

			{/*https://scotch.io/tutorials/how-to-use-sass-mixins*/}
		</div>
	);
}

export default Mixins;