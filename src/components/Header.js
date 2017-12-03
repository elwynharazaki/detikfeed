import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { headerStyle, textStyle } = styles;
   
   return (
      <View style={headerStyle}>
         <Text style={textStyle}>{props.headerTitle}</Text>
      </View>
   );
};

const styles = {
   headerStyle: {
      alignItems: 'center',
      backgroundColor: '#3E206B',
      elevation: 2,
      shadowColor: '#083861',
      shadowOpacity: 0.9
   },
   
   textStyle: {
      color: '#F9F9F9',
      fontSize: 25,
      padding: 5
   }
};

export default Header;
