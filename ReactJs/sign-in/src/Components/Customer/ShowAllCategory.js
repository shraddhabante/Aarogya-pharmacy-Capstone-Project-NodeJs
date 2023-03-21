
import axios from "axios";
import { useEffect, useState } from "react";


function showAllCategory() {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        async function showCategoryData() {
            try {
                let result = await axios.get("http://localhost:3000/api/category/showAllCategory", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                // console.log(result.data);
                setCategory(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        showCategoryData();
    }, [])

    // let categoryData=category.map(c=><tr key={c._id}><td>{c._id}</td><td>{c.dname}</td><td><img src={c.dImage} width="200px" height="200px"/></td></tr>)
    // return (
    //     <div className="text-center mx-auto">
    //         <h2>All Category Details!</h2>
    //         <table className="mx-auto table">
    //             <thead className="table-primary">
    //                 <tr>
    //                     <th>Id</th>
    //                     <th>Disease Name</th>
    //                     <th>Disease Image</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {categoryData}
    //             </tbody>
    //         </table>
    //     </div>
    // )

    return (
        <div>
            <h2 className="mt-4 p-2 bg-warning bg-opacity-10 border border-warning border-start rounded container">All Category Details!</h2>
            <div className="d-flex row justify-content-evenly container ms-5">
                {category.map((c) =>
                    <div className="card-container col-lg-4" key={c._id}>
                        <div>
                            <div className="div1">
                                <img src={c.dImage} width="100%" height="100%" />
                            </div>
                            <div className="text-center fs-3 fw-bold">
                                {/* <h2>{c._id}</h2> */}
                                <h3>{c.dname}</h3>
                            </div>

                        </div>
                    </div>

                )}
            </div>
        </div>

    )

}
export default showAllCategory;