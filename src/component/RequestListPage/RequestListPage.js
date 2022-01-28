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
    const [currPage, setcurrPage] = useState(1)
    const requestsPerPage = [
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

        }
        // {
        //     'id': 1,
        //     'technology': 'React',
        //     'grade': 'C1',
        //     'last modified date': 2,
        //     'status': 15,
        //     'cluster': 'DSI'

        // }
    ]
    const colList = ['ID', 'Technology', 'Grade', 'Last Modified Date', 'Status', 'Cluster']
    const numberOfPagesArr = [1, 2, 3, 4, 5]
    // let currPageNumber = 1
    const pageChangeHandle = (pageNum) => {
        // console.log("inpageHandler",pageNum);
        setcurrPage(pageNum);
    }


    return (
        <div className='request-page'>
            <header>
                <Header></Header>
            </header>

            <section id='parentSection'>
                <section className='search-bar'>
                    {/* <h1>Search Bar will be displaying here</h1> */}
                    <div className='input'>
                        <input type="input" placeholder="Type to search:" className='input-box'></input>
                        <button className='input-submit' type='submit'>Go</button>
                    </div>

                </section>

                <searchbar />
                <div className='mid-container'>
                    <Accordian />

                    <div className='my-table'>
                        <Card className='d-flex flex-row p-4'>
                            {
                                colList.map((colHead) => {
                                    return (
                                        // <div className='d-flex'>
                                        
                                        < div className = 'width-data' > { colHead }</div>

                                        // </div>

                )
                                })
                            }
            </Card>
            <CardGroup className='d-flex flex-column'>

                {requestsPerPage.map((req) => {
                    return (
                        <Card className='d-flex flex-row p-4'>
                            {
                                colList.map((colHead) => {
                                    return (
                                   
                                        <div className='width-data'>{req[colHead.toLowerCase()]}</div>

                                    )
                                })

                                


                            }
                            <div className='width-data width-icon'>
                                <MDBIcon icon="edit" className='edit-icon fa-lg' />
                            </div>
                            <div className='width-data width-icon'>
                                <MDBIcon icon="trash-alt" className='delete-icon fa-lg' />
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
