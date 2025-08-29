import { Dimensions, PixelRatio } from "react-native";

export const isTablet = () => {
  const { width, height } = Dimensions.get("window");
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;

  // If width or height is >= 900px → assume tablet
  return (
    (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) ||
    (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920))
  );
};
