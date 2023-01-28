import styled from "styled-components";

export interface IFeature {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
}

export default function Feature(props: IFeature) {
    const {title, description, imageSrc, reverse} = props;

    return <Container id={title}>
        <Title>{title}</Title>
        {/*    Build a row component that changes the image place based on reverse*/}
        <Row>
            {reverse && <Image src={imageSrc}/>}
            <Description>{description}</Description>
            {!reverse && <Image src={imageSrc}/>}
        </Row>
    </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;

  width: 90%;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  text-align: left;
  width: 100%;
  color: ${({theme}) => theme.colors.accent};
  margin-bottom: 0.5rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  text-align: left;
  margin-bottom: auto;
  margin-top: 1rem;
`
