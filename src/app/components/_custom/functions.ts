import { AbstractControl } from "@angular/forms";

export function toCapitalFirst(str:String){
    str = str.toLowerCase();
    let words = str.split(' ');
    let capWord:String = '';
    words.forEach((word)=>{
        capWord += word.charAt(0).toUpperCase() + word.slice(1) + ' '
    })
    return capWord.trim()
}
export function randomChar(req){
    let all = 'AaBbCcDdEeFfGgHh0Ii1Jj2Kk3Ll4Mm5Nn6Oo7Pp8Qq9RrSsTtUuVvWwXxYyZz';
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    if (req == 'all'){
        return all[Math.floor(Math.random() * 62)];
    } else if (req=='capital'){
        return capitals[Math.floor(Math.random() * 26)];
    } else if(req == 'lower'){
        return lower[Math.floor(Math.random() * 26)];
    } else {
        return numbers[Math.floor(Math.random() * 10)];
    }
}
// DATE STUFF
export const  aDayIs = 86400000,
              aWeekIs = 604800000,
              Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
              Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export function InputDate(dateValue:number):string{
    if (dateValue==undefined || dateValue==null || dateValue==0) return null;
    let cd = new Date(dateValue);
    return (cd.getFullYear().toString()+'-'+('0'+(cd.getMonth()+1).toString()).slice(-2)+'-'+('0'+cd.getDate().toString()).slice(-2));
}
export function ConvertDate(dateValue:number):string{
    if (dateValue==undefined || dateValue==null || dateValue==0) return null;
    let cd = new Date(dateValue);
    return (('0'+cd.getDate().toString()).slice(-2)+'-'+('0'+(cd.getMonth()+1).toString()).slice(-2)+'-'+cd.getFullYear().toString());
}
export function DateValue(value:any):number{
    if (value== undefined || value== null || value== '' || value == 0) {
        return Date.parse(new Date().toDateString());
    } else {
        return Date.parse(new Date(value).toDateString());
    }
}
export function CalculateFinishTime(date:String, start:String, duration:String):{date:String, time:String, value:number}{
    if (date=='' || start=='' || duration=='') return {date:'', time:'', value:0}
    
    let d=date.split('-');
    let t=start.split(':');
    let u=duration.split(':');

    let finish = new Date(new Date(parseInt(d[0]),parseInt(d[1])-1,parseInt(d[2]),parseInt(t[0]),parseInt(t[1]),0).valueOf()+
                            parseInt(u[0])*3600000+parseInt(u[1])*60000)
   
    return {date:finish.toLocaleDateString(), time:finish.toLocaleTimeString(), value:finish.valueOf()}
}