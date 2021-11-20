import React from "react"
import './LoadingDiv.css'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingDiv(){
    return(
      <div className="LoadingDiv__Body">
          <CircularProgress />
      </div>
    );
}

export default LoadingDiv;