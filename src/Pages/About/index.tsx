import {  Container, colors } from "../../GlobalStyles";
import AboutList from "../../components/AboutList";
import Hero from "../../components/Hero";
import { dataMock } from "../../Mock/base";
import { useParams } from "react-router-dom";


export interface about {
  id: number, 
  title: string, 
  description: string
}

const About = () => {

  const { id } = useParams();

let data: about[] = []
if(id !== null && id !== undefined) {
   const about = dataMock.find(a => a.id.toString() === id.toString());
   if(about)
       data = about.products
}

  console.log(data);

  // 1 recuperar o id  //feito
  // 2 buscar no mock os produtos referente ao id especifico //feito
  //3 listar os produtos // feito

  return (
    <>
      <div style={{ backgroundColor: colors.background }}>
        <Hero page="about" />
        <Container>
         <AboutList Cards={data} />
        </Container>
      </div>
    </>
  );
};

export default About;
