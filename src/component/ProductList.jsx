import React from "react";
import { productDataContext } from "../ProductDataContext";
const ProductList = ()=>{
    
  return (
    <>
      <tr className={isSelected ? "table-info" : ""} id={id}>
        <th scope="row">{index} </th>
        <th scope="row">{title}</th>
        {/* <td>{title}</td> */}
        <td>{origin_price}</td>
        <td>{price}</td>
        <td>
          <span className={!is_enabled ? "text-danger fw-bold fs-4" : ""}>
            {is_enabled ? "Y" : "N"}
          </span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={atGetProduct}
          >
              細節
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={atDeleteProduct}
          >
              刪除
          </button>
        </td>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={atOpenEditMOdal}
            >
                編輯
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={atOpenDeleteModal}
            >
                刪除
            </button>
          </div>
        </td>
      </tr>
    </>);

};

export default ProductList;