import React from "react";


const showStar = () => {
    let n = Math.random();
    n %= 5;
    console.log("What is n")
    console.log(n);

    if (n === 1) {
        return (
            <div className="d-inline">
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
            </div>
        );
    } else if (n === 2) {
        return (
            <div className="d-inline">
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
            </div>
        );
    } else if (n === 3) {
        return (
            <div className="d-inline">
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
            </div>
        );
    } else if (n === 4) {
        return (
            <div className="d-inline">
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
            </div>
        );
    } else if (n === 5) {
        return (
            <div className="d-inline">
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
                <i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>
            </div>
        );
    }
}
export default showStar;