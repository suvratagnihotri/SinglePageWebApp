import React,{useState} from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    flex: 1;
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
    transition: all 1s ease;
    font-weight: 100;
    font-style: italic;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius:50%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor:pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    
`;

const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    position: relative;
    &:hover ${Desc}{
        opacity: 1;
    }
`;

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    width: fit-content;
    object-fit: fill;
`;


const Image = styled.img`
    height: 100%;
    width:100%;
    object-fit: cover;
`;




export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);    
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide>
                    <ImgContainer>
                    <Desc>
                        We will get customers for you from every where.
                    </Desc>
                    <Image src='https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'>
                    </Image>
                    </ImgContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                    <Desc>
                        We will make you famous on all social medial Platforms.
                    </Desc>
                    <Image src='https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'>
                    </Image>
                    </ImgContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                    <Desc>
                        Always keep in touch with your customers.
                    </Desc>
                    <Image src='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'>
                    </Image>
                    </ImgContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon/>
            </Arrow>
        </Container>
    )
}
