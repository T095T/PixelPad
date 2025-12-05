"use client";
import React, { useCallback, useEffect, useState } from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "@liveblocks/react";
import CursorChat from "./cursor/CursorChat";
import { CursorMode } from "@/types/type";

export default function Live() {
  const others = useOthers(); //return list of other live users.
  const [{ cursor }, updateMyPresence] = useMyPresence() as any; //  get or update my presence
  const [cursorState, setcursorState] = useState({mode:CursorMode.Hidden})

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } }); //getting cursor position
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
   setcursorState({mode:CursorMode.Hidden})
    updateMyPresence({ cursor: null, message: null }); //hideing cursor posiion on leave
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } }); //getting cursor position
  }, []);

  useEffect(()=>{
    const onKeyUp = (e: KeyboardEvent)=>{
        if(e.key ==="/"){
            setcursorState({mode:CursorMode.Chat})
            previousMessage:null
            message='';
        }
        else if(e.key ==="Escape"){
            updateMyPresence({message:''})
            setcursorState({mode:CursorMode.Hidden})
        }
    }
    const onKeyDown = (e: KeyboardEvent)=>{
        if(e.key ==="/"){
            e.preventDefault();
        }
    }
    window.addEventListener('keyup',onKeyUp)
    window.addEventListener('keydown',onKeyDown)

    return()=>{                                             //removingf event listeners
        window.removeEventListener('keyup',onKeyUp)
    window.removeEventListener('keydown',onKeyDown)
    }
  },[updateMyPresence])

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-[100vh] w-full flex justify-center items-center "
    >
      <h1 className="text-2xl text-black">Main Edit Space</h1>
      {cursor && (
        <CursorChat 
        cursor={cursor}
        cursorState={cursorState}
        setCursorState={setcursorState}
        updateMyPresence={updateMyPresence}
        />
      )}
      <LiveCursors others={others} />
    </div>
  );
}
