
/**
 * Given a URL format and a URL instance, returns an object matching variables to values.
 * @param {String} format URL structure
 * @param {String} urlInstance URL values
 * @returns Object
 */

const urlParser = (urlFormat,urlInstance) => {
    const hash = {}

    //get object keys from urlFormat
    urlFormat=urlFormat.replace(/:/g,'')
    let keys = urlFormat.substring(1).split('/'),
    //get values from instance and params if any
    [values, params] = urlInstance.substring(1).split('?')
    values=values.split('/')
    
    //matches keys with respective instance values, ignoring constants
    for(let i=0;i<keys.length;i++){
        if(keys[i]!==values[i]){
            hash[keys[i]]=values[i]
        }
    }

    //if params exist, add them to hash
    if (params) {
        params=params.split('&')
        params.forEach(param=>{
            let [key,value] = param.split('=')
            hash[key]=value
        })
    }
  

    return hash
}