import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane
} from 'spectacle';

const Functions = () => {
	return (
		<div>
			<Text textSize={'24px'} textColor="tertiary">Functions</Text>

			<CodePane source={`@function is-number($value) {
  @return type-of($value) == 'number';
}
 
@function is-time($value) {
  @return is-number($value) and index('ms' 's', unit($value)) != null;
}`} lang="css" theme="light" textSize={'17px'} />

			{/*https://css-tricks.com/snippets/sass/advanced-type-checking/*/}
		</div>
	);
}

export default Functions;