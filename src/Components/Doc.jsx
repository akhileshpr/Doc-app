import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { db } from "../config/firebase";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getDocs, collection, addDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Col, Row } from "react-bootstrap";
function Doc() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const [value, setValue] = useState("");
  const [getFirebase, setGetFirebase] = useState([]);
  const refCollection = collection(db, "doc");
  const getData = async () => {
    const data = await getDocs(refCollection);
    const finalData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGetFirebase(finalData);
  };

  useEffect(() => {
    getData();
  }, [getFirebase]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };
  const [input, setInput] = useState({
    title: "",
  });
  console.log(input);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addData = async (e) => {
    e.preventDefault();
    // setDoc(doc(db, "doc", "title"), input)
    await addDoc(collection(db, "doc"), input);
    alert("added succesfully...");
    handleClose();
  };

  return (
    <div>
      <h1 className="text-center">Doc App</h1>
      <div className="text-center">
        <Button onClick={handleOpen}>
          <i class="fa-solid fa-plus"></i>Add Document
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                id="demo-helper-text-misaligned-no-helper w-100"
                label="add title"
                onChange={(e) =>
                  setInput({ ...input, ["title"]: e.target.value })
                }
              />
              <br />
              <Button
                variant="outlined"
                className="text-center"
                onClick={(e) => addData(e)}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Modal>

        <Row
          style={{ height: "100vh", width: "100%" }}
          className="d-flex justify-content-center mt-5"
        >
          {getFirebase?.map((i, index) => (
            <Col lg={3}>
              <Card sx={{ minWidth: 275 }} value={index}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <div className="d-flex justify-content-between">
                      {i.title}
                      <div>
                        <Link to={`editDoc/${i?.id}`}>
                          <i class="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <i class="fa-solid fa-trash m-2"></i>
                      </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: i?.description }} />
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Doc;
