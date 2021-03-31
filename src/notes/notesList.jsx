import React from "react";
import { useSelector } from "react-redux";

const NotesList = React.memo(() => {
  const notesList = useSelector((state) => state.notesReducer);
  console.log(notesList);
  return notesList.map((note, i) => {
    return <h1 key={i}>{note}</h1>;
  });
});

NotesList.displayName = "NotesList";

export default NotesList;
