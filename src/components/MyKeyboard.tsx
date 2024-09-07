import * as React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";
import { evaluate } from 'mathjs';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const evaluateExpression = (expression: string): number | string => {
  try {
    return evaluate(expression);
  } catch (error) {
    return 'Error';
  }
};

export default function MyKeyboard() {
  const [input, setInput] = React.useState<string>("");
  const [history, setHistory] = React.useState<{ expression: string, result: string }[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const handleNumberPress = (buttonValue: string) => {
    if (buttonValue === "." && input.endsWith(".")) return;
    setInput(prevInput => prevInput + buttonValue);
  };

  const handleOperationPress = (buttonValue: string) => {
    try {
      let result: number | string;
      let expression = input;
  
      if (buttonValue === "C") {
        clearAll();
      } else if (buttonValue === "=") {
        result = evaluateExpression(input);
        expression = input;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "√") {
        result = Math.sqrt(parseFloat(input));
        expression = `√(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "x²") {
        result = Math.pow(parseFloat(input), 2);
        expression = `${input}²`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "sin") {
        const angle = parseFloat(input) * (Math.PI / 180);
        result = Math.sin(angle).toFixed(4);
        expression = `sin(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "cos") {
        const angle = parseFloat(input) * (Math.PI / 180);
        result = Math.cos(angle).toFixed(4);
        expression = `cos(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "tan") {
        const angle = parseFloat(input) * (Math.PI / 180);
        result = Math.tan(angle).toFixed(4);
        expression = `tan(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "ln") {
        result = Math.log(parseFloat(input));
        expression = `ln(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "log") {
        result = Math.log10(parseFloat(input));
        expression = `log(${input})`;
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "π") {
        result = Math.PI;
        expression = "π";
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else if (buttonValue === "e") {
        result = Math.E;
        expression = "e";
        setHistory(prevHistory => [...prevHistory, { expression, result: result.toString() }]);
        setInput(result.toString());
      } else {
        setInput(prevInput => prevInput + " " + buttonValue + " ");
      }
    } catch (error) {
      setInput('Error');
    }
  };
  

  const clearAll = () => {
    setInput("");
  };

  const handleDeletePress = () => {
    setInput(prevInput => prevInput.trim().slice(0, -1));
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    
    <View style={Styles.viewBottom}>
     
      <TouchableOpacity style={styles.historyIcon} onPress={toggleModal}>
        <Icon name="history" size={30} color={myColors.result} />
      </TouchableOpacity>

      
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={styles.screenFirstNumber}>
          {input || "0"}
        </Text>
      </View>

      
      <View style={Styles.row}>
        <Button title="sin" onPress={() => handleOperationPress("sin")} />
        <Button title="cos" onPress={() => handleOperationPress("cos")} />
        <Button title="tan" onPress={() => handleOperationPress("tan")} />
        <Button title="ln" onPress={() => handleOperationPress("ln")} />
        <Button title="log" onPress={() => handleOperationPress("log")} />
      </View>
      <View style={Styles.row}>
        <Button title="√" onPress={() => handleOperationPress("√")} />
        <Button title="π" onPress={() => handleOperationPress("π")} />
        <Button title="C" onPress={clearAll} />
        <Button title="(" onPress={() => handleOperationPress("(")} />
        <Button title=")" onPress={() => handleOperationPress(")")} />
      </View>
      <View style={Styles.row}>
        <Button title="x²" onPress={() => handleOperationPress("x²")} />
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="+" onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="%" onPress={() => handleOperationPress("%")} />
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="e" onPress={() => handleOperationPress("e")} />
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="x" onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="DEL" onPress={handleDeletePress} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="=" isBlue onPress={() => handleOperationPress("=")} />
        <Button title="/" onPress={() => handleOperationPress("/")} />
      </View>

      
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>History</Text>
            <ScrollView style={styles.historyList}>
              {history.length === 0 ? (
                <Text style={styles.noHistoryText}>Chưa có phép tính nào</Text>
              ) : (
                history.map((item, index) => (
                  <Text key={index} style={styles.historyItem}>
                    {item.expression} = {item.result}
                  </Text>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screenFirstNumber: {
    fontSize: 50,
    fontWeight: '500',
    color: myColors.result,
    textAlign: 'right',
    padding: 10,
  },
  historyIcon: {
    position: 'relative',
    top: 0,
    left:20,
    zIndex: 1, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: myColors.primary,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: myColors.primary,
  },
  historyList: {
    marginTop: 10,
  },
  historyItem: {
    fontSize: 16,
    color: myColors.primary,
    marginBottom: 5,
  },
  noHistoryText: {
    textAlign: 'center',
    color: myColors.primary,
    fontSize: 18,
    marginTop: 20,
  },
});
