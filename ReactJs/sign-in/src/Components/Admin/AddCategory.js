import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AddCategory() {
    let [id, setId] = useState(0);
    let [dname, setCategory] = useState("");
    let [dImage, setCategoryImg] = useState("");
    let [msg, setMsg] = useState("");


    async function addCategoryData() {
        event.preventDefault();
        let category = { _id: id, dname: dname, dImage: dImage };
        console.log(category);
        let result = await axios.post("http://localhost:3000/api/category/addCategoryData", category, {
            headers: {
                "Content-type": "application/json",
                "authorization": sessionStorage.getItem("token")
            }
        });
        alert(result.data.msg)
    }


    return (
        <div>
           <Link to="/adminhome/viewcategory" className="btn btn-info mt-3 fs-5 px-4 rounded">Back</Link>
            <form onSubmit={addCategoryData}>
                <h2 className="mt-5">Add Category Details!</h2>
                <div className="container mx-auto col-md-4 p-3 bg-info bg-opacity-10 border border-info border-start rounded">
                    <label>Category Id</label>
                    <input type="number" name="_id" className="m-1" onChange={(e) => setId(e.target.value)} /><br />
                    <label>Category Name</label>
                    <input type="text" name="dname" className="m-1" onChange={(e) => setCategory(e.target.value)} /><br />
                    <label>Category Image</label>
                    <input type="url" name="dImage" className="m-1" onChange={(e) => setCategoryImg(e.target.value)} /><br />
                    <input type="submit" value="Add Category" className="btn btn-info m-3"/>
                    <input type="reset" value="reset"  className="btn btn-info m-3"/>
                </div>
            </form>
            {/* <span>{msg}</span> */}

        </div>
    )
}
export default AddCategory;