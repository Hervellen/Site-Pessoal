import './styles.css';
import Button from "../../components/Button";

const SkillsPage = () =>(
    <section id="skillsSection">
    <div className="overlay">
     <h1 className="title">Skills</h1>
     <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ES6</li>
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Next.js</li>
     </ul>
     <Button buttonType="downloadCompleteResume"/>
    </div>
</section>

)

export default SkillsPage;