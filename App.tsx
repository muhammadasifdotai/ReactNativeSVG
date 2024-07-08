import React from "react";
import { Text, View } from "react-native";
import Home from "../ReactNativeSVG/src/assets/svg/Home.svg";
import HeartOutline from "../ReactNativeSVG/src/assets/svg/HeartOutline.svg";
import PlusCircle from "../ReactNativeSVG/src/assets/svg/PlusCircle.svg";
import Search from "../ReactNativeSVG/src/assets/svg/Search.svg";
import UserCircleO from "../ReactNativeSVG/src/assets/svg/UserCircleO.svg";

export default function App(): JSX.Element {
  return (
    <View>
      <Text>Alhamdulillah</Text>
      <Home width={120} height={40} fill={"black"} />
      <HeartOutline width={120} height={40} fill={"black"} />
      <PlusCircle width={120} height={40} fill={"black"} />
      <Search width={120} height={40} fill={"black"} />
      <UserCircleO width={120} height={40} fill={"black"} />
    </View>
  )
}