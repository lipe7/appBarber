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
import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import SignUp from '../SignUp';
import SignInput from '../../components/SignInput';

export default () => {
    
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

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

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não tem conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>CADASTRE-SE</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
}