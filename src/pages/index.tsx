import styled from "styled-components"
import Feature from "@/components/Feature";
import Header from "@/components/Homepage/Header";
import About from "@/components/Homepage/About";

export default function Home() {
    const formCheck = "Our app uses AI 3D pose detection to check form, provide personalized feedback and customized workout plans for improved results. It also includes workout routine generator, muscle recovery states page and detailed form recommendations "
    const formRec = "Our app's Form recommendation feature creates an initial workout plan and provides personalized feedback on which exercises to improve and which you're doing well. It also has a feature that generates further workout plans based on user's performance with the help of kinesiology specialist"
    const userStats = "Our app's user stats feature includes a body heat map that displays muscle group usage and recovery percentage, helping to create personalized workout plans. It also includes a workout streak and total workout time tracking to monitor progress and achieve fitness goals"
    const src = "https://www.researchgate.net/publication/221538154/figure/fig1/AS:276824299982849@1443011464386/Original-Image-showing-200-x-200-pixels.png"

    return <Homepage>
        <Header/>
        <About/>
        <Feature title="Form Check" image={src} description={formCheck}/>
        <Feature reverse title="Form Recommendation" image={src} description={formRec}/>
        <Feature title="User Stats" image={src} description={userStats}/>
    </Homepage>
}

const Homepage = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  background-color: ${props => props.theme.colors.background};
`