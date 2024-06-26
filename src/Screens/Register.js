import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Themes} from '../Appdata/colors';
import CheckBox from 'react-native-check-box';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import {useDispatch, useSelector} from 'react-redux';
import {SignupRequest, SignupFailure} from '../Redux/actions';
import Loader from '../Componets/Loader';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Register({navigation}) {
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    password: '',
    confimPassword: '',
    showPassword: false,
    showconfirmPassword: false,
  });
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView>
      <ImageBackground
        source={require('../Assets/Images/bgimg.jpg')}
        style={styles.container}>
        <Text style={styles.img}></Text>

        <Text style={styles.title}>register</Text>
        <Text style={styles.subtitle}>
          You and Your Friends always Connected
        </Text>
        <View style={styles.formView}>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              onChangeText={e => setUserData({...userData, email: e})}
              style={styles.myInput}
              placeholder="username@gmail.com"
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Contact Number:</Text>
            <TextInput
              style={styles.myInput}
              placeholder="Please Enter Your Mobile Number"
              onChangeText={e => setUserData({...userData, phone: e})}
              placeholderTextColor={Themes.AppTheme.black}
              keyboardType="number-pad"
              maxLength={10}
            />
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Password:</Text>
            <View>
              <TextInput
                secureTextEntry
                style={styles.myInput}
                placeholder="**********"
                onChangeText={e => setUserData({...userData, password: e})}
                placeholderTextColor={Themes.AppTheme.black}
              />
              {/* <TouchableOpacity
                style={styles.eyeiconButton}
                onPress={() =>
                  setUserData({
                    ...userData,
                    showPassword: !userData.showPassword,
                  })
                }>
                <Entypo
                  name={userData.showPassword ? 'eye' : 'eye-with-line'}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Confime Password:</Text>
            <TextInput
              secureTextEntry
              style={styles.myInput}
              placeholder="**********"
              onChangeText={e => setUserData({...userData, confimPassword: e})}
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
        </View>
        <View style={styles.tramsView}>
          <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={() => setSelection(!isSelected)}
            isChecked={isSelected}
          />
          <Text style={styles.tramsxtx}>
            I agree with the Terms and condition and the privacy policy
          </Text>
        </View>
        <SignUpButton
          title={'SIGN UP'}
          style={styles.signUpButton}
          textstyle={styles.txtstyle}
          onPress={() => navigation.navigate(NAVIGATION_NAME.LOGIN)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_NAME.LOGIN)}>
          <Text style={styles.alreayTxt}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Themes.AppTheme.button,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: Themes.AppTheme.black,
  },
  formView: {
    alignSelf: 'center',
    width: '70%',
    marginTop: 20,
  },
  label: {
    color: '#000',
    fontSize: 16,
  },
  myInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: Themes.AppTheme.black,
  },
  formSubView: {
    marginBottom: 10,
  },
  tramsView: {
    flexDirection: 'row',
    marginHorizontal: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  tramsxtx: {
    width: 200,
    marginLeft: '5%',
    color: Themes.AppTheme.black,
  },
  signUpButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  txtstyle: {
    color: '#fff',
  },
  alreayTxt: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
