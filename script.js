const plus_icon_url='./assets/images/icon-plus.svg';
const minus_icon_url='./assets/images/icon-minus.svg';
let curr_idx1=0,curr_idx2=0,curr_idx3=0,curr_idx4=0;
function changeIconImage(val){
    if(val==1){
        const img1=document.getElementById('ic1');
        if(curr_idx1%2==0){
            img1.src=minus_icon_url;
            displayContent(val);
        }
        else{
            img1.src=plus_icon_url;
            removeContent(val);
        }
        curr_idx1++;
    }
    else if(val==2){
        const img2=document.getElementById('ic2');
        if(curr_idx2%2==0){
            img2.src=minus_icon_url;
            displayContent(val);
        }
        else{
            img2.src=plus_icon_url;
            removeContent(val);
        }
        curr_idx2++;
    }
    else if(val==3){
        const img3=document.getElementById('ic3');
        if(curr_idx3%2==0){
            img3.src=minus_icon_url;
            displayContent(val);
        }
        else{
            img3.src=plus_icon_url;
            removeContent(val);
        }
        curr_idx3++;
    }
    else if(val==4){
        const img4=document.getElementById('ic4');
        if(curr_idx4%2==0){
            img4.src=minus_icon_url;
            displayContent(val);
        }
        else{
            img4.src=plus_icon_url;
            removeContent(val);
        }
        curr_idx4++;
    }
}
function displayContent(val){
    if(val==1){
        var content=document.getElementById('a1');
        content.style.display='block';
    }
    else if(val==2){
        var content=document.getElementById('a2');
        content.style.display='block';
    }
    else if(val==3){
        var content=document.getElementById('a3');
        content.style.display='block';
    }
    else if(val==4){
        var content=document.getElementById('a4');
        content.style.display='block';
    }
}
function removeContent(val){
    if(val==1){
        var content=document.getElementById('a1');
        content.style.display='none';
    }
    else if(val==2){
        var content=document.getElementById('a2');
        content.style.display='none';
    }
    else if(val==3){
        var content=document.getElementById('a3');
        content.style.display='none';
    }
    else if(val==4){
        var content=document.getElementById('a4');
        content.style.display='none';
    }
}