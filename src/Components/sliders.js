import React, { useEffect } from "react";
import { Slider } from "../model/Slider";
import axios from 'axios';
import uuid from "react-uuid";


export default function Sliders() {
    const url = axios.defaults.baseURL;

    const [slider, setSlider] = React.useState([]);

    //  get sliders
    useEffect(() => {
        axios.get('slider/get-sliders')
            .then(res => {
                if (res.status == 200) {
                    setSlider(res.data);
                }
            }).catch(e => {
                setSuccess(false)
            })

    }, [])

    // 

    const [image, setImage] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [subtitle, setSubtitle] = React.useState(null);
    const [success, setSuccess] = React.useState(null);



    const onAddNewSlider = (event) => {
        event.preventDefault();
        const newSlider = new Slider({ title, image, subtitle })

        axios.post('slider/add-slider', newSlider)
            .then(res => {
                if (res.status == 200) {
                    setSuccess(true)
                    setSlider([...slider, newSlider]);
                    // reset form
                    setImage(null)
                    setTitle(null)
                    setSubtitle(null)
                    setInterval(() => {
                        setSuccess(null)
                    }, 3000)
                }
            })

        // console.log({ image, title, subtitle })
    }
    const onDelete = (event, id) => {
        event.preventDefault();
        console.log(id)

        axios.delete('slider/delete-slider/' + id)
            .then(res => {
                if (res.status == 200) {
                    setSlider([...slider.filter(s => s._id != id)]);
                }
            })

    }

    const getimage = (event) => {
        const file = event.target.files[0]
        // console.log(file)
        let formData = new FormData();
        formData.append("picture", file);
        axios.post('upload/image', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            setImage(response.data)
            // console.log();
        }).catch((error) => {
            console.log(error);
        });
    }

    const successFun = () => {
        if (success == null) {
            return null;
        }
        else if (success == true)
            return (
                <div class="alert alert-success" role="alert">
                    Success to add new slider
                </div>)
        else if (success == false) (
            <div class="alert alert-danger" role="alert">
                Fail to add new slider
            </div>)

    }

    return (

        <div className="row" style={{ padding: '0px' }}>


            <div className=" col-lg-8 col-md-12" style={{ height: '100vh', borderRight: '3px solid black' }}>


                <br />
                <i className="fa fa-angle-left" style={{ marginLeft: '0px', fontSize: '30px' }}></i>
                <i style={{ marginLeft: '0px', fontSize: '25px' }}   > Sliders </i>
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
                        <input type="file" class="custom-file-input" id="validatedCustomFile" required onChange={(event) => getimage(event)} />
                        <label class="custom-file-label" for="validatedCustomFile">Choose file... {image}</label>
                        <div class="invalid-feedback">Example invalid custom file feedback</div>
                    </div>

                    <br />
                    <br />

                    

                    <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control" onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <br />


                    <div class="form-group">
                        <label for="validationTextarea">Subtitle</label>
                        <textarea class="form-control" required style={{ minHeight: '150px', maxHeight: '150px' }} onChange={(event) => setSubtitle(event.target.value)}></textarea>
                    </div>



                    <br />

                    <button type="submit" className="btn btn-primary " onClick={onAddNewSlider}>Add new slider</button>
                </form>

            </div>
            <div className=" col-4 d-none d-md-block" style={{ backgroundColor: '', height: '97vh', overflow: 'scroll ', margin: '0px', padding: '0px' }}>
                {
                    slider.map((e) => {
                        return (

                            <div key={uuid()} className="card " style={{ margin: '10px ' }}>
                                <h5 className="card-header">{e.title}</h5>

                                <div className="card-body ">
                                    <img src={url + e.image} class="card-img-top" style={{ height: '200px', borderRadius: '0%', margin: '10px 0px ' }} />

                                    <div class="card">
                                        <div class="card-body">
                                            <p className="card-text">{e.subtitle}</p>
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