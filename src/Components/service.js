import React from "react";
export default function Services() {
    const [service, setservice] = React.useState([
        { title: 'service one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure natus temporibus ea, aut ipsa, blanditiis voluptates nisi quo, nulla,' },
        { title: 'service one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure natus temporibus ea, aut ipsa, blanditiis voluptates nisi quo, nulla,' },
        { title: 'service one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure natus temporibus ea, aut ipsa, blanditiis voluptates nisi quo, nulla,' },
        { title: 'service one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure natus temporibus ea, aut ipsa, blanditiis voluptates nisi quo, nulla,' },
    ]);
    return (
        <>
            <div className="row" style={{ padding: '0px' }}>
                <div className="col-8" style={{ backgroundColor: '', height: '100vh' }}>

                    <form style={{
                        backgroundColor: 'white',
                        padding: '5%',
                        borderRadius: '13px',
                        marginTop: '4vh'
                    }}>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" multiple />
                        </div>

                        <br />

                        <div className="form-group">
                            <label for="exampleInputEmail1">Service Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <br />


                        <div class="form-group">
                            <label for="validationTextarea">Service Details</label>
                            <textarea class="form-control " id="validationTextarea" placeholder="" required style={{ minHeight: '150px', maxHeight: '150px' }}></textarea>
                        </div>

                        <br />




                        <button type="submit" className="btn btn-primary ">Add new service</button>
                    </form>

                </div>
                <div className="col-4" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        service.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{ margin: '10px' }}>
                                        <h5 className="card-header">{e.title}</h5>
                                        <div className="card-body">
                                            <img src={e.image} class="card-img-top" style={{ height: '200px', borderRadius: '5%', margin: '10px' }} />

                                            {/* <h5 className="card-title">{e.title}</h5> */}
                                            <p className="card-text">{e.subtitle}</p>
                                            <a href="#" className="btn btn-outline-danger">Delete</a>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }

                </div>

            </div>
        </>
    );
}