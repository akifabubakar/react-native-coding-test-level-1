import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

import styles from "./styles";

function IosDatePicker(props) {
  const { onDateCancel, onDateSelect, date } = props;

  let dateValue = new Date(date);

  const onChange = (event, selectedDate) => {
    dateValue = selectedDate;
  };

  return (
    <View style={[styles.dateContainer, styles.iosDateContainer]}>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={onDateCancel}
        underlayColor="transparent"
      >
        <View style={styles.outsideDateContainer} />
      </TouchableHighlight>

      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          style={styles.dateCancelButton}
          onPress={onDateCancel}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <DateTimePicker
          value={dateValue}
          mode="date"
          onChange={onChange}
          display="spinner"
          maximumDate={new Date()}
        />

        <TouchableOpacity
          style={styles.dateOkButton}
          onPress={() => onDateSelect(dateValue)}
        >
          <Text style={styles.textStyle}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

IosDatePicker.defaultProps = {
  onDateCancel: () => {},
  onDateSelect: () => {},
  date: new Date(),
};

IosDatePicker.propTypes = {
  onDateCancel: PropTypes.func,
  onDateSelect: PropTypes.func,
  date: PropTypes.objectOf(Date),
};

export default IosDatePicker;
