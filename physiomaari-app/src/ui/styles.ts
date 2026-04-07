import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  bottomTabBar: {
    backgroundColor: colors.secondary,
    height: 100,
    elevation: 0,
    shadowOpacity: 0,
  },
  profileInfo: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
    padding: 10,
    borderRadius: 10,
  },
  profileScreenBackground: {
    backgroundColor: colors.background,
  },
  userList: {
    fontSize: typography.fontSize.medium,
    marginLeft: 20,
    padding: 10,
  },
});
