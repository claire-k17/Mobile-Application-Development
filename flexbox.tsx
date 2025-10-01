import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Flexbox = () => {
    return (
      <> 
        <View style={style.container}>
            <View style={style.redContainer} />
            <View style={style.greenContainer} />
            <View style={style.blueContainer} />
        </View>
        <View style={style.container2}>
            <View style={style.redBox} />
            <View style={style.greenBox} />
            <View style={style.blueBox} />
        </View>
      </>
    );
};

export default Flexbox;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'yellow',
    },
    redContainer: {
        flex: 1,
        backgroundColor: 'red',
    },
    greenContainer: {
        flex: 4,
        backgroundColor: 'green',
    },
    blueContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
    justifyContent: 'space-evenly', //main axis
    alignItems: 'flex-end', //cross axis
    backgroundColor: 'pink',
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    },
})