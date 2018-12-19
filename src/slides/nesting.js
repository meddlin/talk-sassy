import React from 'react';
import {
	Heading,
	Link,
	Text
} from 'spectacle';

const Nesting = () => {
	return (
		<div>
			<CodePane source={`.container {
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
		</div>

		/*https://scotch.io/tutorials/getting-started-with-sass*/
	);
}

export default Nesting;