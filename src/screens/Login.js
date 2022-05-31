import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import Svg, { Path } from "react-native-svg";
import { icons } from "../constants";
import NotchResponsive from "../components/NotchResponsive";
import { TextInput } from "react-native-paper";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.root}>
      {/*<NotchResponsive color={COLORS.primary} />*/}

      <View style={styles.topBox}>
        <Image resizeMode={"cover"} source={icons.logo} style={styles.logo} />
        <View>
          <Text style={{ ...FONTS.h1, fontWeight: "900", color: COLORS.white }}>The Test</Text>
          <Text style={{ ...FONTS.body6, fontWeight: "500", color: "#0C0C0C" }}>Powered by Lox</Text>
        </View>


      </View>

      <View style={styles.lowerBox}>
        <Svg
          width="361"
          height="320"
          viewBox="0 0 361 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M160.194 7.9621L9.69437 146.346C3.51601 152.027 0 160.036 0 168.429V289.742C0 306.31 13.4314 319.742 30 319.742H331C347.569 319.742 361 306.31 361 289.742V168.429C361 160.036 357.484 152.027 351.306 146.346L200.806 7.9621C189.326 -2.59321 171.674 -2.59321 160.194 7.9621Z"
            fill="white"
          />
        </Svg>

        <View style={styles.loginBox}>
          <Text style={styles.loginTxt}>Login</Text>

          <TextInput
            label="Email"
            value={email}
            underlineColor={COLORS.black}
            style={{
              backgroundColor: "white",
              // color: "black"
            }}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            label="Password"
            value={password}
            underlineColor={COLORS.black}

            style={{
              backgroundColor: "white",
              // color: "black"
            }}
            onChangeText={text => setPassword(text)}
          />
        </View>


        <View style={styles.bottomBox} />


      </View>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: COLORS.primary,
  },
  text: {
    ...FONTS.body10,
  },
  topBox: {
    flex: 0.5,
    // flexGrow:1,
    width: SIZES.width,
    height: SIZES.height * 0.4,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

  },
  lowerBox: {
    flex: 2,
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.4,
  },
  bottomBox: {
    // flex: ,
    backgroundColor: COLORS.white,
    bottom: SIZES.font1,
    height: SIZES.height * 0.5,
  },
  loginBox: {
    position: "absolute",
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.2,
    // backgroundColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    marginTop: SIZES.height * 0.16,
  },
  loginTxt: {
    ...FONTS.h1,
    color: COLORS.black,
    alignSelf: "center",
  },
  logo: {
    height: SIZES.font1 * 2,
    width: SIZES.font1 * 2,
  },
});
