import React from "react";
/* 
 there is a nother way to code this function, use split and index for key. 
const RecipeIndex = ({ alphaIndex }) => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="alpha-container">
            {alpha.map((item, index) => (
                <div className="numBox" key={index} onClick={() => alphaIndex(item)}>
                    <h3>{item}</h3>
                </div>
            ))}
        </div>
    );
};
*/
const RecipeIndex=({alphaIndex})=>{
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
    return(
        <>
            {
                alpha.map(item=>{
                    return(
                        <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeIndex