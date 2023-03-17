import axios from "axios";
import { useEffect, useState } from "react";


function AddCategory() {
    let [id, setId] = useState(0);
    let [dname, setCategory] = useState("");
    let [dImage, setCategoryImg] = useState("");
    let [msg, setMsg] = useState("");


    async function addCategoryData() {
        event.preventDefault();
        let category = { _id: id, dname: dname, dImage: dImage };
        console.log(category);
        let result = await axios.post("http://localhost:3000/api/category/addCategoryData", category,{
            headers: {
                "Content-type": "application/json",
                "authorization": sessionStorage.getItem("token")
            }
        });
        alert(result.data.msg)
    }


    return (
        <div>
            <form onSubmit={addCategoryData}>
                <label>Category Id</label>
                <input type="number" name="_id" onChange={(e) => setId(e.target.value)} /><br />
                <label>Category Name</label>
                <input type="text" name="dname" onChange={(e) => setCategory(e.target.value)} /><br />
                <label>Category Image</label>
                <input type="url" name="dImage" onChange={(e) => setCategoryImg(e.target.value)} /><br />
                <input type="submit" value="Add Category" />
                <input type="reset" value="reset" />
            </form>
            {/* <span>{msg}</span> */}
           
        </div>
    )
}
export default AddCategory;