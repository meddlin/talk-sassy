import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane
} from 'spectacle';

const MathFunctions = () => {
	return (
		<div>
			<Text textSize={'36px'} textColor="tertiary">MathFunctions + Functions</Text>

			<CodePane source={`/* defined in SCSS */
@function column-width($col, $total) {
 @return percentage($col/$total);  
}

/* used like this */
.col-3 {
 width: column-width(3, 8);
}

.col-5 {
 width: column-width(5, 8);
}

/* compiles to this in CSS */
.col-3 {
 width: 37.5%;
}

.col-5 {
 width: 62.5%;
}
				`} lang="css" theme="light" textSize={'17px'} />

			<br />

			<Link href={'https://vanseodesign.com/css/custom-sass-functions/'}>
    			<Text textSize={'28px'} textColor="primary">
    				Ref: Custom SCSS Functions (with math)
    				<br />
    				<Text textSize={'22px'} textColor="primary">https://vanseodesign.com/css/custom-sass-functions/</Text>
    			</Text>
    		</Link>
		</div>
	);
}

export default MathFunctions;