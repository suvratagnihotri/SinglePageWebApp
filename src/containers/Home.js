import React from 'react';
import styled from 'styled-components'
import { ContactUs } from '../components/ContactUs';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Slider } from '../components/Slider';
import { SocialMediaColumn } from '../components/SocialMediaColumn';
import { WhatWeDo } from '../components/WhatWeDo';

const Container = styled.div``;

export const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Slider/>
            <WhatWeDo/>
            <SocialMediaColumn/>
            <ContactUs/>
            <Footer/>
        </Container>
    )
}
