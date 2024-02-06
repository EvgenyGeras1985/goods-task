import {useEventListener} from "@vueuse/core";

class DomElemController{
    //переменная будет хранить значение ширины исходной ячейки таблицы
    //функция захвата границы ячейки таблицы scope=col
    getBorder(elem:HTMLTableColElement | undefined){
        useEventListener(elem, "mousemove", (e)=> {
            //смещение мыши относительно начала блока
            // console.log(e.offsetX);
            e.offsetX > 50
                ? elem?.setAttribute("style", "cursor: col-resize; border-right: 1px solid black")
                : elem?.setAttribute("style", "cursor: pointer")
        })
        // this.getDirectionAndResize(elem);
    }


    getDirectionAndResize(elem:HTMLTableColElement | undefined){
        useEventListener(elem, "mousedown", (e) => {
            e.preventDefault()
            console.log('button down')
        })
    }
}

export default new DomElemController();