import React from 'react';
import {
	Heading,
	Link,
	Text,
	CodePane,
	List,
	ListItem
} from 'spectacle';
import './further-reading.css';

const FurtherReading = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Further Reading</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Interesting</Text>
		        	<ListItem>
		        		<Link href={'https://css-tricks.com/the-extend-concept/'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">@extend</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://cssinjs.org/?v=v9.8.7'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">SCSS + CSS in JS</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://vanseodesign.com/css/sass-the-import-directive/'}>
		        			<Text textSize={'28px'} textColor="primary">@import</Text>
		        		</Link>
		        	</ListItem>
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Integrating</Text>
		        	<ListItem>
		        		<Link href={'https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">SCSS in Vue.js</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">SCSS in React (w/ CRA)</Text>
		        		</Link>
		        	</ListItem>       	
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Moar!</Text>
		        	<ListItem>
		        		<Link href={'https://css-tricks.com/'}>
		        			<Text textSize={'28px'} textColor="primary">CSS-Tricks</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://davidtheclark.com/its-time-for-everyone-to-learn-about-postcss/'}>
		        			<Text textSize={'28px'} textColor="primary">PostCSS</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://github.com/postcss/postcss-scss'}>
		        			<Text textSize={'28px'} textColor="primary">PostCSS w/ SCSS</Text>
		        		</Link>
		        	</ListItem>
		        </List>
		    </div>
		    <List>
	        	<ListItem>
	        		<Text textSize={'28px'} textColor="primary">Slide Deck</Text>
	        		<Link href={'https://github.com/meddlin/talk-sassy'}>
	        			<Text textSize={'28px'} textColor="primary">https://github.com/meddlin/talk-sassy</Text>
	        		</Link>
	        	</ListItem>
	        </List>
			
		</div>

		
	);
}

export default FurtherReading;