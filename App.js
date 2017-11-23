import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

// <Image style={{height:25, width:25}} source={require(props.imageUri)} />
// <Image source={{uri: props.imageUri }} />

class AView extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', paddingVertical: '2%',paddingHorizontal: '5%', borderWidth: 1}}>
        <Image
         style={{width: 50, height: 100, marginRight: '5%'}}
         // source={require('./images/iPhone.png')}
         // source={this.props.image1}
         // source={{uri: this.props.image1}}
         source={this.props.image1}
        />
        <View style={{paddingTop: '5%'}}>
          <Text>{this.props.name}</Text>
          <Text style={{'color' : 'grey', fontSize: 10}}>by {this.props.brand}</Text>
          <Text style={{'color' : '#BC1C1C', marginTop: 10, fontSize: 18}}>${this.props.price}</Text>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  onPressLearnMore() {
    console.log("Here")
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data = {[
            {key: "iPhone", name: "iPhone 6 (16GB, Black)", brand: "Apple", price: 399, image: require("./images/iPhone.png")},
            {key: "s8", name: "Samsung Galaxy S8 (64GB, Black)", brand: "Samsung", price: 799, image: require("./images/samsung-s8.png")},
            {key: "pixel", name: "Google Pixel (32GB, Very Silver)", brand: "Google", price: 699, image: require("./images/pixel.png")},
            {key: "zte", name: "ZTE Max XL (16GB)", brand: "ZTE", price: 129, image: require("./images/zte-max.png")},
          ]}

          renderItem = {({item}) => 
            <AView name={item.name} brand={item.brand} price={item.price} image1={item.image}/>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
