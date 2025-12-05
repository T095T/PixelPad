import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";
// import { useUpdateMyPresence } from "@liveblocks/react";
import { transform } from "next/dist/build/swc/generated-native";
import React from "react";

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateMyPresence({ message: e.target.value });
  setCursorState({
    mode: CursorMode.Chat,
    previousMessage: e.target.value,
  });
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    setCursorState({
      mode: CursorMode.Chat,
      //ts-ignore
      previousMessage: cursorState.message,
      message: "",
    });
  } else if (e.key === "Escape") {
    setCursorState({
        mode: CursorMode.Hidden,
        previousMessage: ""
    });
  }
};
function CursorChat({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) {
  return (
    <div
      className="absolute top-0 left-0 "
      style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />
          <div className="absolute left-2 top-5 bg-blue-300 px-3 py-2 text-sm leading-relaxed text-black rounded-md">
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input
              className="z-10 w-60 border-none bg-transparent text-black placeholder:blue-300 outline-none autoFocus={true}"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.message ? "" : "Type a message..."}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CursorChat;
function updateMyPresence(arg0: { message: string; }) {
    throw new Error("Function not implemented.");
}

function setCursorState(arg0: { mode: CursorMode; previousMessage: string; }) {
    throw new Error("Function not implemented.");
}

