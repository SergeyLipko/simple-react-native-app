import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import s from './style';

export default class Login extends React.Component {
  render() {
    return (

      <KeyboardAvoidingView style={s.screen} behavior="padding">
        <View style={s.sqr}/>

        <View style={s.inputsWrapper}>
          <TextInput
            style={s.input}
            keyboardType="email-address"
            placeholder="Login"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            secureTextEntry
            style={s.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            returnKeyType="done"
            ref={input => this.passwordInput = input}
          />

          <TouchableOpacity style={s.button}>
            <Text style={s.buttonText}> Submit </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    )
  }
}