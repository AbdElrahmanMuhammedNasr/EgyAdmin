import React, { useEffect } from "react";
import axios from 'axios';
import uuid from "react-uuid";


export default function Projects() {
    const url = axios.defaults.baseURL;

    const [project, setProject] = React.useState([]);



    //  get projects
    useEffect(() => {
        axios.get('project/get-projects')
            .then(res => {
                if (res.status == 200) {
                    setProject(res.data);

                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 

    const [images, setImages] = React.useState([]);
    const [name, setName] = React.useState(null);
    const [section, setSection] = React.useState(null);
    const [link, setLink] = React.useState(null);

    const [success, setSuccess] = React.useState(null);



    const onAddNewproject = (event) => {
        event.preventDefault();

        axios.post('project/add-project', { images, name, section, link })
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    setProject([...project, res.data]);
                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })

        // console.log({ images, name, section, link })
    }


    const onDelete = (event, id) => {
        event.preventDefault();
        console.log(id)

        axios.delete('project/delete-project/' + id)
            .then(res => {
                if (res.status == 200) {
                    setProject([...project.filter(s => s._id != id)]);
                }
            })
    }

    const getimage = (event) => {
        const file = event.target.files

        for (let i = 0; i < file.length; i++) {
            let formData = new FormData();
            formData.append("picture", file[i]);

            axios.post('upload/image', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                // console.log(response.data);
                images.push(response.data)
                // console.log(images);

            }).catch((error) => {
                console.log(error);
            })
        }



    }

    const successFun = () => {
        if (success == null) {
            return null;
        }
        else if (success == true)
            return (
                <div class="alert alert-success" role="alert">
                    Success to add new project
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to add new project
            </div>)

    }

    return (
            <div className="row" style={{ padding: '0px' }}>
                <div className=" col-lg-8 col-md-12" style={{ height: '100vh', borderRight: '3px solid black' }}>


                    <br />
                    <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                    <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Projects </i>
                    <i className="fa fa-angle-right" style={{ marginLeft: '0px', fontSize: '30px' }}></i>

                    {
                        successFun()
                    }

                    <form style={{
                        backgroundColor: 'white',
                        padding: '5%',
                        borderRadius: '13px',
                        marginTop: '4vh'
                    }}>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" multiple onChange={(event) => getimage(event)} />
                        </div>

                        <br />

                        <div className="form-group">
                            <label for="exampleInputEmail1">Project Name</label>
                            <input type="text" class="form-control" required aria-describedby="emailHelp" onChange={(event) => setName(event.target.value)} />
                        </div>
                        <br />

                        <div class="form-group ">
                            <label for="inputState">Section</label>
                            <select id="inputState" class="form-control" onChange={(event) => setSection(event.target.value)} >
                                <option value="null" selected>Choose..</option>
                                <option value="web" >web</option>
                                <option value="mobile">Mobile</option>
                                <option value="network">network</option>
                            </select>
                        </div>

                        <br />

                        <label for="basic-url">Project Link</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">https://example.com/</span>
                            </div>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(event) => setLink(event.target.value)} />
                        </div>



                        <br />




                        <button type="submit" className="btn btn-primary" onClick={(event) => onAddNewproject(event)}>Add new project</button>
                    </form>

                </div>
                <div className="col-4 d-none d-md-block" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll' }}>
                    {
                        project.map((e) => {
                            return (
                                <div key={uuid()} className="card" style={{ margin: '10px' }}>
                                    <h5 className="card-header">{e.name} - {e.section}</h5>
                                    <div className="card-body">
                                        <img src={url + e.images[0]} class="card-img-top" style={{ height: '200px', borderRadius: '0%', margin: '10px 0px ' }} />

                                        {/* <h5 className="card-title">{e.title}</h5> */}

                                        <div class="card">
                                            <div class="card-body">
                                                <p className="card-text">
                                                    <a href={e.link}>{e.name}</a>
                                                </p>
                                            </div>
                                        </div>
                                        <br />


                                        <button className="btn btn-outline-danger" onClick={(event) => onDelete(event, e._id)}>Delete</button>
                                    </div>
                                </div>

                            );
                        })
                    }

                </div>

            </div>
    );
}
