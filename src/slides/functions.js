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
			<Text textSize={'36px'} textColor="tertiary">Functions</Text>

			<CodePane source={`@function is-number($value) {
  @return type-of($value) == 'number';
}
 
@function is-time($value) {
  @return is-number($value) and index('ms' 's', unit($value)) != null;
}`} lang="css" theme="light" textSize={'17px'} />

			<Text textSize={'30px'} textColor="primary">For superheroes</Text>

			<br />

			<Link href={'https://css-tricks.com/snippets/sass/advanced-type-checking/'}>
    			<Text textSize={'28px'} textColor="primary">
    				Ref: Advanced Type Checking
    				<br />
    				<Text textSize={'22px'} textColor="primary">https://css-tricks.com/snippets/sass/advanced-type-checking/</Text>
    			</Text>
    		</Link>
		</div>
	);
}

export default Functions;