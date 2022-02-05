import React from 'react'
import { useHistory } from 'react-router'
import FloatingButton from '../FloatingButton/FloatingButton';
import Header from '../CommonComponent/Header';
import './ReqListPage.css'
import Accordian from '../material/Accordian';
import { Row, Col, Container, Form, Button, Table, Card, CardGroup } from "react-bootstrap";
import { useState } from 'react';
// import { FaEdit } from "react-bootstrap-icons";
import { MDBIcon } from "mdb-react-ui-kit";
import { Pagination } from './Pagination';
import { Entries } from './Entries'

// import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const RequestListPage = () => {
    const history = useHistory();
    let [currPage, setCurrPage] = useState(1)
    const [page, setPage] = useState(1)
    const previousPage = () => {
        if (page > 1)
            setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }
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
    let [requestArr, setRequestArr] = useState([])
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

    const changeLimit = (e) => {
        let val = e.target.value
        setLimit(val)
    }



    return (
        <div className='request-page full-height relative h-[100vh] overflow-hidden'>
            <header className=''>
                <Header></Header>
            </header>
            {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ...">01</div>
                <div class="col-span-2 ...">02</div>
                <div class="row-span-2 col-span-2 ...">03</div>
            </div> */}
            <div className="grid grid-rows-4 grid-flow-col gap-4 h-[100vh]">
                <div className="row-span-4 bg-blue-400 py-32">
                    <Accordian />
                </div>
                <div className="col-span-2 pt-32 grid grid-cols-4 h-[5vh]">
                    {/* <div className='col-span-1'></div> */}
                    <div className='searchbar flex items-center border-3 col-span-3 mx-24'>
                        <input type="input" placeholder="Type to search:" className='input-box p-2 w-full focus:outline-none' value={searchText} onChange={handleChange}></input>
                        <MDBIcon fas fa-5x='true' icon="search" className='input-submit' />
                    </div>
                    <div className='col-span-1'>
                        <Entries limit={limit} changeLimit={changeLimit} add={setIncrementLimit} subtract={setDecrementLimit} />
                    </div>
                </div>
                <div className="row-span-3 col-span-2">
                    <div className='col-span-3'>
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
                </div>
                <div className="absolute left-[45vw] bottom-[1vh]">
                    <Pagination page={page} prevPage={previousPage} nextPage={nextPage} />
                    <article className='absolute left-[20vw] bottom-[1vh]'>
                        <FloatingButton></FloatingButton>
                    </article>
                </div>
            </div>


        </div >
    )
}

export default RequestListPage
