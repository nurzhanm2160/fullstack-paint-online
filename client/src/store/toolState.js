import {makeAutoObservable} from "mobx";

class toolState {
     tool = null
     constructor() {
          makeAutoObservable(this)
     }

     setTool(tool) {
           this.tool = tool
     }

     setFillColor(color) {
          this.tool.fillColor = color
     }

     setStrokeColor(color) {
          this.tool.strokeColor = color
     }

     setLineWidth(widh) {
          this.tool.lineWidth = widh
     }



}

export default new toolState()