import React from "react";
import {
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ListView
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from "../components/";
import { Images, AppTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const profile = {
  avatar: require('../assets/images/SelfiePic1.jpg'),
  name: "Mikaela Masterson",
  type: "In Relationship",
  plan: "Pro",
  rating: 4.8
};

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Home"
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.23} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {}}
        >
          <Block style={styles.profile}>
            <Image source={profile.avatar} style={styles.avatar} />
            <Block style={{margin: 20}}>
            <Text h5 color={"white"}>
              {profile.name}
            </Text>
            <Block row>
          <Block middle style={styles.pro}>
            <Text size={16} color="white">
              {profile.plan}
            </Text>
          </Block>
          <Text size={16} muted style={styles.seller}>
            {profile.type}
          </Text>
        </Block>
            </Block>

          </Block>
        </TouchableWithoutFeedback>

      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
      {/* <Block flex={0.25} style={{ paddingLeft: 7, paddingRight: 14 }}>
        <DrawerCustomItem
          title="Sign In"
          navigation={navigation}
          focused={state.index === 8 ? true : false}
        />
        <DrawerCustomItem
          title="Sign Up"
          navigation={navigation}
          focused={state.index === 9 ? true : false}
        />
      </Block> */}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#000000',
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    // paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "flex-end"
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end"
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: theme.SIZES.BASE / 2
  },
  avatar: {
    marginTop: 25,
    height: 50,
    width: 50,
    borderRadius: 15,
    marginBottom: theme.SIZES.BASE
  },
  pro: {
    backgroundColor: AppTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38
  },
  seller: {
    marginRight: 16
  },
});

export default CustomDrawerContent;
