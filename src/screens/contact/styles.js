import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  fullContainer: {
    flex: 1,
  },
  childContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    width: '100%',
    marginTop: 20,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputTitle: {
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  submitButton: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputError: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    fontWeight: '500',
    paddingBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '80%',
  },
  buttonOpen: {
    backgroundColor: 'cornflowerblue',
  },
  buttonClose: {
    backgroundColor: 'cornflowerblue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
