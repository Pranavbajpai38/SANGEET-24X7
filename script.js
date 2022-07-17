let songindex =0;
let audioelement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif =  document.getElementById('gif');
let songitems =Array.from(document.getElementsByClassName('songItem'));
let bottomname = document.getElementById('bottomname');
let songs = [
    {songname:"No Love-Shubh", filepath:"songs/Shubh - No Love_192(PagalWorld.com.se).mp3", coverpath:"covers/nolove.jpg",duration:"03:14"},
    {songname:"Maiya Menu", filepath:"songs/04. Maiya Menu Yaad Aa Gaya.mp3", coverpath:"covers/maiyamenu.jpg",duration:"03:51"},
    {songname:"Afterglow-Ed-Sheeran", filepath:"songs/Ed-Sheeran-Afterglow-Official.mp3", coverpath:"covers/afterglow.jpg",duration:"03:04"},
    {songname:"Kasoor-Prateek Kuhad", filepath:"songs/Kasoor-Prateek Kuhad-VlcMusic.CoM.mp3", coverpath:"covers/kasoor.jpg",duration:"03:17"},
    {songname:"Let Me Love You - justin", filepath:"songs/Let Me Love You_192(PagalWorld.com.se).mp3", coverpath:"covers/letmeloveu.jpg",duration:"03:25"},
    {songname:"Night-Changes", filepath:"songs/Night-Changes_320(PagalWorld).mp3", coverpath:"covers/nightchanges.jpg",duration:"03:48"},
    {songname:"Gods-Plan-Drake", filepath:"songs/Drake_-_Gods_Plan_Olagist.co_.mp3", coverpath:"covers/godsplan.jpg",duration:"02:48"}
]

masterPlay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else 
    {
        audioelement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate')

    let progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime= ((myProgressBar.value*audioelement.duration)/100);
})
// audioelement.play();
// songitems.forEach((element,i) => {
//     element.getElementsByTagName('img')[0].src=songs[i].coverpath;
//     element.getElementsByClassName('songname')[0].innerText=songs[i].songname
// });

for (let i=0;i<songitems.length;i++)
{
    songitems[i].getElementsByTagName('img')[0].src=songs[i].coverpath;
    songitems[i].getElementsByClassName('songname')[0].innerText=songs[i].songname;
    // songitems[i].getElementsByClassName('time')[0].innerText=songs[i].duration;
}

let makeall = ()=>{
    Array.from(document.getElementsByClassName('playsongitem')).forEach((e)=>
    {
        
            
            e.classList.remove('fa-circle-pause')
            e.classList.add('fa-circle-play')
        
    })
}

Array.from(document.getElementsByClassName('playsongitem')).forEach((e)=>
{
    e.addEventListener('click',(e1)=>
    {
         if (e1.target.classList.contains('fa-circle-play'))
        {
            // console.log(e1.classList)
            //console.log(e1.classList)
        makeall();
        
        songindex = parseInt(e1.target.id)
        gif.style.opacity=1
        bottomname.innerText=songs[songindex].songname;
        e1.target.classList.remove('fa-circle-play')
        e1.target.classList.add('fa-circle-pause')
        audioelement.src=`songs/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        }
        else 
        {
            makeall();
            audioelement.pause();
            gif.style.opacity=0;
        }
        
    })
})

document.getElementById('next').addEventListener('click',()=>
{
    if (songindex==6)
    {
         songindex=0;
    }
    else{
        songindex +=1;

    }
    makeall();
    gif.style.opacity=1
    bottomname.innerText=songs[songindex].songname;
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play')
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause')
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click',()=>
{
    if (songindex==0)
    {
         songindex=6;
    }
    else{
        songindex -=1;

    }
    makeall();
    gif.style.opacity=1
    bottomname.innerText=songs[songindex].songname;
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play')
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause')
    audioelement.src=`songs/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})
