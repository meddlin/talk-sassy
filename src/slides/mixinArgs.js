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
			<Text textSize={'36px'} textColor="tertiary">Mixins w/ Args</Text>

			<CodePane source={`@mixin grid($flex) {
    @if $flex {
        @include flex;
    } @else {
        display: block;
    }
}

/* Then...use it */
@include grid(true);`} lang="scss" theme="light" textSize={'17px'} />

			<Text textSize={'30px'} textColor="primary">For when you want to give magic powers to your re-used "style chunks"</Text>
		</div>
	);
}

export default MixinsArgs;