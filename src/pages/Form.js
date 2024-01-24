import React, { useEffect, useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const formTheme = createTheme({
  palette: {
    primary: {
      main: "#F40F56",
    },
    secondary: {
      main: "#008000",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  text: {
    primary: {
      main: "#000000",
    },
  },
});

const styles = {
  root: {
    backgroundColor: "#D0E0E3",
    marginTop: "60px",
    padding: '20px',
    borderRadius: '8px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  uploadBox: {
    background: "#f9f9f9",  // Set background color to beige
    padding: '20px',  // Add padding for better aesthetics
    borderRadius: '8px',
  },
  uploadBtn: {
    width: '60%',
  },
  uploadedContainer: {
    marginTop: '20px',
  },
  uploadedPdf: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

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
        alert("file moved to recycle bin !!");
        getPdf();
      } else {
        alert("Delete failed. Check console for details.");
      }
    } catch (error) {
      console.error("Error deleting PDF:", error.message);
    }
  };

  return (
    <ThemeProvider theme={formTheme}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper style={styles.root}>
            <form onSubmit={submitImage} style={styles.formContainer}>
              <Typography variant="h4" style={{ marginBottom: '20px', color: formTheme.palette.text.primary.main }}>
                Upload Files
              </Typography>
              <Paper style={styles.uploadBox}>
                <TextField
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
                    backgroundColor: 'beige',  // Set background color to beige
                  }}
                  required
                />
                <Button type="submit" variant="contained" color="primary" style={styles.uploadBtn}>
                  Submit
                </Button>
              </Paper>
            </form>
            <div className="uploaded" style={styles.uploadedContainer}>
              <Typography variant="h5" style={{ marginBottom: '10px', color: formTheme.palette.primary.main }}>
                Uploaded PDF:
              </Typography>
              <div className="output-div">
                {allImage &&
                  allImage.map((data) => (
                    <Paper key={data._id} style={styles.uploadedPdf}>
                      <Typography variant="h6">Title: {data.title}</Typography>
                      <Typography variant="body1">Name: {data.pdf}</Typography>
                      <Typography variant="body1">User ID: {data.userName}</Typography>
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
                    </Paper>
                  ))}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Form;
