import React from "react";
export default function Partner() {
    const [partner, setPartner] = React.useState([
        { name: 'partner one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80' },
        { name: 'test one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80' },
        { name: 'test one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80' },
        { name: 'test one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80' },
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
                            <input type="file" class="custom-file-input" id="customFile" />
                        </div>

                        <br />

                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <br />



                        <button type="submit" className="btn btn-primary ">Add new testmonial</button>
                    </form>

                </div>
                <div className="col-4" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        partner.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{ margin: '10px' }}>
                                        <h5 className="card-header">{e.name}</h5>
                                        <div className="card-body">
                                            <img src={e.image} class="card-img-top" style={{ height: '200px', borderRadius: '5%', margin: '10px' }} />

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