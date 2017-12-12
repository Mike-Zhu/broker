export const checkPathname = [
    '/menu'
]
export const pathObject = {
    '/menu':"经纪人系统|二当家"
}

export const checkToken = () => {
    const token = localStorage.getItem('token'),
          tokenTime = localStorage.getItem('tokenTime'),
          validTime = 60*60*12*1000,
          currentTime = new Date().getTime();
    if(!token || !tokenTime || !parseInt(tokenTime,10)){
        return false;
    }
    const checkTime = currentTime - parseInt(tokenTime,10);
    if(checkTime <= validTime){
        return true;
    }else{
        return false;
    }
  }