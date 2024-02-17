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
} from "react-icons/fa";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";

import "./style.scss";
import { useCallback } from "react";
import Underline from "@tiptap/extension-underline";

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
              <h3 style="text-align:center">
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
              <p>Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.</p>
            <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />

            <h2>
      Hi there,
    </h2>
    <p>
      this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
     <pre><code class="language-css">body {
     display: none;
     }</code></pre>
     <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
          <p>
            … if you pass a custom document. That’s the beauty of having full control over the schema.
          </p>

          <p>

          </p>

            `,
    
  });

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
    <div style={{ width: "70%" }}>
      <h2 style={{ margin: "1rem 0", fontSize: "2rem", textAlign: "center" }}>
        Our Editor
      </h2>
      <div
        style={{
          border: "2px solid #ededed",
          height: "85vh",
          overflowY: "auto",
          padding: "2rem",
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
        {/* <button onClick={addImage}>add image from URL</button> */}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
