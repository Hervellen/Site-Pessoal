
import './styles.css';
import arrowIcon from '../../assets/icons/arrow.png'
import downloadIcon from '../../assets/icons/Download.png'

const Button =({buttonType})=>{
    const getButtonProps = ()=>{
        switch(buttonType){
            case 'downloadResume':
            return{
                icon: downloadIcon, 
                href:'sources/currículo dev.pdf',
                download:'currículo dev.pdf',
                buttonText: 'Baixar currículo',
                colorClass: 'downloadButtonLight'
            }

            case 'downloadCompleteResume':
            return{
                icon: downloadIcon, 
                href:'sources/currículo dev.pdf',
                download:'currículo dev.pdf',
                buttonText: 'Baixar currículo Completo',
                colorClass: 'downloadButtonDark'
            }
            case 'linkedin':
            return{
                icon: arrowIcon, 
                href:'https://www.linkedin.com/in/hervellen-maximiano/',
                download:null,
                buttonText: 'Confira meu Linkedin',
                colorClass: 'linkedinButton'
            }



            default:
            break;
        }
    }



    return(
<div className={`defaultButton ${getButtonProps().colorClass}`} >
                 <img src={getButtonProps().icon}/>
                 <a
                  href={getButtonProps().href }
                  download={getButtonProps().download}
                  target={getButtonProps().download ? null : '_blank'}
                  >
                    {getButtonProps().buttonText} 
                    </a>
            </div>
    )
}

export default Button;