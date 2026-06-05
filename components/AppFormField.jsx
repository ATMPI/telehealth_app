import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ThemedTextInput from "./Theme/ThemedTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, style, ...props }) => {
  const { handleChange, handleBlur, errors, values, touched } =
    useFormikContext();
  return (
    <>
      <ThemedTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values.firstName}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
