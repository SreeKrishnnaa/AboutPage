import React, { useEffect, useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



const formTheme = createTheme({
  palette: {
    primary: {
      main: "#F40F56", 
    },
    secondary: {
      main: "#008000", 
    },
    background: {
      default: "#000000",
    },
  },
  text: {
    primary: {
      main: "#FFFFFF", 
    },
  },
});
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

  const deletePdf = async (pdf) => {
    try {
      console.log("Deleting PDF with ID:", pdf._id);

      const result = await axios.delete(`http://localhost:5000/deletefiles/${pdf._id}`);
      console.log("Delete Result:", result.data);

      if (result.data.status === "ok") {
        alert("Deleted Successfully!!!");
        getPdf();
      } else {
        alert("Delete failed. Check console for details.");
      }
    } catch (error) {
      console.error("Error deleting PDF:", error.message);
    }
  };

  return (
    <ThemeProvider theme={formTheme} >
      <div
        style={{
          backgroundColor:"beige",
          marginTop: "60px",
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          background: '#f9f9f9',
        }}
      >
        <form onSubmit={submitImage} style={{marginBottom: '20px' }}>
          <h1 style={{ marginBottom: '20px', color:"black" }}>Upload Files</h1>
          <TextField sx={{backgroundColor:"white"}}
            type="text"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '15px' }}
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '25px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
            }}
            required
          />
          <Button type="submit" variant="contained" color="primary" style={{ width: '60%' }}>Submit</Button>
        </form>
        <div className="uploaded">
          <h2 style={{ marginBottom: '10px', color: formTheme.palette.primary.main }}>Uploaded PDF:</h2>
          <div className="output-div">
            {allImage &&
              allImage.map((data) => (
                <div key={data._id} style={{ padding: "15px", borderRadius: "8px" }}>
                <h4>Title: {data.title}</h4>
                <h5>Name: {data.pdf}</h5>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => showPdf(data.pdf)}
                  style={{ marginRight: '5px' }}
                >
                  Show Pdf
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deletePdf(data)}
                >
                  Delete
                </Button>
              </div>
              ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Form;
