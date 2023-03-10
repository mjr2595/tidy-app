import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";

export const TaskModal = ({ visible, showTidyItem, closeTidyItem, time }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          closeTidyItem();
        }}
      >
        <View style={styles.centeredView}>
          <View className="bg-white" style={styles.modalView}>
            <Text style={styles.modalText}>How about this {time} minute task?</Text>
            <Pressable className="bg-blue-500" style={[styles.button]} onPress={() => closeTidyItem()}>
              <Text style={styles.textStyle}>yah</Text>
            </Pressable>
            <Pressable className="bg-red-500" style={[styles.button]} onPress={() => closeTidyItem()}>
              <Text style={styles.textStyle}>nah</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
