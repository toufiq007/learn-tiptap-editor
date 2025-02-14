/* eslint-disable react/prop-types */
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from '@tiptap/extension-highlight'

import "./style.scss";
import Underline from "@tiptap/extension-underline";
import { toolBoxItems } from "../utils/data";
import Bubblesmenu from "./Bubblesmenu";

const TiptapEditor = () => {
  const CustomDocument = Document.extend({
    content: "heading block*",
  });
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Underline,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "{{What’s the title?}}";
          }
          return "Can you add some further context?";
        },
      }),
      Highlight.configure({ multicolor: true })
    ],
    content: ``,
  });

  // all events
  const handleDragStart = (e, contentId) => {
    e.dataTransfer.setData("text/plain", contentId.toString());
  };
  const handleOnDrag = (e) => {
    e.preventDefault();
    const contentId = e.dataTransfer.getData("text/plain");
    const boxContent = toolBoxItems.find((box) => box.id === Number(contentId));
    console.log(boxContent);
    editor.commands.insertContent(boxContent?.content);
  };
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        style={{
          border: "2px solid #ededed",
          height: "calc(100vh - 68px)",
          overflowY: "auto",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {editor && <Bubblesmenu editor={editor} BubbleMenu={BubbleMenu} />}
        <div
          style={{
            width: "70%",
            background: "var(--editorBackground)",
            height:"calc(100vh - 130px)",
            overflow:"auto"
          }}
        >
          <EditorContent
            onDrop={(e) => handleOnDrag(e)}
            onDragOver={(e) => handleOnDragOver(e)}
            editor={editor}
          />
        </div>
        <div
          style={{
            width: "30%",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
            overflow:"auto",
            // padding:"20px"
          }}
        >
          {toolBoxItems &&
            toolBoxItems.map((box, index) => (
              <div key={index}>
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "150px",
                    background: "var(--toolBoxBackground)",
                    cursor: "move",
                    borderRadius: "10px",
                  }}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, box.id)}
                  onDragEnd={(e) => handleDragEnd(e)}
                  onDrag={(e) => handleOnDrag(e)}
                >
                  <h4 style={{ fontSize: "2rem", marginBottom: ".5rem" }}>
                    {box.title}
                  </h4>
                  <span style={{ fontSize: "2rem" }}>{box.icon}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TiptapEditor;
