import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

import styles from './styles';

function AndroidDatePicker(props) {
  const { onDateCancel, date, onDateSelect } = props;

  const onChange = ({ type, nativeEvent }) => {
    if (type === 'set') {
      onDateSelect(new Date(nativeEvent.timestamp));
    } else {
      onDateCancel();
    }
  };
  return (
    <View style={styles.dateContainer}>
      <DateTimePicker value={date} mode="date" onChange={onChange} maximumDate={new Date()} />
    </View>
  );
}

AndroidDatePicker.defaultProps = {
  onDateCancel: () => {},
  onDateSelect: () => {},
  date: new Date(),
};

AndroidDatePicker.propTypes = {
  onDateCancel: PropTypes.func,
  onDateSelect: PropTypes.func,
  date: PropTypes.objectOf(Date),
};

export default AndroidDatePicker;
