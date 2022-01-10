import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h3`
    height: 35px;
    margin-left: 15px;
    color: white;
    font-style: italic;
    letter-spacing: 7px;
    border: solid;
    border-color: white;
    border-radius: 10px;
    /* padding: 10px; */
    text-align: center;
    font-weight: 100;
    padding-top: 10px;
    padding-left: 5px;
    cursor: pointer;

`;

const Options = styled.div`
    display: flex;
`;

const AboutUs = styled.h5`
    color: white;
    flex: 1;
    cursor: pointer;
    margin-left: 15px;
    font-weight: 400;
`;

const Pricing = styled.h5`
    color: white;
    flex: 1;
    cursor: pointer;
    margin-left: 15px;
    font-weight: 400;
`;

const ContactUs = styled.h5`
    color: white;
    flex: 1;
    cursor: pointer;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 400;
`;


export const Navbar = () => {
    return (
        <Container>
            <Title>
                BrandingPeers
            </Title>
            <Options>
                <AboutUs>
                    AboutUs
                </AboutUs>
                <Pricing>
                    Pricing
                </Pricing>
                <ContactUs>
                    ContactUs
                </ContactUs>
            </Options>
        </Container>
    )
}
