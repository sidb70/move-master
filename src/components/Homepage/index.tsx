import styled from 'styled-components'
import Header from "@/components/Homepage/Header";
import Navbar from "@/components/Homepage/Navbar";
import Feature, {IFeature} from './Feature';

const feature1: IFeature = {
    imageSrc: 'https://dummyimage.com/600x200/000/fff',
    title: 'Form Check',
    description: 'Form Check is a tool that helps you to check your form and get feedback on how to improve it. This is done during the workout with the latest computer vision technology.'
}

const feature2: IFeature = {
    imageSrc: 'https://dummyimage.com/600x200/000/fff',
    title: 'Form Recommendation',
    description: 'Based on previous feedback, Form Check will recommend you exercises that will help you improve your form. You can also add your own exercises to the database.'
}

const feature3: IFeature = {
    imageSrc: 'https://dummyimage.com/600x200/000/fff',
    title: ' User stats',
    description: 'User stats is a tool that helps you to track your progress. You can see your progress over time and compare it to other users.'
}


export default function Home() {
    const features: IFeature[] = [feature1, feature2, feature3]

    return <Container>
        <Navbar features={features}/>
        <Header/>
        {features.map((feature, index) => (
            <Feature key={index} {...feature} reverse={index % 2 === 0}/>
        ))}
    </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`
