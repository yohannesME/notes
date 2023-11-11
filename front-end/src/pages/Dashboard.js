import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function Dashboard() {
  const { user } = useGlobalContext();
  const { name, userId, role } = user;

  // seter and getter for the notes
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);

  // store the notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // add note event handler that is found in the sidebar
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => idToDelete !== note.id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

const Wrapper = styled.div`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
`;

export default Dashboard;
