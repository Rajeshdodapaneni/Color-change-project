let chngclr=()=>{
    let clr=prompt('Enter color');
    clr=clr.toLowerCase()
    let change=document.getElementsByTagName('td');
    // console.log(change);
    switch(clr){
        case 'black':
            change[0].style.cssText=`background:black;color:white;`
            break;
        case 'green':
            change[1].style.cssText=`background:green;color:white;`
            break;
        case 'red':
            change[2].style.cssText=`background:red;color:white;`
            break;
        case 'yellow':
            change[3].style.cssText=`background:yellow;color:white;`
            break;
        case 'blue':
            change[4].style.cssText=`background:blue;color:white;`
            break;
        case 'pink':
            change[5].style.cssText=`background:pink;color:white;`
            break;
        default:
            alert('Invalid Color');
        

    }
}