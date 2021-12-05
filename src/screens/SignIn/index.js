import React, { useState, useContext } from 'react';
import { 
    Container ,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import SignInput from '../../components/SignInput';
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
    
    const navigation = useNavigation();
    const  { dispatch: userDispatch } = useContext (UserContext);

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {

        if(emailField != '' && passwordField != ''){
            let json = await Api.signIn(emailField, passwordField)

            if(json.token){
                // SALVANDO TOKEN NA SESSAO DO APP
                await AsyncStorage.setItem('token', json.token)

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
                
            } else {
                alert("Email ou senha inválidos.") ;
            }

        } else {
            alert("Preencha todos os campos.");
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return(
        <Container>
            <BarberLogo
                width="100%" height="150"
            ></BarberLogo>
            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton
                    onPress={handleSignClick}
                >
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton
                onPress={handleMessageButtonClick}
            >
                <SignMessageButtonText>Ainda não tem conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>CADASTRE-SE</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
}