import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const logoWidth = screenWidth * 0.9;
const logoHeight = (logoWidth * 115) / 505;

const exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.colorBox}></View>
        <View style={[styles.colorBox, styles.yellow]}></View>
        <View style={styles.colorBox}></View>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require("./logo-with-motto-3.png")}
          style={{
            width: logoWidth,
            height: logoHeight,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />
        <Text style={styles.title}>Universitas Klabat</Text>
        <Text style={styles.subtitle}>Pathway to Excellence</Text>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.colorBox}></View>
        <View style={[styles.colorBox, styles.yellow]}></View>
        <View style={styles.colorBox}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "center",
    padding: 10,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "center",
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 180,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
  },
  colorBox: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
  yellow: {
    backgroundColor: "yellow",
  },
});

export default exercise4;