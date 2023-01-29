import styled from "styled-components";
import {IFeature} from "@/components/Homepage/Feature";
import Image from "next/image";

export default function Navbar(props: { features: IFeature[] }) {

    const smoothScroll = (title: string) => () => {
        const element = document.getElementById(title);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }

    return <Container>
        <LogoContainer>
            <Image src="/logo.png" width={32} height={32} alt="MoveMaster Logo"/>
            <h1>MoveMaster</h1>
        </LogoContainer>

        <FeaturesContainer>
            {props.features.map((feature, index) => (
                <FeatureButton key={index} onClick={smoothScroll(feature.title)}>{feature.title}</FeatureButton>
            ))}
        </FeaturesContainer>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FeatureButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
`;
