import { json } from 'stream/consumers';
import swal from 'sweetalert';
import { options } from '../accounts/instructor';



const customerReq = async (endpoint : string, options: options, successTxt: string, errorTxt: string) => {

        return await fetch(`http://localhost:8080/${endpoint}`, options)
        .then(res => {
            if (res.status === 200) {
                console.log("status 200");
                if (options.method){
                    swal(successTxt,"", "success");
                }
                return res.json();
            } else if (res.status === 401) {
                console.log(res.json)
                swal(errorTxt,"", "error");
                return res;
            }
        })
        .catch(err => {return err});
}

export const createUser = (data:object) => {
    const endpoint = 'user';
    const options: options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };
    const success = "The User was created";
    const error = "Failed to created user";

    customerReq(endpoint, options, success, error);
}

export const getUsers = () => customerReq(
    "users",
    {credentials: "include"},
    "Users extracted",
    "Couldn't load users"
)

