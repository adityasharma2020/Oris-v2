import "./featured.scss"
import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp"
import { KeyboardArrowDown } from "@mui/icons-material"
import RadialChart from "../chart/RadialChart/RadialChart"

const Featured = () => {
  return (
    <div className="featured">

      <div className="top">
        <h1 className="title">Percentage value</h1>
        
      </div>

      <div className="bottom">
        <div className="featuredchart">
          {/* <CircularProgressbar value={70} text={"70"} strokeWidth={5} /> */}
          <RadialChart/>
        </div>

        
      </div>
    </div>
  )
}

export default Featured
