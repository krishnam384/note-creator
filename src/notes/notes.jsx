import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NotesList from "./notesList";
import { addNotes } from "../redux/action/action";

export const Notes = () => {
  const [note, setNotes] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotes(note));
    setNotes("");
  };
  return (
    <div>
      <h2>Add Notes</h2>

      <form onSubmit={handleSubmit}>
        <input type='text' name='note' onChange={handleChange} value={note} />

        <input type='submit' value='Add' />
      </form>
      <NotesList />
    </div>
  );
};
