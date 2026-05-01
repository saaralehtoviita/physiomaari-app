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
  heading: {
    fontSize: typography.fontSize.large,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  subHeading: {
    fontSize: typography.fontSize.medium,
    marginBottom: 5,
  },
  sessionInput: {
    flex: 1,
    width: 100,
    backgroundColor: colors.background,
  },
  container: {
    margin: 10,
  },
  containerSession: {
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  sessionLabel: {
    width: 100,
  },
  basicButton: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: 2,
    marginTop: 2,
  },
  viewButton: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.view,
    color: colors.primary,
    marginHorizontal: 16,
  },
  completeButton: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.completedLight,
    //color: colors.white,
    marginTop: 5,
  },
  buttonDate: {
    width: "100%",
    borderRadius: 2,
    backgroundColor: colors.background,
  },
  surfaceTop: {
    padding: 12,
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: colors.background,
  },
  surfaceContent: {
    padding: 6,
    alignItems: "flex-start",
    width: "100%",
    margin: 6,
    backgroundColor: colors.backgroundDarker,
    borderRadius: 5,
  },
  surfaceCards: {
    alignItems: "stretch",
    backgroundColor: colors.backgroundDarker,
  },
  accordion: {
    backgroundColor: colors.backgroundDarker,
    color: colors.text,
    borderRadius: 12,
    elevation: 2,
  },
  accordionSurface: {
    paddingBottom: 10,
    backgroundColor: colors.background,
    borderRadius: 5,
  },
  mediumTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 7,
  },
  smallTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  description: {
    fontWeight: 600,
    fontSize: 15,
    fontStyle: "italic",
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 5,
  },
});
