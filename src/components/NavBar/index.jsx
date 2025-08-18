import './styles.css';
import DevIcon from '../../assets/icons/code.png'
const NavBar =()=>(
    <nav>
        
        <img src={DevIcon}/>
        <ul id="navBarLinks">
            <li><a href="#aboutSection">Sobre Mim</a></li>
            <li><a href="#skillsSection">Skills</a></li>
            <li><a href="#projectSection">Projetos</a></li>
            <li><a href="#contactSection">Contato</a></li>
        </ul>
    </nav>
)

export default NavBar ;