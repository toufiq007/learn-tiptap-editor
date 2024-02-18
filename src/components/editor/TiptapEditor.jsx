/* eslint-disable react/prop-types */
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import {
  FaHeading,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUndo,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaParagraph,
  FaShippingFast,
  FaCar,
  FaCropAlt,
  FaTable,
  FaFolder,
  FaHeadphones,
  FaLock,
  FaPhone,
} from "react-icons/fa";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./style.scss";
import { useCallback, useState } from "react";
import Underline from "@tiptap/extension-underline";
import HeadingContent from "../allToolBoxContents/Heading";
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
    content: `<h1 style="text-align:center;margin-bottom:1rem">{{Our table content}}</h1><table><tbody><tr><th>Name</th><th colspan="3">Description</th></tr><tr><td>Cyndi Lauper</td><td>singer</td><td>songwriter</td><td>actress</td></tr><tr><td>Marie Curie</td><td>scientist</td><td>chemist</td><td>physicist</td></tr><tr><td>Indira Gandhi</td><td>prime minister</td><td colspan="2">politician</td></tr></tbody></table>`,
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
    ],
    content: `
      <h3>
        Have you seen our tables? They are amazing!
      </h3>
      <ul>
        <li>tables with rows, cells and headers (optional)</li>
        <li>support for <code>colgroup</code> and <code>rowspan</code></li>
        <li>and even resizable columns (optional)</li>
      </ul>
      <p>
        Here is an example:
      </p>
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
      </table>



      <p>korem201</p>
      <p>korem201</p>
      <p>korem201</p>
    `,
  });

  // all events
  const handleDragStart = (e, contentId) => {
    e.dataTransfer.setData("text/plain", contentId.toString());
  };
  const handleOnDrag = (e) => {
    e.preventDefault()
    const contentId = e.dataTransfer.getData("text/plain");
    const boxContent = toolBoxItems.find((box) => box.id === Number(contentId));
    editor.commands.insertContent(boxContent?.content);
  };
  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  // all button handlers
  // const insertHanldeTable = useCallback(() => {
  //   editor
  //     .chain()
  //     .focus()
  //     .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
  //     .run();
  // });
  // bubble menu handler
  const bubbleBoldMenuHanlder = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  });
  const bubbleItalicMenuHandler = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  });
  const bubbleStrikeMenuHanlder = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  });
  const bubbleHeadingMenuHandler = useCallback(() => {
    editor.chain().toggleHeading({ level: 1 }).run();
  });
  const bubbleUndoMenuHanlder = useCallback(() => {
    editor.chain().focus().undo().run();
  });
  const bubbleMenuUnderlineMenuHanlder = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  });
  const bubbleMenuLeftHandler = useCallback(() => {
    editor.chain().focus().setTextAlign("left").run();
  });
  const bubbleMenuRightHandler = useCallback(() => {
    editor.chain().focus().setTextAlign("right").run();
  });

  const bubbleMenuCenterHandler = useCallback(() => {
    editor.chain().focus().setTextAlign("center").run();
  });

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "1rem 0", fontSize: "2rem", textAlign: "center" }}>
        Our Editor
      </h2>
      <div
        style={{
          border: "2px solid #ededed",
          height: "85vh",
          overflowY: "auto",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {editor && (
          <BubbleMenu
            className="bubble-menu"
            tippyOptions={{ duration: 100 }}
            editor={editor}
          >
            <button
              onClick={bubbleBoldMenuHanlder}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
              <FaBold />
            </button>

            <button
              onClick={bubbleItalicMenuHandler}
              className={editor.isActive("italic") ? "is-active" : ""}
            >
              <FaItalic />
            </button>
            <button
              onClick={bubbleStrikeMenuHanlder}
              className={editor.isActive("strike") ? "is-active" : ""}
            >
              <FaStrikethrough />
            </button>
            <button
              onClick={bubbleHeadingMenuHandler}
              className={
                editor.isActive("heading", { level: 1 }) ? "is-active" : ""
              }
            >
              <FaHeading />
            </button>

            <button
              onClick={bubbleUndoMenuHanlder}
              disabled={!editor.can().chain().focus().undo().run()}
            >
              <FaUndo />
            </button>

            <button
              onClick={bubbleMenuUnderlineMenuHanlder}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <FaUnderline />
            </button>

            <button
              onClick={bubbleMenuLeftHandler}
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              <FaAlignLeft />
            </button>
            <button
              onClick={bubbleMenuCenterHandler}
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              <FaAlignCenter />
            </button>
            <button
              onClick={bubbleMenuRightHandler}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              <FaAlignRight />
            </button>
          </BubbleMenu>
        )}
        <div
          style={{
            width: "70%",
            background: "#ededed",
            height: "85vh",
            overflowY: "auto",
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
                    background: "#ededed",
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
