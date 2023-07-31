import { ContainerFooter, NavLinks } from "./styled"
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer =() => (
    <ContainerFooter>
        <img src={logo} alt="logo" />
        <NavLinks>
            <ul>
                <li><img src={facebook} alt="facebook" /></li>
                <li><img src={instagram} alt="inta" /></li>
                <li><img src={twitter} alt="twitter" /></li>
            </ul>
        </NavLinks>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br/> dos produtos é toda do estabelecimento contratado. </p>
    </ContainerFooter>
)

export default Footer