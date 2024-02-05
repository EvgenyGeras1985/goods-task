import {useEventListener} from "@vueuse/core";

class DomElemController{
    //переменная будет хранить значение ширины исходной ячейки таблицы
    currWidth:number = 0;
    //функция захвата границы ячейки таблицы scope=col
    getBorder(elem:HTMLTableColElement | undefined){
        useEventListener(elem, "mousemove", (e)=> {
            e.offsetX > 20
                ? elem?.setAttribute("style", "cursor: pointer")
                : elem?.setAttribute("style", "cursor: col-resize")
        })
        // this.getDirectionAndResize(elem);
    }


    getDirectionAndResize(elem:HTMLTableColElement | undefined){
        useEventListener(elem, "mouseout", (e) => {
            this.currWidth - e.offsetX < this.currWidth
                ? elem?.setAttribute("style", `padding-right: ${this.currWidth + e.offsetX}px`)
                : elem?.setAttribute("style", `padding-right: ${-this.currWidth + e.offsetX}px`)
        })
    }


    resizeElement(elem:HTMLTableColElement){

    }
}

export default new DomElemController();