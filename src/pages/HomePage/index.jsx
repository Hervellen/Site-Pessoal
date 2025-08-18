import "./styles.css";
import Button from "../../components/Button";
import { useState } from "react";
import { useEffect } from "react";
const HomePage = () => {
  const [resumeDownloadComplete, setResumeDownloadComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setResumeDownloadComplete(true);
    }, 5000);
  }, []);

  return (
    <section id="homeSection">
      <div id="homePhoto"></div>
      <div id="homeContent">
        <div id="homeTexts">
          <h1 className="title">Hervellen Maximiano</h1>
          <h2>Software Engineer</h2>
          {resumeDownloadComplete ? (
            <Button buttonType="downloadResume"></Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
