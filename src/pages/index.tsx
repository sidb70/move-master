import styled from 'styled-components'
import Header from "@/components/Homepage/Header";
import Navbar from "@/components/Homepage/Navbar";
import Feature, {IFeature} from '@/components/Homepage/Feature';

const feature1: IFeature = {
    imageSrc: 'https://cdn.discordapp.com/attachments/1068907821854380052/1069295114503069898/functioning_form.jpg',
    title: 'Form Check',
    description: 'Form Check is a tool that helps you to check your form and get feedback on how to improve it. This is done during the workout with the latest computer vision technology.'
}


const feature3: IFeature = {
    imageSrc: 'https://cdn.discordapp.com/attachments/1066383220322615429/1069293333245071410/bodyheat.png',
    title: ' User stats',
    description: 'User stats is a tool that helps you to track your progress. You can see your progress over time and compare it to other users.'
}


export default function Home() {
    const features: IFeature[] = [feature1, feature3]

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