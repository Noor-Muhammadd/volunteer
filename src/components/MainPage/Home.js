// import React, { useEffect, useState } from 'react';
// import './Home.css'
// import { Container, FormControl, InputGroup } from 'react-bootstrap';
// import Header from './Header';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     const [event, setEvent] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/events`)
//             .then(res => res.json())
//             .then(data => {
//                 setEvent(data);
//             })
//     }, [])
//     return (
//         <Container fluid>
//             <Container>
//                 <Header />
//                 <div className="p-4">
//                     <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
//                     <InputGroup className="mb-3 w-50 mx-auto p-3">
//                         <FormControl
//                             placeholder="Search..."
//                             aria-label="Search..."
//                             aria-describedby="basic-addon2"
//                         />
//                         <InputGroup.Append>
//                             <button className="btn btn-primary">Search</button>
//                         </InputGroup.Append>
//                     </InputGroup>
//                     <div className="row">
//                         {
//                             event.map((event) =>
//                                 <div className="col-md-3 p-3" key={event._id}>
//                                     <Link to="/regForm">
//                                         <div className="eventImg">
//                                             <img src={event.image} alt="" className="w-100" />
//                                         </div>
//                                         <h5 style={{backgroundColor: event.color, color: "white"}} className="p-3 rounded">{event.title}</h5>
//                                     </Link>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>
//             </Container>
//         </Container>
//     );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import './Home.css'
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            })
    }, [])
    return (
        <Container fluid>
            <Container>
                <Header />
                <div className="p-4">
                    <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                    <InputGroup className="mb-3 w-50 mx-auto p-3">
                        <FormControl
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <button className="btn btn-primary">Search</button>
                        </InputGroup.Append>
                    </InputGroup>
                    <div className="row">
                        {
                            event.map((event) =>
                                <div className="col-md-3 p-3" key={event._id}>
                                    <Link to={`/regForm/${event.title}`}>
                                        <div className="eventImg">
                                            <img src={event.image} alt="" className="w-100" />
                                        </div>
                                        <h5 style={{backgroundColor: event.color, color: "white"}} className="p-3 rounded">{event.title}</h5>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Home;