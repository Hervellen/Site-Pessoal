import './styles.css';
import Button from "../../components/Button";

const AboutPage =()=>(

<section id="aboutSection">
        <div id="aboutMeTextsFlexContainer">
            <div id="aboutMeTextsFlexItem">
                <h1 className="title">Sobre Mim</h1>
                <p className="customLineHeight">Olá! Me chamo Hervellen e sou formada em Sistemas de Informação. Tenho mais de 6 anos de experiência na área de TI, atuando como Analista de Suporte Sênior. Ao longo da minha trajetória, desenvolvi uma base sólida em resolução de problemas, atendimento técnico e monitoramento de sistemas e foi justamente essa vivência que despertou em mim a paixão por desenvolvimento.

                    Hoje, estou em transição para a área de programação, com foco em desenvolvimento Full Stack. Trabalho com tecnologias como JavaScript, TypeScript, Node.js, HTML, CSS, Next.js e outras ferramentas modernas. Estou sempre em busca de novos desafios, conhecimento e, claro, boas práticas de código.</p>
                    <Button buttonType="linkedin"/>
            </div>
        </div>
        <div id="aboutMePhoto"></div>
    </section>


)

export default AboutPage;