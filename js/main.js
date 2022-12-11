window.addEventListener("DOMContentLoaded", function () {
document.getElementById('find-me').addEventListener('click', geoFindMe);
document.getElementById('shareBtn').addEventListener('click', share);

var linkToShare="";
var titleToShare="";

function geoFindMe(){
if(navigator.geoFindMe){
    navigator.geolocation.getCurrentPosition(success, error);
}
else{
    document.getElementById("status").textContent="the browser does not support geolcation";
}
}

function success(position){
    const latitube = position.coords.latitube;
    const longitude = position.coords.longitude;

    linkToShare =`https://maps.google.com/?q=${latitude},${longitude}`;
    titleToShare = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`;

    document.getElementById("map-link").textContent=titleToShare;
    document.getElementById("iframe").src=linkToShare;
    document.getElementById("iframe").classList.remove("d-none");
}


function error(){
    document.getElementById("status").textContent="the browser could not reteive geolocation";
}

function share(){
    if(navigator.share){
        const sharedata={
            title:"my Geo Location",
            text: titleToShare,
            url: linkToShare,
        }
        navigator.share(sharedata);
    }
    else{
        document.getElementById("status").textContent="could not share data";
    }
}
})
