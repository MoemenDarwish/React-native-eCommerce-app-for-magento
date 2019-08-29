import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AppIcon } from '../Icons'
import { AppText } from '../AppText'
import { COLORS, SCREEN } from '../../common';

const AccountCard = ({ AccountCardText, name, style, onPress, navigation }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}
      navigation={navigation}
    >
      <AppIcon name={name} size={50} style={styles.icon} />
      <AppText style={styles.AccountCardText}>{AccountCardText}</AppText>
    </TouchableOpacity>
  )
}

export { AccountCard }

const styles = StyleSheet.create({
  container: {
    height: SCREEN.WIDTH * 0.40,
    width: SCREEN.WIDTH * 0.46,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0.5 },
    backgroundColor:COLORS.background,
    borderRadius: 3
  },
  AccountCardText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.text_dark
  },
  icon: {
    color: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
