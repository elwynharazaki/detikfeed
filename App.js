import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import NewsFeed from './src/components/NewsFeed';

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#F3F1F6' }}>
			<Header />
				<NewsFeed />
		</View>
	);
};

export default App;
