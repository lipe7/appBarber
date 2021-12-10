import React from 'react';
import styled from 'styled-components/native';

// ICONES
import HomeIcon from '../assets/home.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 50px;
    background-color: #189AB4;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter= styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    margin-top: -10px;
    border: 3px solid #189AB4;
`;

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}