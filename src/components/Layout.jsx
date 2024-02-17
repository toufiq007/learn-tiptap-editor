
import TiptapEditor from "./editor/TiptapEditor";
import ToolBox from "./toolbox/ToolBox";

const Layout = () => {
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
      <ToolBox />
    </div>
  );
};

export default Layout;
