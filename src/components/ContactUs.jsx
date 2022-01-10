import React from 'react';
import styled from 'styled-components';

const Container = styled.div`   
    display: flex;
    justify-content: center;
    margin-top: 10px;
    /* background-color: black; */
`;

const Seperator = styled.hr`
    border: solid;
    border-width: 0.5px;
    border-color: #ec008c;
    width: 89px;
`;

const Heading = styled.h2`
    margin-bottom: 10px;
`;

const Form = styled.div`
    border: solid;
    text-align: center;
    width: 420px;
    height: 60vh;
    border-width: 2px;
    border-color: black;
    border-radius: 10px;
    /* background-color: grey; */
`;

const LabelContainer = styled.div`
    margin-bottom: 5px;
`;

const Label = styled.label`
`;

const InputContainer = styled.div`
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 400px;
    height: 35px;
    font-style: oblique;
    border: solid;
    border-color: grey;
    border-radius: 5px;

    text-align: center;
`;

const Button = styled.button`
    height: 35px;
    width: 100px;
    border-color: black;
    border-width: 0.5px;
    background-color: #ec008c;
    color: white;
    border-radius: 5px;
`;



export const ContactUs = () => {
    return (
        <Container>
            <Form>
                <Heading>
                    Contact Us
                </Heading>
                <Seperator/>
                <LabelContainer>
                    <Label>
                        Email
                    </Label>
                </LabelContainer>
                <InputContainer>
                    <Input placeholder='email'/>
                </InputContainer>
                <LabelContainer>
                    <Label>
                        Name
                    </Label>
                </LabelContainer>
                <InputContainer>
                    <Input placeholder='name'/>
                </InputContainer>
                <LabelContainer>
                    <Label>
                        Phone Number
                    </Label>
                </LabelContainer>
                <InputContainer>
                    <Input placeholder='phone'/>
                </InputContainer>
                <Button>Submit</Button>
                </Form>
        </Container>
    )
}
