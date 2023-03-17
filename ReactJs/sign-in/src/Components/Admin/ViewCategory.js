
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ViewCategory() {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        async function viewCategoryData() {
            try {
                let result = await axios.get("http://localhost:3000/api/category/showAllCategory", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                console.log(result.data);
                setCategory(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        viewCategoryData();
    }, [])

    async function deleteCategory(_id){
        try{
            let result=await axios.delete(`http://localhost:3000/api/category/deleteCategoryById/${_id}`);
            viewCategoryData();
            alert(result.data.msg)
        }catch(err){
            console.log(err);
        }
    }
    // let categoryData = category.map(c => <tr key={c._id}><td>{c._id}</td><td>{c.dname}</td><td><img src={c.dImage} width="200px" height="200px" /></td></tr>)
    return (
        // <div className="text-center mx-auto">
        // <table className="mx-auto table">
        //         <thead className="table-primary">
        //             <tr>
        //                 <th>Id</th>
        //                 <th>Disease Name</th>
        //                 <th>Disease Image</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {categoryData}
        //         </tbody>
        //     </table>   
        // </div>
        <div>
            <Link to="/adminhome/addcategory"  className="btn btn-primary">Add Category</Link>
            <div className="">
                
                <table className="table mt-5">
                    <thead className="table-success table-striped">
                        <tr>
                            <th>Id</th>
                            <th>Disease Name</th>
                            <th>Disease Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map(c => 
                            <tr key={c._id}>
                                <td>{c._id}</td>
                                <td>{c.dname}</td>
                                <td><img src={c.dImage} width="200px" height="200px"/></td>
                                <td>
                                    {/* <button className="button">Edit</button>
                                    <button className="button">Delete</button> */}
                                    <Link to={`/adminhome/updatecategory/${c._id}`} className="btn btn-warning px-3 py-2 m-2">Edit</Link>
                                    <button onClick={()=>deleteCategory(c._id)} className="btn btn-danger p-2 m-2">Delete</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ViewCategory;