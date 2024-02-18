import TiptapEditor from "./editor/TiptapEditor";
const Layout = () => {
  // initial state all toolbox data
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
      
    </div>
  );
};

export default Layout;
