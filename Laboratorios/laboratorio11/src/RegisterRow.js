import React ,{component} from "react"
class  RegisterRow extends component{
    render(){

let student=this.props.student;
return(
    <tr className ="table-active">
        <th scope="row"> {student.carnet}</th>
<td> {student.schedule}</td>
<td> {new Date (student.datetime).toLocaleString}</td>
<td>{parseLate(student.isLate)}</td>
<td>
<button
type="button"
className="btn btn-danger"
onClick={()=> {
this.props.onDelete();



}}

Drop
/>
</td>


    </tr>
);

    }


}


const parseLate = value => {
    if (value){
        return "tardisimo";
    }
    return "A tiempo";
}