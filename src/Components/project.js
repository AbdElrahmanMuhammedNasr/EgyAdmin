import React from "react";
export default function Projects() {
    const [project, setProject] = React.useState([
        { name: 'project one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', link: 'https://www.google.com/' },
        { name: 'project one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', link: 'https://www.google.com/' },
        { name: 'project one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', link: 'https://www.google.com/' },
        { name: 'project one', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80', link: 'https://www.google.com/' },
    ]);
    return (
        <>
            <div className="row" style={{ padding: '0px' }}>
            <div className="col-8" style={{  height: '100vh', borderRight:'3px solid black' }}>

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
                            <label for="exampleInputEmail1">project Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                        </div>
                        <br />

                        <div class="form-group ">
                            <label for="inputState">Section</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>web</option>
                                <option>Mobile</option>
                                <option>cctv</option>
                                <option>network</option>
                            </select>
                        </div>

                        <br />

                        <label for="basic-url">Project URL</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">https://example.com/</span>
                            </div>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                        {/* <div class="form-group">
                            <label for="validationTextarea">project Details</label>
                            <textarea class="form-control " id="validationTextarea" placeholder="" required style={{ minHeight: '150px', maxHeight: '150px' }}></textarea>
                        </div> */}

                        <br />




                        <button type="submit" className="btn btn-primary ">Add new project</button>
                    </form>

                </div>
                <div className="col-4" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        project.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{ margin: '10px' }}>
                                        <h5 className="card-header">{e.name}</h5>
                                        <div className="card-body">
                                            <img src={e.image} class="card-img-top" style={{ height: '200px', borderRadius: '5%', margin: '10px' }} />

                                            {/* <h5 className="card-title">{e.title}</h5> */}
                                            <p className="card-text">
                                                <a href={e.link}>{e.name}</a>
                                            </p>
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