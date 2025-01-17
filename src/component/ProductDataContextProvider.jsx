/* eslint-disable react/prop-types */
import React, { Children } from "react";
import { productDataContext } from "../ProductDataContext";
const ProductDataContextProvider = ({ Children })=>{

  return (
    <ProductDataContextProvider.provider value={{ filterData, }}>
      {Children}
    </ProductDataContextProvider.provider>
  );

};

export default  ProductDataContextProvider;