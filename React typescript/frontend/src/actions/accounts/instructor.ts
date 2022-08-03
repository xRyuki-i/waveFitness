import { json } from 'stream/consumers';
import swal from 'sweetalert';

export interface options {
    method?: string,
    body?: string,
    headers?: HeadersInit|undefined,
    credentials: RequestCredentials|undefined,
}

const instructorReq = async (endpoint : string, options: options, successTxt: string, errorTxt: string) => {

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

export const createInstructor = (data:object) => {
    const endpoint = 'instructor';
    const options: options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };
    const success = "The Instructor was created";
    const error = "Failed to created instructor";

    instructorReq(endpoint, options, success, error);
}

export const getInstructors = () => instructorReq(
    "instructors",
    {credentials: "include"},
    "Instructors extracted",
    "Couldn't load instructors"
)

// {
//     const endpoint='instructors';
//     const options: options = {
//         credentials: "include"
//     }
//     const success = "Instructors extracted";
//     const error = "Couldn't load instructors";

//     instructorReq(endpoint,options,success,error)
// }