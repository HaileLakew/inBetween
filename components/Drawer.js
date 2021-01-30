import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text, theme } from "galio-framework";

import AppTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  render() {
    const { title, focused, navigation } = this.props;
    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => navigation.navigate(title)}
      >
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null
          ]}
        >
          <Block flex={0.9}>
            <Text size={15} color={focused ? "white" : "black"}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 6
  },
  activeStyle: {
    backgroundColor: AppTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2
  }
});
