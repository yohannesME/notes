import ReactMarkDown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No Note Selected.</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(evt) => onEditField("title", evt.target.value)}
          autoFocus
        ></input>
        <textarea
          id="body"
          placeholder="write your notes here."
          value={activeNote.body}
          onChange={(evt) => onEditField("body", evt.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkDown className="markdown-preview">
          {activeNote.body}
        </ReactMarkDown>
      </div>
    </div>
  );
}

export default Main;
