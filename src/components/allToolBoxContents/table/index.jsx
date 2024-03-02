const Table = () => {
  return `<h3>Have you seen our tables? They are amazing!</h3>
  <ul>
    <li>tables with rows, cells and headers (optional)</li>
    <li>
      support for <code>colgroup</code> and <code>rowspan</code>
    </li>
    <li>and even resizable columns (optional)</li>
  </ul>
  <p>Here is an example:</p>
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th colSpan="3">Description</th>
      </tr>
      <tr>
        <td>Cyndi Lauper</td>
        <td>singer</td>
        <td>songwriter</td>
        <td>actress</td>
      </tr>
      <tr>
        <td>Marie Curie</td>
        <td>scientist</td>
        <td>chemist</td>
        <td>physicist</td>
      </tr>
      <tr>
        <td>Indira Gandhi</td>
        <td>prime minister</td>
        <td colSpan="2">politician</td>
      </tr>
    </tbody>
  </table>
  `;
};

export default Table;
