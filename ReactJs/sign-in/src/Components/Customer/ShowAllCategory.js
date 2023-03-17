
import axios from "axios";
import { useEffect, useState } from "react";


function showAllCategory() {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        async function showCategoryData() {
            try {
                let result = await axios.get("http://localhost:3000/api/category/showAllCategory",{
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setCategory(result.data);
            } catch (err) {
                console.log(err)
            }
        }
       showCategoryData();
    },[])

    let categoryData=category.map(c=><tr key={c._id}><td>{c._id}</td><td>{c.dname}</td><td><img src={c.dImage} width="200px" height="200px"/></td></tr>)
    return (
        <div className="text-center mx-auto">
            <h2>All Category Details!</h2>
            <table className="mx-auto table">
                <thead className="table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Disease Name</th>
                        <th>Disease Image</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryData}
                </tbody>
            </table>
        </div>
    )
}
export default showAllCategory;