import { Image, StyleProp, ImageStyle } from "react-native";

const Sprite = ({
  num,
  style,
}: {
  num: string;
  style?: StyleProp<ImageStyle>;
}) => (
  <Image
    source={{
      width: 100,
      height: 100,
      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${num}.png`,
    }}
    style={style}
  />
);

export default Sprite;
