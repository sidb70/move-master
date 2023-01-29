import Link from "next/link"
import styled from "styled-components"

export default function Header() {
    return <HeaderContainer>
        <HeaderTitle>MoveMaster</HeaderTitle>
        <h2>MoveMaster uses the latest computer vision models to track posture and measure performance for workout</h2>
        <HeaderButton href="/demo">Try a Demo</HeaderButton>
    </HeaderContainer>
}


const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  gap: 5px;
`

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
`

const HeaderButton = styled(Link)`
  background: transparent;
  color: ${({theme}) => theme.colors.accent};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 20px;

  &:hover {
    background: ${({theme}) => theme.colors.accent};
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`
