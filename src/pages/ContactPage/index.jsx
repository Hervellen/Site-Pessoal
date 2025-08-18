import './styles.css';
import emailIcon from '../../assets/icons/email.png'
import gitIcon from '../../assets/icons/Github.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import instaIcon from '../../assets/icons/instagram.png'
import phoneIcon from '../../assets/icons/whatsapp.png'
const ContactPage =()=>(
<section id="contactSection">
        <div id="contactTexts">
            <div id="contactTextsChild">

            
            <h1 className="title">Contato</h1>
            <p className="customLineHeight">Gostaria de bater um papo comigo? Vou deixar todas as minhas formas de contato e redes sociais listadas abaixo.</p>
    
            <address className="emailAndPhone">
                <div className="contactItem">
                    <img src={emailIcon}/>
                    <p>hervellen.maximiano@gmail.com</p>
                </div>
                <div className="contactItem">
                    <img className="emailIcon" src={phoneIcon}/>
                    <p>+55 (38) 9 9992-9225</p>
                </div>
            </address>
    
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/hervellen-maximiano/" target="_blank"><img src={linkedinIcon} alt=""/></a>
                <a href="https://www.instagram.com/m_hervellen/"target="_blank"><img src={instaIcon} alt=""/></a>
                <a href="https://github.com/Hervellen"target="_blank"><img src={gitIcon} alt=""/></a>
            </div>
        </div>
        </div>
        <div id="contactPhoto">
        </div>

    </section>

)

export default ContactPage;