class MoveDomElement{

    private delta = 1 ;


    // changeWidth(elem : HTMLElement){
    //     elem.setAttribute("style","width:500px");
    //     console.log(elem.clientWidth);
    // }

    captureTableCellBorder(elem: HTMLTableColElement){
        //получить квадрат ячейки col table элимента
        let rect = elem.getBoundingClientRect();
        let x:number = rect.left;      // the relative mouse postion to the element
        let y:number =  rect.top;       // ...
        let w:number = rect.left;     // width of the element
        let h:number =  rect.top;     // height of the element

        let c = "";                          // which cursor to use
        if(y < this.delta) c += "n";              // north
        else if( y > h - this.delta) c += "s";    // south
        if(x < this.delta) c += "w";              // west
        else if(x > w - this.delta) c += "e";     // east

        if(c)                                // if we are hovering at the border area (c is not empty)
        {
            elem.style.cursor = c + "-resize"; // set the according cursor
            //не корректно работает тернарный оператор
            elem ? elem.setAttribute("style","width:500px") : console.log("not table cell");
        }
        else    {
            elem.style.cursor = "none";    // set to pointer
        }
    }
}

export default new MoveDomElement();