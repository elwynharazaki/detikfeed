import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { parseString } from 'react-native-xml2js';

import NewsDetail from './NewsDetail';

class NewsFeed extends Component {
	state = { news: [] };

   componentWillMount() {
      const url = 'https://rss.detik.com/index.php/inet';
      
		axios.get(url)
			.then(response => 
				parseString(response.data, (err, result) => {
					this.setState({ news: JSON.parse(JSON.stringify(result.rss.channel['0'].item)) });
            })
			);
	}

	renderNewsFeed() {
		if (this.state.news.length > 0) {
			return this.state.news.map((data, index) =>
				<NewsDetail key={index} news={data} />
			);
      }
	}

	render() {
		console.log(this.state.news);

		return (
			<ScrollView>
				{this.renderNewsFeed()}
			</ScrollView>
		);
	}
}

export default NewsFeed;
