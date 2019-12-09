import React from 'react';
 
class CustomSelect extends React.Component{
      constructor(props){
        super(props);
        this.state={}
        this.ref=React.createRef();
         
      }
      
      componentDidMount() {    this.CSHandle();
           }
        
        CSHandle=()=>{
 
          let data=this.props.data; 
 
          var x, i, j, selElmnt, a, b, c;  
           x = document.getElementsByClassName(data.wrapperClass);
          for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
             a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.setAttribute("style", "text-transform:none; font-size:1em; color:"+data.optionCol+"!important")
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
             b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
               
              c = document.createElement("DIV"); 
              c.setAttribute("style", "font-weight:580; color:"+data.optionCol)
              c.innerHTML = selElmnt.options[j].innerHTML; 
              c.addEventListener("click", function(e) {
                   
                  var y, i, k, s, h;
                  s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                  h = this.parentNode.previousSibling;
                  //sets(h.innerHTML);
                  data.callback(this.innerHTML);
                  for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                      s.selectedIndex = i;
                      h.innerHTML = this.innerHTML;
                      y = this.parentNode.getElementsByClassName("same-as-selected");
                      for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                      }
                      this.setAttribute("class", "same-as-selected");
                      break;
                    }
                  }
                  h.click();
              });
              b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
               
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
          }
          
          function closeAllSelect(elmnt) {
             
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
              if (elmnt == y[i]) {
                arrNo.push(i)
              } else {
                y[i].classList.remove("select-arrow-active");
              }
            }
            for (i = 0; i < x.length; i++) {
              if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
              }
            }
          }
          document.addEventListener("click", closeAllSelect);
        }
      
  
  
  
  
         
    render(){ //this.cleancsBox();
        return(  <div ref={this.ref}>{}
                    <select> {}
                        {this.props.data.options.map((opt)=>(
                             <option>{opt}</option>
                        ))}                      
                     </select> 
                      <div>{ }</div>
                </div>
                 
        ) 
    }
}

export default CustomSelect;