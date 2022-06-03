  tableCreate();
let col='white'
function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.height = '400px';
    tbl.style.border = '1px solid black';
  
    for (let i = 1; i < 11; i++) {
      const tr = tbl.insertRow();
      for (let j = 1; j < 11; j++) {
        const td = tr.insertCell();

        td.addEventListener('mouseover', function handleClick() {
            td.style.backgroundColor = col; 
          });
        td.style.border = '1px solid black'; 
      }
    }
    body.appendChild(tbl);
  }
  
function red(){
    col='red';
}
function green(){
    col='green';
}
function blue(){
    col='blue';
}
function pink(){
    col='pink';
}
function yellow(){
    col='yellow';
}
function white(){
    col='white';
}
  