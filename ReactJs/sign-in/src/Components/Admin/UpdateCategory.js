import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
            <form onSubmit={updateCategoryData}>
                {/* <label>Category Id</label>
                <input type="number" name="_id" onChange={(e) => setId(e.target.value)} /><br /> */}
                <label>Category Name</label>
                <input type="text" name="dname" onChange={(e) => setCategory(e.target.value)} /><br />
                <label>Category Image</label>
                <input type="url" name="dImage" onChange={(e) => setCategoryImg(e.target.value)} /><br />
                <input type="submit" value="Update Category" />
                <input type="cancel" value="Cancel" />
            </form>
            {/* <span>{msg}</span> */}
        </div>
    )
}
export default UpdateCategory;