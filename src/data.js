export const API_KEY = 'AIzaSyCR1lofgkv7Knzvn_C-OgBPvLATIAj4XsM';

export const value_couverter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }

}