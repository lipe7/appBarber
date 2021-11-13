import React, { useState } from 'react';
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

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import SignInput from '../../components/SignInput';

export default () => {
    
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () => {
        
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