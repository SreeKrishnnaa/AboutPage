import React, { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/getfiles");
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const result = await axios.post(
      "http://localhost:5000/uploadfiles",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <div style={{marginTop: "60px", maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
      <form onSubmit={submitImage} style={{ marginBottom: '20px' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Upload Files</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #ddd', backgroundColor: '#fff' }}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ width: '100%', padding: '12px', marginBottom: '25px', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #ddd', backgroundColor: '#fff' }}
          required
        />
        <button type="submit" style={{ width: '60%', padding: '12px', color: "black", borderRadius: "20px", backgroundColor: 'pink' }}>Submit</button>
      </form>
      <div className="uploaded">
        <h2 style={{ marginBottom: '10px' }}>Uploaded PDF:</h2>
        <div className="output-div">
          {allImage &&
            allImage.map((data) => (
              <div key={data._id} style={{ marginBottom: '15px' }}>
                <h3>Title: {data.title}</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => showPdf(data.pdf)}
                  style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Show Pdf
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
