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
      marginTop: 20,
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.9
   },
   
   textStyle: {
      color: '#F9F9F9',
      fontSize: 22,
      padding: 1
   }
};

export default Header;
