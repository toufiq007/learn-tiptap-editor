import { useState } from "react";
import TiptapEditor from "./editor/TiptapEditor";
import ToolBox from "./toolbox/ToolBox";
import parse from "html-react-parser";
import {
  FaCar,
  FaCropAlt,
  FaFolder,
  FaHeading,
  FaHeadphones,
  FaLock,
  FaParagraph,
  FaPhone,
  FaShippingFast,
  FaTable,
} from "react-icons/fa";
import HeadingContent from "./allToolBoxContents/Heading";

const Layout = () => {
  // initial state all toolbox data
  const [toolBoxItems, setToolBoxItems] = useState([
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
      content: "<h2>this is shipping</h2>",
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
      content: `<table>
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
      content: parse("<h1>this is all menus</h1>"),
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        padding: "0 1rem",
        gap: "1rem",
      }}
    >
      <TiptapEditor />
      <ToolBox toolBoxItems={toolBoxItems} />
    </div>
  );
};

export default Layout;
