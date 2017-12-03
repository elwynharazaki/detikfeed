import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const NewsDetail = (props) => {
   const {
      dateFeedStyle,
      descFeedStyle,
      headFeedStyle,
      titleFeedStyle
   } = styles;

   const {
      description,
      pubDate,
      title
   } = props.news;

   const url = props.news.enclosure['0'].$.url;
   const thumbnail = url.replace(/^http:\/\//i, 'https://');
   
   const link = props.news.link['0'];

   const onTitlePressed = () => {
      Linking.openURL(link);
   };

   return (
      <Card>
         <CardSection>
            <View>
               <Image
                  style={{ height: 50, width: 89 }}
                  source={{ uri: thumbnail }}
               />
            </View>

            <View style={headFeedStyle}>
               <TouchableOpacity onPress={onTitlePressed}>
                  <Text style={titleFeedStyle}>{title}</Text>
               </TouchableOpacity>
               <Text style={dateFeedStyle}>{pubDate}</Text>
            </View>
         </CardSection>

         <CardSection>
            <View>
               <Text style={descFeedStyle}>{((String(description)).split('>'))[1]}</Text>
            </View>
         </CardSection>
      </Card>
   );
};

const styles = {
   dateFeedStyle: {
      color: '#3E206B',
      fontSize: 10
   },

   descFeedStyle: {
      color: '#8B79A6',
      fontSize: 13
   },

   headFeedStyle: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginLeft: 5
   },

   titleFeedStyle: {
      color: '#352749',
      fontSize: 15
   }
};

export default NewsDetail;
