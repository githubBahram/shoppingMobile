import React, {useState} from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, TextInput, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const User = styled.Image`
width:40px;
height:40px;
border-radius:20px;
border-color: white;
border-width:1px;
 
`;

const Container = styled.View`

flex-direction:row;
justify-content: space-between;
align-items:center;
`;

const Row = styled.View`
flex:1;
align-items:center;
flex-direction:row;
justify-content: space-between;
`;

const Input = styled.TextInput`
height:40px;
width:70%;
border-width:1px;
border-radius:5px;
background-color:white;
 flex-grow:1
`;
const Button = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background: #eeeeee;
	align-items: center;
	justify-content: center;
 
`;

const Header = ({userImg}) => {
    const [text, setText] = useState('');

    return (
        <Container>
                <User  source={userImg}/>
                <TextInput style={{width:'70%',height:40, backgroundColor: '#eeeeee',borderRadius:5}} placeholder='جستجو'/>
                <Button>
                    <Ionicons size={27} color='black' name='chatbubbles-outline'/>
                </Button>
        </Container>
    );
};

export default Header;
