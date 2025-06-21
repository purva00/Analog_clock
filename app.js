<<<<<<< HEAD
setInterval(()=>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotations = 30* htime + mtime/2;
mrotations = 6*mtime;
srotations = 6*stime;

hour.style.transform =`rotate(${hrotations}deg)`;
minute.style.transform =`rotate(${mrotations}deg)`;
second.style.transform =`rotate(${srotations}deg)`;
=======
setInterval(()=>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotations = 30* htime + mtime/2;
mrotations = 6*mtime;
srotations = 6*stime;

hour.style.transform =`rotate(${hrotations}deg)`;
minute.style.transform =`rotate(${mrotations}deg)`;
second.style.transform =`rotate(${srotations}deg)`;
>>>>>>> 9800dc52800cf0233b437bc8bf223fdfab09eb2b
},1000);