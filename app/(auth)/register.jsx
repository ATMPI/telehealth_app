import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
  Keyboard,
  Switch,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ThemedButton from "../../components/Theme/ThemedButton";
import ThemedView from "../../components/Theme/ThemedView";
import AppButton from "../../components/AppButton";
import ThemedTextInput from "../../components/Theme/ThemedTextInput";
import ThemedText from "../../components/Theme/ThemedText";
import AppPicker from "../../components/AppPicker";
import ErrorMessage from "../../components/ErrorMessage";
import AppFormField from "../../components/AppFormField";
const genders = [
  {
    label: "Male",
    value: 1,
  },
  {
    label: "Female",
    value: 2,
  },
];
const RegisterScreen = () => {
  const [isNew, setIsNew] = useState(false);
  const [gender, setGender] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Create an Account</ThemedText>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
          }}
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
          onSubmit={(values) => {
            console.log("form submitted");
            Alert.alert(
              "Registration Successful",
              JSON.stringify(values, null, 2)
            );
          }}
        >
          {({ handleSubmit }) => (
            <>
              <View style={styles.row}>
                <View style={styles.column}>
                  <AppFormField label="First Name" name="firstName" />
                </View>

                <View style={[styles.column, { marginLeft: 8 }]}>
                  <AppFormField
                    style={[styles.column, { marginLeft: 8 }]}
                    label="Last Name"
                    name="lastName"
                  />
                </View>
              </View>

              <AppFormField
                style={[styles.column, { marginLeft: 8 }]}
                label="Username"
                name="username"
              />

              <AppFormField
                label="Email"
                name="email"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <AppFormField label="Password" name="password" secureTextEntry />

              <AppPicker
                selectedItem={gender}
                onSelectItem={(item) => setGender(item)}
                icon="search"
                label="Select Gender"
                items={genders}
              ></AppPicker>
              <ThemedView
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 12,
                }}
              >
                <ThemedText>Agree to the terms and condition </ThemedText>
                <Switch
                  value={isNew}
                  onValueChange={(newValue) => setIsNew(newValue)}
                />
              </ThemedView>

              <AppButton
                title="Register"
                icon="person-add"
                onPress={handleSubmit}
              ></AppButton>
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
    marginBottom: 0,
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
    marginTop: -8,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 12,
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
