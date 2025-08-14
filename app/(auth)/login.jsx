import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";
import telehealth from "../../assets/images/telehealth-word.png";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";
import ThemedBiometrics from "../../components/ThemedBiometrics";

const Login = () => {
  const x = 1;
  x.toString();
  const handleFocus = () => {
    // Handle focus event, e.g., log or change state
    console.log("Input focused");
  };
  const handleBlur = () => {
    // Handle blur event, e.g., log or change state
    console.log("Input blurred");
  };
  return (
    <ThemedView
      style={{ paddingTop: 100, flex: 1, justifyContent: "center" }}
      safe={true}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Image
          source={telehealth}
          style={{ resizeMode: "contain", width: "40%" }}
        ></Image>

        <ThemedTextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Username"
          style={{ borderWidth: 1, padding: 10, margin: 10 }}
        />
        <ThemedTextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{ borderWidth: 1, padding: 10, margin: 10 }}
        />
        <ThemedButton style={{}}>
          <Link href="/dashboard/doctors" style={styles.button}>
            <Text style={{ color: "white" }}>Login</Text>
          </Link>
        </ThemedButton>
        <View style={styles.forgotContainer}>
          <ThemedText>Forgot</ThemedText>
          <Link href="/forgotPassword" style={styles.link}>
            <ThemedText link={true}>username</ThemedText>
          </Link>
          <ThemedText>or</ThemedText>
          <Link href="/forgotPassword" style={styles.link}>
            <ThemedText link={true}>password</ThemedText>
          </Link>
        </View>

        <ThemedBiometrics style={{ marginTop: 20 }}></ThemedBiometrics>

        {/* <Link href="/" style={{ marginTop: 20, color: "#2ec4b6" }}>
          Go Home
        </Link> */}
      </View>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    justifyContent: "center",
  },
  link: {
    marginBlock: 0,
    marginHorizontal: 0,
    verticalAlign: "middle",
    //color: '#2ec4b6',
    textDecorationLine: "underline",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
