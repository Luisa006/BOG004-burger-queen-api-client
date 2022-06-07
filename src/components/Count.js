import React from "react";

function Count ({ numClicks }) {
    return(
        <div className="count">
            { numClicks }
        </div>
    );
}

export default Count;