import "./Home.scss";
import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      await axios("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    })();
  }, []);

  console.log(data);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {/* <Category /> */}
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>

    // <>
    //   {data ? (
    //     <table>
    //       <thead>
    //         <tr>
    //           <td>id</td>
    //           <td>category</td>
    //           <td>description</td>
    //           <td>image</td>
    //           <td>price</td>
    //           <td>title</td>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((e, i) => {
    //           return (
    //             <tr key={i}>
    //               <td>{e.id}</td>
    //               <td>{e.category}</td>
    //               <td>{e.description}</td>
    //               <td>
    //                 <img style={{ width: "100px" }} src={e.image} alt="img" />
    //               </td>
    //               <td>{e.price}</td>
    //               <td>{e.title}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   ) : null}
    // </>
  );
};

export default Home;
