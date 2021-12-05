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
import PersonIcon from '../../assets/person.svg'
import SignInput from '../../components/SignInput';
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
    
    const navigation = useNavigation();
    const  { dispatch: userDispatch } = useContext (UserContext);

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '' && nameField != ''){
            let res = await Api.signUp(emailField, passwordField, nameField)

            if(res.token){
                // SALVANDO TOKEN NA SESSAO DO APP
                await AsyncStorage.setItem('token', res.token)

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
                
            }
        } else {
            alert("Preencha todos os campos.");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return(
        <Container>
            <BarberLogo
                width="100%" height="150"
            ></BarberLogo>
            <InputArea>

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton
                onPress={handleMessageButtonClick}
            >
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>FAÇA LOGIN</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
}