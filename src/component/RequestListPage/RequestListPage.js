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
        <div className='request-page full-height relative overflow-hidden'>
            <header className=''>
                <Header></Header>
            </header>
            {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 ...">01</div>
                <div className="col-span-2 ...">02</div>
                <div className="row-span-2 col-span-2 ...">03</div>
            </div> */}
            <div className="grid grid-rows-4 grid-flow-col gap-4 h-[100vh]">
                <div className="row-span-4 bg-blue-400 py-32">
                    <Accordian />
                </div>
                <div className="search col-span-2 pt-32 h-[5vh] xl:my-3 mx-auto lg:flex xl:flex-row xl:items-center xl:justify-evenly">
                    {/* <div className='col-span-1'></div> */}
                    <div className='searchbar flex items-center mx-5 w-[40vw]'>
                        <input type="input" placeholder="Type to search:" className='input-box p-2 w-full focus:outline-none border-3' value={searchText} onChange={handleChange}></input>
                        <MDBIcon fas fa-5x='true' icon="search" className='input-submit' />
                    </div>
                    <div className='w-[10vw] mr-[10vw]'>
                        <Entries limit={limit} changeLimit={changeLimit} add={setIncrementLimit} subtract={setDecrementLimit} />
                    </div>
                </div>
                <div className="my-table row-span-3 col-span-2 overflow-y-scroll">
                    <div className='col-span-3'>
                        <Card className='flex flex-row justify-between py-4 px-3 sm:w-[87vw]'>
                            {
                                colList.map((colHead) => {
                                    return (
                                        // <div className='d-flex'>

                                        < div className='text-left' ><h5 className='w-[11vw]'>{colHead}</h5> </div>

                                        // </div>

                                    )
                                })
                            }
                            <div className='text-left' >
                                <h5 className='w-[10vw]'>Edit</h5>
                            </div>
                            <div className='text-left' >
                                <h5 className='w-[10vw]'>Delete</h5>
                            </div>
                        </Card>
                        <CardGroup className='flex flex-column justify-between'>

                            {requestArr.map((req) => {

                                return (
                                    <Card className='flex flex-row justify-between py-4 px-3 w-[87vw]' data-aos="zoom-in">
                                        {
                                            colList.map((colHead) => {
                                                return (
                                                    <div className='text-left'><h6 className='w-[11vw]'>{req[colHead.toLowerCase()]}</h6></div>

                                                )
                                            })
                                        }
                                        <div className='w-[10vw]' onClick={moveToEdit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div className='w-[10vw]' onClick={deleteRequest}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.878L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </Card>
                                )
                            })}

                        </CardGroup>

                        {/* <div className="text-gray-900 bg-gray-200 overflow-y-auto">
                            <div className="flex justify-center">
                                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                    <tbody className="scroll">
                                        <tr className="border-5 flex">
                                            <th className="text-left p-4 px-5">ID</th>
                                            <th className="text-left p-4 px-5">Technology</th>
                                            <th className="text-left p-4 px-5">Grade</th>
                                            <th className="text-left p-4 px-5">Last Modified Date</th>
                                            <th className="text-left p-4 px-5">Status</th>
                                            <th className="text-left p-4 px-5">Cluster</th>
                                            <th></th>
                                            <th></th>
                                            {
                                                colList.map((colHead) => {
                                                    return (
                                                        

                                                        < div className='text-left p-4 px-5' ><h5>{colHead}</h5> </div>

                                                      

                                                    )
                                                })
                                            }
                                        </tr>
                                        <tr>
                                            {requestArr.map((req) => {

                                                return (
                                                    <Card className='flex flex-row justify-between p-4 card-hover' data-aos="zoom-in">
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
                                        </tr>
                                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                            <td className="text-left p-4 px-5">A</td>
                                            <td className="text-left p-4 px-5">A</td>
                                            <td className="text-left p-4 px-5">A</td>
                                            <td className="text-left p-4 px-5">A</td>
                                            <td className="text-left p-4 px-5">A</td>
                                            <td className="text-left p-4 px-5">A</td>



                                            <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div> */}

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
