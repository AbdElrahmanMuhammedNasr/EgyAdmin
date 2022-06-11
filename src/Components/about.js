import React from "react";
export default function About() {
    return (
        <>
            <form style={{
                backgroundColor: 'white',
                padding: '5%',
                borderRadius: '13px',
                margin: '4vh'
            }}>



                <div class="form-group">
                    <label for="validationTextarea">About</label>
                    <textarea class="form-control " id="validationTextarea" placeholder="" required style={{ minHeight: '200px' }}></textarea>
                </div>



                <br />

                <button type="submit" className="btn btn-primary ">Add new about</button>
            </form>
        </>
    );
}