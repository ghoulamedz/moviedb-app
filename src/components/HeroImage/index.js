import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Content, Text } from './Heroimage.style';

const HeroImage = ({ image, title, text , movieId }) => (
    <Link to={`/${movieId}`}>
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    </Link>
);

export default HeroImage;
