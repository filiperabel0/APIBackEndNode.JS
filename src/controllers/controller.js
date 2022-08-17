import getdata from '../models/model.js'

async function reqdata() {
    const data = await getdata();
    return data 
}

export default reqdata;