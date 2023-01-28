import styled from "styled-components"

export default function Home() {
    return (
        <Homepage>
            <Header>

            </Header>
            <About>
                <h1>About</h1>
                <p>Introducing the ultimate fitness companion: our state-of-the-art app that combines cutting-edge AI
                    technology with personalized workout plans. Our app uses 3D pose detection to analyze your form and
                    technique in real-time, giving you instant feedback and personalized scores to help you improve your
                    fitness.

                    Our app also generates customized workout plans tailored to your needs and progress, so you can
                    achieve
                    your fitness goals faster. With our user states page, you can track your progress with detailed body
                    heat maps and recovery percentages, keeping you informed and motivated. And with our built-in streak
                    tracker, you'll be able to stay on track and achieve your fitness goals.

                    Whether you're a beginner or a pro, our app is the perfect tool for reaching the next level of
                    fitness.
                    Try it now and experience the difference for yourself!
                </p>
            </About>
        </Homepage>
    )
}

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Header = styled.div`
  height: 250px;
`

const About = styled.div`
  height: 150px;

  & > p {
    text-align: center;
    font-size: 1.5rem;
  }

  & > h1 {
    text-align: center;
    font-size: 3rem;
  }

`

const Features = styled.div`
`

const Feature = styled.div`
`

const FeatureImage = styled.image``

const FeatureText = styled.div``