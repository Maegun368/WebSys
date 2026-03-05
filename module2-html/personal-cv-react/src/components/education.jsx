import Card from "./card";

function Education({ education }) {
  return (
    <Card title="EDUCATION">
      <table>
        <thead>
          <tr>
            <th>PROGRAM</th>
            <th>INSTITUTION</th>
            <th>YEAR GRADUATED</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Education;