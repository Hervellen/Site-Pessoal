import './styles.css';
import gitIcon from '../../assets/icons/Github.png'
const ProjectsPage = () =>(

    <section id="projectSection">
    <h1 className="title">Projetos</h1>
    <div className="allProjects">

  
    <div id="projectTexts">
       
            <div className="cardProject">

            <h2>Portfólio</h2>
            <p>Este é meu portfólio profissional em desenvolvimento, criado para apresentar minha trajetória na área de TI, minhas habilidades técnicas e projetos.
                O objetivo é evoluir esse site com foco em responsividade, performance e boas práticas de desenvolvimento. </p>
            <div className="btn-footer ">
            <div className="defaultButton downloadButtoGithub" >
                <img src= {gitIcon}/>
                <a href="https://github.com/Hervellen/Site-Pessoal" target="_blank">Ver no github</a>
            </div>
            </div>
            </div>
            <div className="cardProject">

                <h2>Site de Links</h2>
                <p>Nesse projeto eu desenvolvi um site de links da Bio para colocar nas minhas redes sociais. Utilizei as tecnologias HTML e CSS. </p>
                <div className="btn-footer ">
                <div className="defaultButton downloadButtoGithub" >
                    <img src={gitIcon}/>
                    <a href="https://github.com/Hervellen/Site-Links" target="_blank">Ver no github</a>
                </div>
                </div>
                </div>
                <div className="cardProject">

                    <h2>Ada Lovelace</h2>
                    <p>Nesse projeto eu desenvolvi um site sobre Ada Lovelace, que foi a primeira pessoa a escrever um algoritmo para ser processado por uma máquina na história da computação.
                     Utilizei as tecnologias HTML, CSS e JavaScript. </p>
                    <div className="btn-footer ">
                    <div className="defaultButton downloadButtoGithub" >
                        <img src={gitIcon}/>
                        <a href="https://github.com/Hervellen/Ada-Lovelace" target="_blank">Ver no github</a>
                    </div>
                    </div>
                    </div>
            
            <div className="cardProject">
                <h2> Calcular IMC </h2>
                <p>Projeto desenvolvido para calcular o Índice de Massa Corporal (IMC) a partir do peso e altura informados pelo usuário. A calculadora exibe o resultado, classNameificando o IMC e oferecendo uma experiência simples e intuitiva. O objetivo é praticar a lógica de programação, manipulação de dados no front-end e melhorias contínuas na interface. </p>
                <div className="defaultButton downloadButtoGithub" >
                    <img src={gitIcon}/>
                    <a href="https://www.linkedin.com/in/hervellen-maximiano/" target="_blank">Ver no github</a>
                </div>

        </div>
            

        </div>
        
    
    </div>
   

</section>

)

export default ProjectsPage ;