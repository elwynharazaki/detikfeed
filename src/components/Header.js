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
      backgroundColor: 'transparent',
   },
   
   textStyle: {
      color: '#F9F9F9',
      fontSize: 25,
      padding: 8
   }
};

export default Header;
