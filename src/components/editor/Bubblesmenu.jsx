/* eslint-disable react/prop-types */
import "./style.scss";
import { useCallback } from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaHeading,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaFillDrip,
} from "react-icons/fa";

const CustomBubbleMenu = ({ editor, BubbleMenu }) => {
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
    <div>
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
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
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
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <FaAlignRight />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <FaFillDrip />
        </button>
      </BubbleMenu>
    </div>
  );
};

export default CustomBubbleMenu;
