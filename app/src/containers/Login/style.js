import { StyleSheet } from 'react-native';

// TODO
// mixins for flexbox
// mixins for borders (with, color, radius ect)

const style = StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63ADF2'
  },

  sqr: {
    width: 150,
    height: 150,
    marginBottom: 100,
    borderRadius: 300,
    backgroundColor: '#545E75'
  },

  inputsWrapper: {
    alignItems: 'center'
  },

  input: {
    width: 300,
    height: 40,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 0,
    color: '#fff'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingVertical: 15,
    backgroundColor: '#7A8B99'
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: '#fff'
  }

});

export default style;
