import { useEffect, useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
import { FcPlus } from "react-icons/fc";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalUpdateQuiz from "./ModalUpdateQuiz";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import QuizQA from "./QuizQA";
import AssignQuiz from "./AssignQuiz";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [listQuiz, setListQuiz] = useState([]);
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };
  // const handleChangeFile = (event) => {
  //   if (event.target && event.target.files && event.target.files[0]) {
  //     setPreviewImage(URL.createObjectURL(event.target.files[0]));
  //     setImage(event.target.files[0]);
  //   } else {
  //     // setPreviewImage("");
  //   }
  // };

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const resetData = () => {
    setDataUpdate({});
  };

  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error("Name/Description is required!");
      return;
    }

    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
      fetchQuiz();
    } else {
      toast.error(res.EM);
    }
  };

  const handleEditBtn = (quiz) => {
    setShowModalUpdateQuiz(true);
    setDataUpdate(quiz);
  };
  const handleDeleteBtn = (quiz) => {
    setShowModalDeleteQuiz(true);
    setDataDelete(quiz);
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your quiz name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="my-3">
                  {" "}
                  <Select
                    value={type}
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder={"Quiz type..."}
                  />
                </div>
                {/* <div className="col-md-12">
                  <label
                    className="form-label label-upload"
                    htmlFor="labelUpload"
                  >
                    <FcPlus />
                    Upload File Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    hidden
                    id="labelUpload"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="col-md-12 img-preview">
                  {previewImage ? (
                    <img src={previewImage} />
                  ) : (
                    <span>Preview Image</span>
                  )}
                </div> */}
                <div className="more-actions form-group">
                  <label className="mb-1">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleSubmitQuiz()}
                  >
                    Save
                  </button>
                </div>
              </fieldset>
            </div>

            <div className="list-detail">
              <TableQuiz
                listQuiz={listQuiz}
                handleEditBtn={handleEditBtn}
                handleDeleteBtn={handleDeleteBtn}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Update question answers</Accordion.Header>
          <Accordion.Body>
            <QuizQA />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Assign to Users</Accordion.Header>
          <Accordion.Body>
            <AssignQuiz />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        resetData={resetData}
      />
      <ModalDeleteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
    </div>
  );
};

export default ManageQuiz;
