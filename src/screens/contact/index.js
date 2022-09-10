import {
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Keyboard,
  TouchableHighlight,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import styles from "./styles";
import IosDatePicker from "../../components/IosDatePicker";
import AndroidDatePicker from "../../components/AndroidDatePicker";

export default function ContactUsScreen() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      birthday: "",
    },
  });

  const onSubmit = () => {
    setModalVisible(true);
  };

  const onDateCancel = () => {
    setShowDatePicker(false);
  };

  const onDateSelect = (selected) => {
    const selectedDate = selected;
    const currentDateStr = `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;
    setValue("birthday", currentDateStr);

    setShowDatePicker(false);
    setDate(selected);
  };

  const getSubmitInfos = () => {
    const form = getValues();
    return (
      <>
        <Text style={styles.modalText}>Name: {form?.name}</Text>
        <Text style={styles.modalText}>Email: {form?.email || "-"}</Text>
        <Text style={styles.modalText}>
          Birth Date: {form?.birthday || "-"}
        </Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.fullContainer}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
      >
        <KeyboardAvoidingView style={styles.childContainer} behavior="padding">
          <Text>Please fill in the required fields</Text>

          {/* Name Field */}
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 50,
              pattern: /^[A-Za-z]+$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                testID="nameTest"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
              />
            )}
            name="name"
          />
          {errors.name?.type === "required" && (
            <Text style={styles.inputError}>Name is required</Text>
          )}
          {errors.name?.type === "maxLength" && (
            <Text style={styles.inputError}>Cannot exceed 50 characters</Text>
          )}
          {errors.name?.type === "pattern" && (
            <Text style={styles.inputError}>Enter a valid name</Text>
          )}

          {/* Email Field */}
          <Controller
            control={control}
            rules={{
              pattern:
                // eslint-disable-next-line no-useless-escape
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                testID="emailTest"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.email?.type === "pattern" && (
            <Text style={styles.inputError}>Enter a valid email address</Text>
          )}

          {/* Birth Date Field */}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { value } }) => (
              <View style={{ width: "100%" }}>
                <TouchableHighlight
                  onPress={() => {
                    Keyboard.dismiss();
                    setShowDatePicker(true);
                  }}
                  underlayColor="transparent"
                >
                  <TextInput
                    style={styles.input}
                    editable={false}
                    value={value}
                    placeholder="Birth Date"
                    onPressIn={() => {
                      Keyboard.dismiss();
                      setShowDatePicker(true);
                    }}
                  />
                </TouchableHighlight>
              </View>
            )}
            name="birthday"
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* Date Picker IOS */}
      {showDatePicker && Platform.OS === "ios" && (
        <IosDatePicker
          onDateCancel={onDateCancel}
          onDateSelect={onDateSelect}
          date={date}
        />
      )}

      {/* Date Picker Android */}
      {showDatePicker && Platform.OS === "android" && (
        <AndroidDatePicker
          onDateCancel={onDateCancel}
          onDateSelect={onDateSelect}
          date={date}
        />
      )}

      {/* Modal Input Details */}
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {getSubmitInfos()}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
