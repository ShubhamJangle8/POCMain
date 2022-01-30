import React from 'react';
import { useState, useEffect } from 'react';
import './CreateRequest.css';
import $ from 'jquery';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
import ToastrMessage from '../CommonComponent/ToastrMessage';

import 'react-toastify/dist/ReactToastify.css';

export default function CreateRequest() {




    const history = useHistory();
    const [subClusterArray, setSubClusterArray] = useState([]);
    const [form, setForm] = useState({
        cluster: '',
        subCluster: '',
        grade: '',
        stack: '',
        skill: '',
        jd: '',
        startDate: '',
        createdDate: date(new Date()),
        owner: 'D S Nagraj',
        reasonForDemand: '',
        location: '',
        area: ''
    });
    const [data, setData] = useState([]);
    const [gradeData, setGradeData] = useState([]);
    const [reqGrade, setReqGrade] = useState([]);
    const [skillErrMsg, setSkillErrMsg] = useState();
    const [stackErrMsg, setStackErrMsg] = useState();
    const [jdErrMsg, setJdErrMsg] = useState();
    const [statDateErrMsg, setStartDateErrMsg] = useState();
    const [clusterErr, setClusterErr] = useState(false);
    const [subClusterErr, setSubClusterErr] = useState(false);
    const [gradeErr, setGradeErr] = useState(false);
    const [stackErr, setStackErr] = useState(false);
    const [skillErr, setSkillErr] = useState(false);
    const [jdErr, setJdErr] = useState(false);
    const [startDateErr, setStartDateErr] = useState(false);
    const [demandErr, setDemandErr] = useState(false);
    const [locationErr, setLocationErr] = useState(false);
    const [areaErr, setAreaErr] = useState(false);
    const handleClusterChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value }); //using single hook
        setClusterErr(false);
        var subData = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].clusterId === event.target.value) {
                subData = data[i].subClusters;
            }
        }

        // console.log(event.target.value);
        setSubClusterArray(subData);
        // console.log(subClusterArray);
    }
    const handleSubClusterChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value }); //using single hook
        setSubClusterErr(false);
    }
    const handleGradeChange = (event) => {
        let g = event.target.value;
        // console.log(g);
        setForm({ ...form, [event.target.name]: g });//using single hook
        axios.get("http://localhost:8080/api/req/grade/get/" + g).then(
            res => {
                setReqGrade(res.data);
            }
        ).catch((err) => {
            console.log(err);
        })
        setGradeErr(false);

    }

    function date(d) {
        // console.log(`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`);
        return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
    }

    const handleStackChange = (event) => {
        let stack = event.target.value;
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        if (stack.length > 150) {
            setStackErrMsg('The characters should not exceed the limit of 150 characters');
            setStackErr(true);
        } else {
            setStackErr(false);
        }
    }
    const handleSkillChange = (event) => {
        let skill = event.target.value;
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        if (skill.length > 150) {
            setSkillErrMsg('The characters should not exceed the limit of 150 characters');
            setSkillErr(true);
        } else {
            setSkillErr(false);
        }
    }
    const handleJdChange = (event) => {
        let jd = event.target.value;
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        if (jd.length > 150) {
            setJdErrMsg('The characters should not exceed the limit of 150 characters');
            setJdErr(true);
        } else {
            setJdErr(false);
        }
    }
    const handleStartDateChange = (event) => {
        let date = event.target.value;
        // console.log(date);
        let d = (new Date(date)).inPast();
        if (d === true && date !== null) {
            setStartDateErrMsg("Please select a future date");
            setStartDateErr(d);
        } else {
            setForm({ ...form, [event.target.name]: event.target.value }); //using single hook
            setStartDateErr(d);
        }


    }
    const handleDemandChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        setDemandErr(false);
    }
    const handleLocationChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        setLocationErr(false);
    }
    const handleAreaChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });//using single hook
        setAreaErr(false);
    }
    Date.prototype.toShortFormat = function () {

        let monthNames = ["Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"];

        let day = this.getDate();

        let monthIndex = this.getMonth();
        let monthName = monthNames[monthIndex];

        let year = this.getFullYear();

        return `${day}-${monthName}-${year}`;
    }
    Date.prototype.inPast = function () {
        return this < new Date($.now());
    }

    useEffect(() => {
        // console.log(`createdDate: ${form.createdDate}`);
        axios.get('http://localhost:8080//api/req/clus/getAll').then(
            res => {
                setData(res.data);
                console.log(res);
            }
        ).catch((err) => {
            console.log(err);
        })
        axios.get('http://localhost:8080//api/req/grade/getAll').then(
            res => {
                setGradeData(res.data);
            }
        ).catch((err) => {
            console.log(err);
        })
    }, [])

    const openToasts = () => {
        ToastrMessage.notify(':74837488378478 Request Created Successfully.', 'top-right', 'success');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.cluster === '') {
            setClusterErr(true);
        }
        if (form.subCluster === '') {
            setSubClusterErr(true);
        }
        if (form.grade === '') {
            setGradeErr(true);
        }
        if (form.skill === '' || form.skill === null) {
            setSkillErrMsg('This is a required field');
            setSkillErr(true);
        }
        if (form.stack === '' || form.stack === null) {
            setStackErrMsg('This is a required field');
            setStackErr(true);
        }
        if (form.jd === '' || form.jd === null) {
            setJdErrMsg('Skill Details is required')
            setJdErr(true);
        }
        if (form.reasonForDemand === '') {
            setDemandErr(true);
        }
        if (form.location === '') {
            setLocationErr(true);
        }
        if (form.area === '') {
            setAreaErr(true);
        }
        if (form.startDate === '') {
            setStartDateErrMsg("This is the Required Field");
            setStartDateErr(true);
        }
        if (form.cluster !== '' && form.subCluster !== '' && form.grade !== '' &&
            (form.skill !== '' || form.skill !== null) && (form.stack !== '' || form.stack !== null) &&
            (form.jd !== '' || form.jd !== null) && form.reasonForDemand !== '' &&
            form.location !== '' && form.area !== '') {


            const createReq = {
                clusterId: form.cluster,
                subClusterId: form.subCluster,
                gradeId: form.grade,
                techStack: form.stack,
                coreSkill: form.skill,
                skillDetails: form.jd,
                startDate: date(new Date(form.startDate)),
                createdDate: form.createdDate,
                ownerId: form.owner,
                reasonForDemand: form.reasonForDemand,
                workLocation: form.location,
                area: form.area,
                status: 'open'
            }
            console.log(createReq);
            /* sending post request*/
            axios.post('http://localhost:8080/api/req/create', createReq).then(
                (res) => {
                    console.log(res);
                    ToastrMessage.notify(res.data.reqId + ': Request Created Successfully.', 'top-right', 'success');
                    setTimeout(() => {
                        history.push(`/editRequest/${res.data.reqId}`);
                    }, 2500);

                }
            ).catch((err) => {
                console.log(err);
            });
        }
    }
    const handleReset = (event) => {
        setForm({
            cluster: '',
            subCluster: '',
            grade: '',
            reqGrade: '',
            stack: '',
            skill: '',
            jd: '',
            startDate: '',
            createdDate: date(new Date()),
            owner: 'D S Nagraj',
            reasonForDemand: '',
            location: '',
            area: ''
        });
        setClusterErr(false);
        setSubClusterErr(false);
        setGradeErr(false);
        setStackErr(false);
        setSkillErr(false);
        setJdErr(false);
        setDemandErr(false);
        setLocationErr(false);
        setAreaErr(false);
        setStartDateErr(false);
    }

    return (
        <div>
            <Header></Header>
            <div className="col-lg-12 parent-container box">
                <div className="container-fluid well">
                    <div className="row text-light" style={{ backgroundColor: "#018BD3", width: '100%' }}>
                        <div className="col-lg-12 mt-1" style={{ width: "200px", fontSize: "large" }}>
                            <i className="fas fa-align-justify"></i> &nbsp;Request Resource
                        </div>
                    </div>
                    <div>
                        <form action="#">
                            <div className="form">
                                <div className="component">
                                    <select className="form-select form-select-sm" id="cluster" name='cluster' value={form.cluster} onChange={handleClusterChange}>
                                        <option defaultValue=''>Select your Cluster</option>
                                        {data.map(x => {
                                            return <option key={x.clusterId} value={x.clusterId}>{x.cluster}</option>
                                        })}
                                    </select>
                                    {
                                        clusterErr ?
                                            <p className='createErr' name='clus'>Cluster is required</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <select className="form-select form-select-sm" name='subCluster' value={form.subCluster} onChange={handleSubClusterChange}>
                                        <option defaultValue=''>Select your Sub-cluster</option>
                                        {subClusterArray.map(x => {
                                            // console.log(x);
                                            return <option key={x.subClusId} value={x.subClusId}>{x.subCluster}</option>
                                        })}
                                    </select>
                                    {
                                        subClusterErr ?
                                            <p className='createErr'>SubCluster is required</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <select className="form-select  form-select-sm" name='grade' value={form.grade} onChange={handleGradeChange}>
                                        <option defaultValue=''>Select Grade</option>
                                        {
                                            gradeData.map((object, i) => {
                                                // console.log(`object : ${object} i : ${i}`);
                                                return <option key={i} value={object}>{object}</option>
                                            })
                                        }
                                    </select>

                                    {gradeErr ?
                                        <p className='createErr'>Grade is required</p>
                                        :
                                        <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <input className="form-control form-control-sm" type="text" disabled
                                        value={reqGrade} autoComplete='off' />
                                    {gradeErr ?
                                        <p className='createErr'>Grade is required</p>
                                        :
                                        <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <input className="form-control form-control-sm" type="text" size="15"
                                        placeholder="Technology Stack" name='stack' defaultValue='' value={form.stack} onChange={handleStackChange} autoComplete='off' />
                                    {
                                        stackErr ?
                                            <p className='createErr'>{stackErrMsg}</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <input className="form-control form-control-sm" type="text" size="20"
                                        placeholder="Core Skill" name='skill' value={form.skill} onChange={handleSkillChange} autoComplete='off' />
                                    {
                                        skillErr ?
                                            <p className='createErr'>{skillErrMsg}</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component createtextArea">
                                    <textarea className="form-control form-control-sm" name='jd' placeholder="Skill Details" value={form.jd} onChange={handleJdChange} autoComplete='off'></textarea>
                                    {
                                        jdErr ?
                                            <p className='createErr'>{jdErrMsg}</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <input className="form-control form-control-sm" type="date" name="startDate" placeholder="Start Date" value={form.startDate} onChange={handleStartDateChange} />
                                    {
                                        startDateErr ?
                                            <p className='createErr'>{statDateErrMsg}</p>
                                            :
                                            <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <input type="text" className="form-control  form-control-sm" defaultValue={form.createdDate}
                                        disabled />
                                    <p></p>
                                </div>

                                <div className="component">
                                    <input size="15" className="form-control form-control-sm" type="text" defaultValue={form.owner} disabled />
                                    <p></p>
                                </div>

                                <div className="component">
                                    <select className="form-select form-select-sm" value={form.reasonForDemand} name='reasonForDemand' onChange={handleDemandChange} autoComplete='off'>
                                        <option defaultValue='' >Reason for Demand</option>
                                        <option value='New'>New</option>
                                        <option value='Replacement'>Replacement</option>
                                    </select>
                                    {demandErr ?
                                        <p className='createErr'>Reason for demand is required</p>
                                        :
                                        <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <select className="form-select form-select-sm" name='location' value={form.location} onChange={handleLocationChange}>
                                        <option defaultValue=''>Work Location</option>
                                        <option value='Bengaluru'>Bengaluru</option>
                                        <option value='Hyderabad'>Hyderabad</option>
                                        <option value='Mumbai'>Mumbai</option>
                                        <option value='Noida'>Noida</option>
                                        <option value='Chennai'>Chennai</option>
                                    </select>
                                    {locationErr ?
                                        <p className='createErr'>Location is required</p>
                                        :
                                        <p></p>
                                    }
                                </div>

                                <div className="component">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name='area' value={form.area} onChange={handleAreaChange}>
                                        <option defaultValue=''>Select Area</option>
                                        <option value='SLF'>SLF</option>
                                        <option value='BD'>BD</option>
                                        <option value='GOV'>GOV</option>
                                    </select>
                                    {areaErr ?
                                        <p className='createErr'>Area is required</p>
                                        :
                                        <p></p>
                                    }
                                </div>

                            </div>
                            <div className="btns">
                                <div>
                                    <button type="reset" className="btn btn-sm btn-danger reset" onClick={handleReset}><i class="fas fa-trash-restore-alt"></i>&nbsp;Reset</button>
                                    <button type="submit" className="btn btn-sm btn-success" onClick={handleSubmit}><i class="fas fa-save"></i>&nbsp;Save</button>
                                    <button type="button" className="btn btn-sm btn-success" onClick={openToasts}>&nbsp;test</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastrMessage></ToastrMessage>
            </div>
            <Footer></Footer>
        </div>
    )
}