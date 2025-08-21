import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ThemedButton from "../../components/Theme/ThemedButton";
import ThemedView from "../../components/Theme/ThemedView";
import AppButton from "../../components/AppButton";
import ThemedTextInput from "../../components/Theme/ThemedTextInput";
import ThemedText from "../../components/Theme/ThemedText";

const RegisterScreen = () => {
  const handleSubmit = (values) => {
    Alert.alert("Registering user...", JSON.stringify(values, null, 2));
    // You can send `values` to your backend here
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Create an Account</ThemedText>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            username: Yup.string().required("Username is required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Minimum 6 characters")
              .required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.row}>
                <View style={styles.column}>
                  <ThemedTextInput
                    label="First Name"
                    onChangeText={handleChange("firstName")}
                    // onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  )}
                </View>

                <View style={[styles.column, { marginLeft: 8 }]}>
                  <ThemedTextInput
                    label="Last Name"
                    onChangeText={handleChange("lastName")}
                    // onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
                  )}
                </View>
              </View>

              <ThemedTextInput
                label="Username"
                // style={styles.input}
                onChangeText={handleChange("username")}
                // onBlur={handleBlur("username")}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <ThemedTextInput
                label="Email"
                // style={styles.input}
                onChangeText={handleChange("email")}
                // onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <ThemedTextInput
                label="Password"
                // style={styles.input}
                onChangeText={handleChange("password")}
                // onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <AppButton title="Register" icon="person-add"></AppButton>
            </>
          )}
        </Formik>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 8,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  column: {
    flex: 1,
  },

  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
