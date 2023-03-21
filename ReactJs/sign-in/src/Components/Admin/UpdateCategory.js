import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function UpdateCategory() {
    let [dname, setCategory] = useState("");
    let [dImage, setCategoryImg] = useState("");
    let { _id } = useParams();


    useEffect(() => {
        getCategoryData();
    }, [])
    async function getCategoryData() {
        let result = await axios.get(`http://localhost:3000/api/category/updateCategoryById/${_id}`);
        setCategory(result.data.dname);
        setCategoryImg(result.data.dImage);
    }
    async function updateCategoryData() {
        event.preventDefault();
        let category = { dname: dname, dImage: dImage };
        try {
            let result = await axios.patch(`http://localhost:3000/api/category/updateCategoryById/${_id}`, category, {
                headers: {
                    "Content-type": "application/json",
                    "authorization": sessionStorage.getItem("token")
                }
            });
            // console.log(result.data)
            alert(result.data.msg)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <Link to="/adminhome/viewcategory" className="btn btn-info mt-3 fs-5 px-4 rounded">Back</Link>
            <form onSubmit={updateCategoryData}>
                <h2 className="mt-5">Update Category Details!</h2>
                <div className="container mx-auto col-md-4 p-3 bg-info bg-opacity-10 border border-info border-start rounded">
                    <label>Category Name</label>
                    <input type="text" name="dname" className="m-1 mt-3" onChange={(e) => setCategory(e.target.value)} /><br />
                    <label>Category Image</label>
                    <input type="url" name="dImage" className="m-1" onChange={(e) => setCategoryImg(e.target.value)} /><br />
                    <input type="submit" value="Update Category" className="btn btn-info m-3"/>
                    <input type="cancel" value="Cancel" className="btn btn-info m-3"/>
                </div>
            </form>
            {/* <span>{msg}</span> */}
        </div>
    )
}
export default UpdateCategory;