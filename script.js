setInterval(() => {
    let date = new Date();
    ht = date.getHours();
    mt = date.getMinutes();
    st = date.getSeconds();
    hrotation = 30*ht + mt/2;
    mrotation = 6*mt + st/10;
    srotation = 6*st;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);