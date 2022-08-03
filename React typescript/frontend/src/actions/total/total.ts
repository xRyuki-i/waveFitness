import { json } from 'stream/consumers';
import swal from 'sweetalert';
import { options } from '../accounts/instructor';

const totalReq = async (endpoint : string, options: options, errorTxt: string) => {

    return await fetch(`http://localhost:8080/${endpoint}`, options)
    .then(res => {
        if (res.status === 200) {
            console.log("status 200");
            return res.json();
        } else if (res.status === 401) {
            console.log(res.json)
            swal(errorTxt,"", "error");
            return res;
        }
    })
    .catch(err => {return err});
}

export const totalMemberships = () => totalReq(
    "memberships/total",
    {credentials: "include"},
    "Couldn't load memberships"
)

export const totalInstructors = () => totalReq(
    "instructors/total",
    {credentials: "include"},
    "Couldn't load instructors"
)
export const totalUsers = () => totalReq(
    "users/total",
    {credentials: "include"},
    "Couldn't load users"
)
