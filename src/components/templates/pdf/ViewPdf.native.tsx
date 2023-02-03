import React from 'react';
import {StyleSheet, Dimensions, View, Platform} from 'react-native';


const ViewPdfNative = () => {
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  if (Platform.OS === 'web') {
    return <div style={{backgroundColor:'lightblue'}}>WEB VIEW PDF</div>;
  }
  const Pdf = require('react-native-pdf');
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages: any) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page: any) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error: any) => {
          console.log(error);
        }}
        onPressLink={(uri: any) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default ViewPdfNative;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
