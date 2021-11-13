import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #050A30;
    flex: 1;
    justify-content: center;
    align-itens: center;
`;

export const InputArea = styled.View`
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #0E86D4;
    border-radius: 30px;
    justify-content: center;
    align-itens: center;
    width: 50%;
    margin-left: 25%;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    textAlign: center;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-botton: 30px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 18px;
    color: #0E86D4;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 18px;
    color: #0E86D4;
    font-weight: bold;
    margin-left: 5px;
`;
