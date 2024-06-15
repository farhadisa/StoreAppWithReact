import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories){
  return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}

export function getCategories(){
  return function(dispatch){
    //debugger BU ise yoxlamaq ucundu bir nov console log kimi yeni gelib bura dusurmu ya yox bilmekcun daha dogrusu breakpoint kimi biseydi bu
    let url = "http://localhost:3000/categories";
    fetch(url).then(response=>response.json())
    .then(result=>dispatch(getCategoriesSuccess(result)))
  }
}