import React, { useEffect } from "react"

function MaxPriorities() {
  
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="border-t border-[color:var(--orange)] flex-grow"></div>
            <p className="text-sm text-[color:var(--orange)] px-5 text-center">Maximum priorities added.<br></br>Complete a priority to add more</p>
            <div className="border-t border-[color:var(--orange)] flex-grow"></div>
        </div> 
    )

}

export default MaxPriorities