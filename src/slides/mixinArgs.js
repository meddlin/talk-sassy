import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane
} from 'spectacle';

const MixinsArgs = () => {
	return (
		<div>
			<Text textSize={'24px'} textColor="tertiary">Mixins w/ Args</Text>

			<CodePane source={`@mixin grid($flex) {
    @if $flex {
        @include flex;
    } @else {
        display: block;
    }
}

/* Then...use it */
@include grid(true);`} lang="css" theme="light" textSize={'17px'} />

			{/*https://scotch.io/tutorials/how-to-use-sass-mixins*/}
		</div>
	);
}

export default MixinsArgs;