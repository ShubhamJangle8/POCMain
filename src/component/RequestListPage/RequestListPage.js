import React from 'react'
import { useHistory } from 'react-router'
import FloatingButton from '../FloatingButton/FloatingButton';
import Header from '../CommonComponent/Header';
import './ReqListPage.css'
import searchbar from '../material/searchbar';
import Accordian from '../material/Accordian';
import { Row, Col, Container, Form, Button, Table, Card, CardGroup } from "react-bootstrap";
import { useState } from 'react';
// import { FaEdit } from "react-bootstrap-icons";
import { MDBIcon } from "mdb-react-ui-kit";

// import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const RequestListPage = () => {
    const history = useHistory();
    let [currPage, setCurrPage] = useState(1)
    const requests = [
        {
            'id': 1,
            'technology': 'Python & Django',
            'grade': 'C1',
            'last modified date': '18-08-2021',
            'status': 'Open',
            'cluster': 'DSI'

        },
        {
            'id': 2,
            'technology': 'Java & Spring',
            'grade': 'A5',
            'last modified date': '19-08-2021',
            'status': 'Closed',
            'cluster': 'R&S'

        },
        {
            'id': 3,
            'technology': 'Angular',
            'grade': 'B1',
            'last modified date': '10-08-2021',
            'status': 'On Hold',
            'cluster': 'R&E'

        },
        {
            'id': 4,
            'technology': 'Python',
            'grade': 'A4',
            'last modified date': '02-08-2021',
            'status': 'In progress',
            'cluster': 'Multi-Channel'

        },
        {
            'id': 5,
            'technology': 'Java & Spring  boot',
            'grade': 'A4',
            'last modified date': '01-08-2021',
            'status': 'Cancelled',
            'cluster': 'R&S'

        },
        {
            'id': 6,
            'technology': 'Manual Testing',
            'grade': 'B2',
            'last modified date': '30-08-2021',
            'status': 'Withdrawn',
            'cluster': 'R&E'

        },
        {
            'id': 7,
            'technology': 'Python & Django',
            'grade': 'C1',
            'last modified date': '18-08-2021',
            'status': 'Open',
            'cluster': 'DSI'

        },
        {
            'id': 8,
            'technology': 'Java & Spring',
            'grade': 'A5',
            'last modified date': '19-08-2021',
            'status': 'Closed',
            'cluster': 'R&S'

        },
        {
            'id': 9,
            'technology': 'Angular',
            'grade': 'B1',
            'last modified date': '10-08-2021',
            'status': 'On Hold',
            'cluster': 'R&E'

        },
        {
            'id': 10,
            'technology': 'Python',
            'grade': 'A4',
            'last modified date': '02-08-2021',
            'status': 'In progress',
            'cluster': 'Multi-Channel'

        },
        {
            'id': 11,
            'technology': 'Java & Spring  boot',
            'grade': 'A4',
            'last modified date': '01-08-2021',
            'status': 'Cancelled',
            'cluster': 'R&S'

        },
        {
            'id': 12,
            'technology': 'Manual Testing',
            'grade': 'B2',
            'last modified date': '30-08-2021',
            'status': 'Withdrawn',
            'cluster': 'R&E'

        },
        {
            'id': 13,
            'technology': 'Python & Django',
            'grade': 'C1',
            'last modified date': '18-08-2021',
            'status': 'Open',
            'cluster': 'DSI'

        },
        {
            'id': 14,
            'technology': 'Java & Spring',
            'grade': 'A5',
            'last modified date': '19-08-2021',
            'status': 'Closed',
            'cluster': 'R&S'

        },
        {
            'id': 15,
            'technology': 'Angular',
            'grade': 'B1',
            'last modified date': '10-08-2021',
            'status': 'On Hold',
            'cluster': 'R&E'

        },
        {
            'id': 16,
            'technology': 'Python',
            'grade': 'A4',
            'last modified date': '02-08-2021',
            'status': 'In progress',
            'cluster': 'Multi-Channel'

        },
        {
            'id': 17,
            'technology': 'Java & Spring  boot',
            'grade': 'A4',
            'last modified date': '01-08-2021',
            'status': 'Cancelled',
            'cluster': 'R&S'

        },
        {
            'id': 18,
            'technology': 'Manual Testing',
            'grade': 'B2',
            'last modified date': '30-08-2021',
            'status': 'Withdrawn',
            'cluster': 'R&E'

        },
        {
            'id': 19,
            'technology': 'Python & Django',
            'grade': 'C1',
            'last modified date': '18-08-2021',
            'status': 'Open',
            'cluster': 'DSI'

        },
        {
            'id': 20,
            'technology': 'Java & Spring',
            'grade': 'A5',
            'last modified date': '19-08-2021',
            'status': 'Closed',
            'cluster': 'R&S'

        },
        {
            'id': 21,
            'technology': 'Angular',
            'grade': 'B1',
            'last modified date': '10-08-2021',
            'status': 'On Hold',
            'cluster': 'R&E'

        },
        {
            'id': 22,
            'technology': 'Python',
            'grade': 'A4',
            'last modified date': '02-08-2021',
            'status': 'In progress',
            'cluster': 'Multi-Channel'

        },
        {
            'id': 23,
            'technology': 'Java & Spring  boot',
            'grade': 'A4',
            'last modified date': '01-08-2021',
            'status': 'Cancelled',
            'cluster': 'R&S'

        },
        {
            'id': 24,
            'technology': 'Manual Testing',
            'grade': 'B2',
            'last modified date': '30-08-2021',
            'status': 'Withdrawn',
            'cluster': 'R&E'

        },
        {
            'id': 25,
            'technology': 'Python & Django',
            'grade': 'C1',
            'last modified date': '18-08-2021',
            'status': 'Open',
            'cluster': 'DSI'

        },
        {
            'id': 26,
            'technology': 'Java & Spring',
            'grade': 'A5',
            'last modified date': '19-08-2021',
            'status': 'Closed',
            'cluster': 'R&S'

        },
        {
            'id': 27,
            'technology': 'Angular',
            'grade': 'B1',
            'last modified date': '10-08-2021',
            'status': 'On Hold',
            'cluster': 'R&E'

        },
        {
            'id': 28,
            'technology': 'Python',
            'grade': 'A4',
            'last modified date': '02-08-2021',
            'status': 'In progress',
            'cluster': 'Multi-Channel'

        },
        {
            'id': 29,
            'technology': 'Java & Spring  boot',
            'grade': 'A4',
            'last modified date': '01-08-2021',
            'status': 'Cancelled',
            'cluster': 'R&S'

        },
        {
            'id': 30,
            'technology': 'Manual Testing',
            'grade': 'B2',
            'last modified date': '30-08-2021',
            'status': 'Withdrawn',
            'cluster': 'R&E'

        }
    ]
    const colList = ['ID', 'Technology', 'Grade', 'Last Modified Date', 'Status', 'Cluster']
    let numberOfPagesArr = []
    let [limit, setLimit] = useState(6)
    const setIncrementLimit = () => {
        setLimit(limit + 1)
    }
    const setDecrementLimit = () => {
        setLimit(limit - 1)
    }
    let [searchText, setSearchText] = useState('')
    const handleChange = (e) => {
        setSearchText(e.target.value)
        console.log(e.target.value)
        if (searchText == '') {
            return requests;
        }
        else {
            let arr = requestArr.filter((req) => {
                let technology = req.technology;
                // console.log(title);
                return technology.includes(searchText);
            })
            setRequestArr(arr)
        }
    }
    let [requestArr,setRequestArr] = useState([])
    requestArr = (requests.filter((req) => {
        let si = (currPage - 1) * limit;
        let ei = si + limit;

        return req.id > si && req.id <= ei;
    }))
    // setRequestArr(requests.filter((req) => {
    //     let si = (currPage - 1) * limit;
    //     let ei = si + limit;

    //     return req.id > si && req.id <= ei;
    // }))

    let numberOfPages = Math.ceil(requests.length / limit);
    for (let i = 1; i <= numberOfPages; i++) {
        numberOfPagesArr.push(i);
    }

    // console.log(requestArr)
    const moveToEdit = () => {
        history.push('/editRequest')
    }

    const deleteRequest = () => {
        alert('Request Deleted')
    }
    // let currPageNumber = 1
    const pageChangeHandle = (pageNum) => {
        // console.log("inpageHandler",pageNum);
        setCurrPage(pageNum);
    }



    return (
        <div className='request-page'>
            <header>
                <Header></Header>
            </header>

            <section id='parentSection'>
                <section className='search-bar'>
                    <div className='input'>
                        <input type="input" placeholder="Type to search:" className='input-box' value={searchText} onChange={handleChange}></input>
                        <MDBIcon fas fa-5x='true' icon="search" className='input-submit'/>
                    </div>
                    <div className='d-flex align-items-center justify-content-between search-entries'>
                        <label className='p-2'>Show</label>
                        <input className='p-2' value={limit + " entries"}></input>
                        <MDBIcon icon="angle-down" className='fa-2x fst-normal p-2 entries-change' onClick={setDecrementLimit} />
                        <MDBIcon icon="angle-up" className='fa-2x fst-normal p-2 entries-change' onClick={setIncrementLimit} />
                    </div>
                </section>
                <hr></hr>
                {/* <searchbar /> */}
                <div className='mid-container'>
                    <Accordian />

                    <div className='my-table'>
                        <Card className='d-flex flex-row p-4 card-head'>
                            {
                                colList.map((colHead) => {
                                    return (
                                        // <div className='d-flex'>

                                        < div className='width-data' ><h5>{colHead}</h5> </div>

                                        // </div>

                                    )
                                })
                            }
                        </Card>
                        <CardGroup className='d-flex flex-column'>

                            {requestArr.map((req) => {

                                return (
                                    <Card className='d-flex flex-row p-4 card-hover' data-aos="zoom-in">
                                        {
                                            colList.map((colHead) => {
                                                return (
                                                    <div className='width-data'>{req[colHead.toLowerCase()]}</div>

                                                )
                                            })




                                        }
                                        <div className='width-data width-icon'>
                                            <MDBIcon icon="edit" className='edit-icon fa-lg' onClick={moveToEdit} />
                                        </div>
                                        <div className='width-data width-icon'>
                                            <MDBIcon icon="trash-alt" className='delete-icon fa-lg' onClick={deleteRequest} />
                                        </div>
                                    </Card>
                                )
                            })}

                        </CardGroup>
                    </div>
                </div >
                <div className='pagination'>
                    <ul className="pagination">
                        {
                            numberOfPagesArr.map((pageNumber) => {
                                let className = pageNumber == currPage ? "page-item active" : "page-item"
                                return (
                                    <li key={pageNumber} className={className} onClick={() => { pageChangeHandle(pageNumber) }}>
                                        <span className="page-link">
                                            {pageNumber}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <article id='reqLists'>

                    <FloatingButton></FloatingButton>
                </article>
            </section >
        </div >
    )
}

export default RequestListPage
