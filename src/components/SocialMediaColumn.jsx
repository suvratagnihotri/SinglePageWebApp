import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    width: 100wh;
    height: 90vh;
    overflow: hidden;
    ${mobile({ display:"block",width:"400px",height:"fit-content",textAlign:"center" })}
`;

const Desc = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    color: white;
    transition: all 0.5s ease;
    font-size: 50px;
    z-index: 3;
    position: absolute;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    font-weight: 100;
    font-style: italic;
    ${mobile({ fontSize:"35px",opacity:"1",backgroundColor:"rgba(0, 0, 0, 0)",textAlign:"center",fontWeight:"600",marginLeft:"90px"})}
`;

const LeftColumn = styled.div`
    flex: 1;
    height: 100%;
    width: 20%;
    display: flex;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    width: 50%;
    ${mobile({ display:"block",height:"fit-content",width:"400px" })}
`;

const SocialPlatFormColumn = styled.div`
    height: 100%;
    width: 50%;
    display: block;
    flex: 1;
`;


const AnalyticsColumn = styled.div`
    height: 100%;
    width: 50%;
    display: block;
    flex: 1;
`;

const Instagram = styled.div`
    height: 50%;
    block-size:1;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;

const Facebook = styled.div`
    height: 50%;
    block-size:1;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;

const GoogleAnalytics = styled.div`
    height: 50%;
    block-size:1;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;


const WebsiteDesign = styled.div`
    height: 50%;
    block-size:1;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 100%;
    transition: all 1s ease;
    &:hover {
    transform: scale(1.1);
  }
  ${mobile({ width:"400px",height:"500px",objectFit:"cover" })}
`;




export const SocialMediaColumn = () => {
    return (
        <Container>
            <LeftColumn>
            <Desc>
                We will do Social Media Marketting for you.
            </Desc>
                <Image src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'/>
            </LeftColumn>
            <RightColumn>
                <SocialPlatFormColumn>
                    <Instagram>
                    <Desc>
                        Get customers from Instagram.
                    </Desc>
                        <Image src='https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/> 
                    </Instagram>
                    <Facebook>
                    <Desc>
                        Get famous on Facebook.
                    </Desc>
                        <Image src='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'/>
                    </Facebook>
                </SocialPlatFormColumn>
                <AnalyticsColumn>
                    <WebsiteDesign>
                        <Desc>
                            Best Website for your Firm.
                        </Desc>
                        <Image src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                    </WebsiteDesign>
                    <GoogleAnalytics>
                        <Desc>
                            Complete google Web Analytics.
                        </Desc>
                        <Image src='https://media.istockphoto.com/photos/modern-digital-marketing-on-the-tablet-in-vintage-style-picture-id615253358?b=1&k=20&m=615253358&s=170667a&w=0&h=yNTgrfTdAEQKrprSNLoTVs6c4JPpMAJFjP2J_NGgFd4='/>
                    </GoogleAnalytics>
                </AnalyticsColumn>
            </RightColumn>
        </Container>
    )
}
