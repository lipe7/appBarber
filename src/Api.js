import AsyncStorage from "@react-native-community/async-storage";
import listBarber from './listBarber.json';
const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async (email, password, name) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, name})
        });
        const json = await req.json();        
        return json;
    },

    getBarbers: async (lat = null, lng = null, address = null) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const res = await req.json();
        // const res = listBarber;

        return res;
    }
};