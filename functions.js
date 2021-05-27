import { PixelRatio, Platform } from "react-native";

export function getScale() {
  const pixelRatio = PixelRatio.get();
  if (pixelRatio < 2) {
    return 1;
  }

  if (pixelRatio >= 2 && pixelRatio < 3) {
    return 2;
  }

  return 3;
}

export function isAndroid() {
  return Platform.OS === "android";
}