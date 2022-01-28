import React,{ useState, useEffect } from "react";
import "./EditRequest.css";
import axios from "axios";
import Header from "../CommonComponent/Header.js";
import Footer from "../CommonComponent/Footer.js";
import { useParams } from 'react-router-dom'

export default function EditRequest() {

    const { id } = useParams();

    const [modifyButton, setModifyButton] = useState(true);
    const [saveButton, setSaveButton] = useState(false);
    const [withdrawButton, setWithdraw] = useState(true);
    const [cancelButton, setCancelButton] = useState(false);

    const buttonDisplay = (event) => {
        if (event.target.id == 'modifyButton') {
            setModifyButton(false);
            setSaveButton(true);
            setWithdraw(false);
            setCancelButton(true);
        }
        if (event.target.id == 'cancelButton') {
            setModifyButton(true);
            setSaveButton(false);
            setWithdraw(true);
            setCancelButton(false);
        }
    };

    const disableFields = (status) => {

    };

    // const handleChange = (event) => {
    //     setEditField({ ...editField, [event.target.name]: event.target.value });
    // };
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/req/get/${id}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // console.log("Initialy it is working",id);
    }, []);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const createReq = {
            reqId : data.reqId,
            clusterId: data.clusterName,
            subClusterId: data.subClusterName,
            gradeId: data.grade,
            techStack: data.techStack,
            coreSkill: data.coreSkill,
            skillDetails: data.skillDetails,
            startDate: data.startDate,
            createdDate: data.createdDate,
            ownerId: data.ownerId,
            reasonForDemand: data.reasonForDemand,
            workLocation: data.workLocation,
            area: data.area,
            status: data.status,
            soNumber: data.soNumber,
            comment: data.comment
        };
        console.log(createReq);
        /* sending post request*/
        // axios.post('https://localhost:3000/createRequest/post', createReq);
    };

    return (
        <div>
            <Header> </Header>
            <div className="col-lg-12 parent-container">
                <div className="container-fluid well">
                    <div
                        className="row text-light"
                        style={{ backgroundColor: "#1434A4" }}
                    >
                        <div
                            className="col-lg-12 mt-1"
                            style={{ width: "170px", fontSize: "large" }}
                        >
                            <i className="fas fa-align-justify"> </i>&nbsp;Modify Request
                        </div>
                    </div>
                    <div className="box">
                        <form action="#">
                            <div className="form">
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        name="reqId"
                                        value={data.reqId}
                                        placeholder="Request ID"
                                        disabled
                                    >

                                    </input>
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        id="cluster"
                                        name="cluster"
                                        value={data.clusterName}
                                        placeholder="Cluster ID"
                                        disabled
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        name="subCluster"
                                        value={data.subClusterName}
                                        placeholder="Sub Cluster ID"
                                        disabled
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control  form-control-sm"
                                        name="grade"
                                        value={data.grade}
                                        placeholder="Grade ID"
                                        disabled = {modifyButton}
                                    />
                                </div>
                                {/* <div className="component">
                                            <input className="form-control form-control-sm" type="text" disabled
                                                 />
                                            
                                        </div> */}
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        size="15"
                                        placeholder="Technology Stack"
                                        name="stack"
                                        value={data.techStack}
                                        disabled = {modifyButton}
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        size="20"
                                        placeholder="Core Skill"
                                        name="skill"
                                        value={data.coreSkill}
                                        disabled = {modifyButton}
                                    />
                                </div>
                                <div className="component text-area">
                                    <textarea
                                        className="form-control form-control-sm textareaSize"
                                        name="jd"
                                        placeholder="Skill Details"
                                        value={data.skillDetails}
                                        disabled = {modifyButton}
                                    >

                                    </textarea>
                                </div>
                                <div className="component startDate">
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        name="startDate"
                                        placeholder="Start Date"
                                        value={data.startDate}
                                        disabled
                                    />
                                </div>
                                <div className="component createdDate">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        defaultValue={data.createdDate}
                                        placeholder="Created Date"
                                        disabled
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        size="15"
                                        className="form-control form-control-sm"
                                        type="text"
                                        defaultValue={data.ownerId}
                                        placeholder="Owner ID"
                                        disabled
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        value={data.reasonForDemand}
                                        name="reasonForDemand"
                                        placeholder="Reason For Demand"
                                        disabled = {modifyButton}
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        name="location"
                                        value={data.workLocation}
                                        placeholder="Work Location"
                                        disabled = {modifyButton}
                                    />
                                </div>
                                <div className="component">
                                    <input
                                        className="form-control form-control-sm"
                                        aria-label=".form-select-sm example"
                                        name="area"
                                        placeholder="Area"
                                        value={data.area}
                                        disabled = {modifyButton}
                                    />
                                </div>
                                <div className="component">
                                    <select
                                        className="form-select form-select-sm"
                                        aria-label=".form-select-sm example"
                                        name="status"
                                        value={data.status}
                                        disabled
                                        // onChange={handleChange}
                                    >
                                        <option defaultValue="Open"> Open </option>
                                        <option value="Pending"> In Progress </option>
                                        <option value="Pending"> Pending </option>
                                        <option value="Hold"> On Hold </option>
                                        <option value="Withdraw"> Withdraw </option>
                                        <option value="Withdraw"> Closed </option>
                                        <option value="Withdraw"> Cancelled </option>
                                    </select>
                                </div>
                                <div className="component soNum">
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        name="SO"
                                        placeholder="Enter SO Number"
                                        value={data.soNumber}
                                        disabled /*onChange={handleChange}*/
                                    >

                                    </input>
                                </div>
                                <div className="component text-area2">
                                    <textarea
                                        className="form-control form-control-sm"
                                        name="comments"
                                        placeholder="Comment"
                                        value={data.comment}
                                        disabled
                                        // onChange={handleChange}
                                    >

                                    </textarea>
                                </div>
                            </div>
                            <div className="btns">
                                <div>
                                    {
                                        withdrawButton ?
                                            <button
                                                type="reset"
                                                className="btn btn-sm btn-danger reset"
                                            >
                                                <i class="fas fa-eject"></i>&nbsp;Withdraw
                                            </button>
                                            : null
                                    }

                                    {
                                        cancelButton ?
                                            <button
                                                type="reset"
                                                className="btn btn-sm btn-info reset"
                                                id="cancelButton"
                                                onClick={buttonDisplay}
                                            >
                                                <i class="fas fa-window-close"></i>&nbsp;Cancel
                                            </button>
                                            : null
                                    }

                                    {
                                        saveButton ?
                                            <button
                                                type="reset"
                                                className="btn btn-sm btn-success reset"
                                                onClick={handleSubmit}
                                            >

                                                <i class="fas fa-save"></i>&nbsp;Save
                                            </button>
                                            : null
                                    }

                                    {
                                        modifyButton ?
                                            <button
                                                type="submit"
                                                className="btn btn-sm btn-primary submit"
                                                id="modifyButton"
                                                onClick={buttonDisplay}
                                            >
                                                <i className="fas fa-check-square"> </i>&nbsp;Modify
                                            </button>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer> </Footer>
        </div>
    );
}
