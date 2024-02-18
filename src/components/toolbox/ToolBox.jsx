/* eslint-disable react/prop-types */
const ToolBox = ({ toolBoxItems }) => {
  // set data to toolbox
  const handleDragStart = (e, content) => {
    console.log(content);
    e.dataTransfer.setData("text/plain", content);
    console.log("drag start");
  };
  // clear data to toolbox
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };
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
