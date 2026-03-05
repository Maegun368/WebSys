import Card from "./card";

function Skills({ visible, skills }) {
  return (
    <>
      {visible && (
        <Card title="SKILLS" id="skillsSection">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}

export default Skills;