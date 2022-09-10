import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dateContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iosDateContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateCancelButton: {
    alignSelf: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },
  cancelText: {
    fontWeight: 'bold',
    color: 'lightsteelblue',
  },
  dateOkButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightsteelblue',
  },
  outsideDateContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
});
