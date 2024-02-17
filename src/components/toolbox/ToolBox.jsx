/* eslint-disable react/prop-types */
import {
  FaCropAlt,
  FaFolder,
  FaHeadphones,
  FaLock,
  FaPhone,
  FaParagraph,
  FaHeading,
  FaShippingFast,
  FaCar,
  FaTable,
} from "react-icons/fa";
import HeadingContent from "../allToolBoxContents/Heading";
const ToolBox = () => {
  const handleDragStart = (e, content) => {
    console.log(content);
    e.dataTransfer.setData("text/plain", content);
    console.log("drag start");
  };
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };
  const toolBoxItems = [
    {
      id: 1,
      title: "Heading",
      icon: <FaHeading />,
      content: <HeadingContent />,
    },

    {
      id: 2,
      title: "Paragrapgh",
      icon: <FaParagraph />,
      content: "amar nam paragraph",
    },
    {
      id: 3,
      title: "Shipping",
      icon: <FaShippingFast />,
      content: `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
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
          <td colspan="2">politician</td>
        </tr>
      </tbody>
    </table>`,
    },
    {
      id: 4,
      title: "Delivery",
      icon: <FaCar />,
      content: "<h1>this is all delivery</h1>",
    },
    {
      id: 5,
      title: "Content",
      icon: <FaCropAlt />,
      content: "<h1>this is all content</h1>",
    },
    {
      id: 6,
      title: "Table",
      icon: <FaTable />,
      content: "<h1>this is all table</h1>",
    },
    {
      id: 7,
      title: "Drawing",
      icon: <FaFolder />,
      content: "<h1>this is all drawing</h1>",
    },
    {
      id: 8,
      title: "Content",
      icon: <FaHeadphones />,
      content: "<h1>this is all another content</h1>",
    },

    {
      id: 9,
      title: "Images",
      icon: <FaLock />,
      content: "<h1>this is all images</h1>",
    },
    {
      id: 10,
      title: "Menus",
      icon: <FaPhone />,
      content: "<h1>this is all menus</h1>",
    },
  ];
  return (
    <div style={{ width: "30%" }}>
      <h2 style={{ fontSize: "2rem", textAlign: "center", margin: "1rem 0" }}>
        All Tool box
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          marginTop: "1rem",
          height: "85vh",
          overflowY: "auto",
        }}
      >
        {toolBoxItems.map((box, index) => {
          console.log(box.content);
          return (
            <>
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "150px",
                  background: "#ededed",
                  cursor: "move",
                  borderRadius: "10px",
                }}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, box.content)}
                onDragEnd={(e) => handleDragEnd(e, box)}
              >
                <h4 style={{ fontSize: "2rem", marginBottom: ".5rem" }}>
                  {box.title}
                </h4>
                <span style={{ fontSize: "2rem" }}>{box.icon}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ToolBox;
