import axios from "axios";
import { useEffect, useState } from "react";

function CategoryByName() {
    let [category, setCategory] = useState("");
    let [dname, setDname] = useState("");
    let [msg, setMsg] = useState("");
    let [result, setResult] = useState(false);


    async function searchCategory() {
        let result = await axios.get("http://localhost:3000/api/category/findCategoryByName/" + dname, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        // console.log(result.data);
        if (result.data.msg === "Record Present") {
            setResult(true);
            setCategory(result.data.category);
            console.log(result.data)
        } else {
            setResult(false);
            console.log(result.data.msg)
        }
        alert(result.data.msg)
    }


    return (
        <div>
            <h2>Search Category By Name</h2>
            <label>Category Name</label>
            <input type="search" name="dname" onChange={(e) => setDname(e.target.value)} />
            <br />
            <input type="button" value="Search Category Name" onClick={searchCategory} />
            <br />
            {msg}
            <br />
            {result}
            <table className="mx-auto table">
                <thead className="table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Disease Name</th>
                        <th>Disease Image</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{category._id}</td>
                    <td>{category.dname}</td>
                    <td><img src={category.dImage} width="200px" height="200px" /></td>
                </tbody>
            </table>

            {/* {result?"Employee Id is "+category._id+"Name is "+category.dname:""} */}



        </div>
    )
}

export default CategoryByName;