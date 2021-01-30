import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import { Images,  } from "../constants";

const profile = {
  avatar: require('../assets/images/SelfiePic1.jpg'),
  name: "Mikaela Masterson",
  type: "In Relationship",
  plan: "Pro",
  rating: 4.8
};


class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product: product })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Block style={{display: 'flex', flexDirection: 'row', margin: 10, alignContent: 'flex-end'}}>
              <Image source={require('../assets/images/SelfiePic1.jpg')} style={styles.avatar} />
              <Block flex space="between" style={styles.productDescription}>
                  <Text size={14} style={{ fontWeight: 'bold'}}>{profile.name}</Text>
              </Block>
            </Block>
            <Image source={require('../assets/images/TogetherPic1.jpg')} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product: product })}>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>{product.title}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
    height: 40
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: height - theme.SIZES.BASE * 30,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },  
  avatar: {
    height: 25,
    width: 25,
    margin: 3,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE
  },
});