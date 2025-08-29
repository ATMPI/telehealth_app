import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";
import { Link, useRouter } from "expo-router";
import ThemedText from "../../components/Theme/ThemedText";
import telehealth from "../../assets/images/telehealth-word.png";
import ThemedTextInput from "../../components/Theme/ThemedTextInput";
import ThemedButton from "../../components/Theme/ThemedButton";
import ThemedBiometrics from "../../components/Theme/ThemedBiometrics";
import AppButton from "../../components/AppButton";

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

  const login = () => {
    const route = useRouter();
    route.replace("/dashboard/doctors");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView
        style={{ paddingTop: 100, flex: 1, justifyContent: "center" }}
        safe={true}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Image
            source={telehealth}
            style={{ resizeMode: "contain", width: "40%" }}
          ></Image>

          <ThemedTextInput label="Username" keyboardType="email-address" />
          <ThemedTextInput label="Password" secureTextEntry={true} />
          {/* <ThemedTextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{ borderWidth: 1, padding: 10, margin: 10 }}
          /> */}
          {/* <ThemedButton style={{}}> */}
          {/* <Link href="/dashboard/doctors" style={styles.button}>
              <Text style={{ color: "white" }}>Login</Text>
            </Link> */}
          <AppButton title="Login" icon="log-in-outline" onPress={login} />
          {/* </ThemedButton> */}
          <View style={styles.forgotContainer}>
            <ThemedText textType="primary">Forgot</ThemedText>
            <Link href="/forgotPassword" style={styles.link}>
              <ThemedText textType="link">username</ThemedText>
            </Link>
            <ThemedText textType="primary">or</ThemedText>
            <Link href="/forgotPassword" style={styles.link}>
              <ThemedText textType="link">password</ThemedText>
            </Link>
          </View>

          {/* <ThemedBiometrics style={{ marginTop: 20 }}></ThemedBiometrics> */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppButton
                title="Log in with biometrics"
                outline={true}
                icon="finger-print"
                style={{ marginTop: 20, paddingVertical: 15 }}
              />
            </View>
          </View>

          {/* <Link href="/" style={{ marginTop: 20, color: "#2ec4b6" }}>
            Go Home
          </Link> */}
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
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
