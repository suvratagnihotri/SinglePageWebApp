import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    width: 100wh;
    height: 80vh;
    ${mobile({ height:"fit-content",display:"block",textAlign:"center",marginTop:"0" })}
`;


const MainColumn = styled.div`
    background-color: lightgrey;
    flex: 1;
    ${mobile({ marginTop:"0" })}
`;
const MainHeading = styled.h1`
    font-size: 90px;
`;


const Digital = styled.div`
    background-color: white;
    flex: 1;
    text-align: center;
`;

const DigitalHeading = styled.h3`
    font-size: 45px;
    margin-bottom: 15px;
`;

const Seperator = styled.hr`
    border: solid;
    border-width: 1.5px;
    border-color: #ec008c;
    width: 79px;
`;
const SubHeading = styled.p`
    font-style: italic;
    font-weight: 200;
    
`;
const Desc = styled.p`
    margin-left: 35px;
    font-size: 15px;
    word-spacing: 5px;
    text-align: left;
    margin-right: 35px;
    line-height: 200%;
    font-weight: 100;
    
`;

const MoreDigital = styled.div`
    background-color: lightgrey;
    flex: 1;
    text-align: center;
`;

const MoreDigitalHeading = styled.h3`
    font-size: 45px;
    margin-bottom: 15px;
`;

export const WhatWeDo = () => {
    return (
        <Container>
            <MainColumn>
            <MainHeading>
                What we Do?
            </MainHeading>
            </MainColumn>
            
            <Digital>
                <DigitalHeading>
                   Digital
                </DigitalHeading>
                <Seperator/>
                <SubHeading>
                    We create super-rich experiences online!
                </SubHeading>
                <Desc>
                BrandingPeers is a full-scale Digital Marketing Agency based out of Noida, India. We mix our years of experience and knowledge to create solutions for our clients which are not only performance driven, but also creative.  We are running kick-ass digital campaigns for our clients, even as you read this!
                </Desc>
            </Digital>
            <MoreDigital>
                <MoreDigitalHeading>
                    MoreDigital
                </MoreDigitalHeading>
                <Seperator/>
                <SubHeading>
                    We create super-rich experiences online!
                </SubHeading>
                <Desc>
                BrandingPeers is a full-scale Digital Marketing Agency based out of Noida, India. We mix our years of experience and knowledge to create solutions for our clients which are not only performance driven, but also creative.  We are running kick-ass digital campaigns for our clients, even as you read this!
                </Desc>
            </MoreDigital>
        </Container>
    )
}
