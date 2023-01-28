import styled from "styled-components";

interface IFeature {
    title: string;
    image: string;
    description: string;
    reverse?: boolean;
}

export default function Feature(props: IFeature) {
    const {title, image, description, reverse} = props;

    return <Vertical>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Vertical>
}

export const Vertical = styled.div`
  width: 75%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
`


const Title = styled.h1`
  margin: 1rem;
`

const Description = styled.p`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`