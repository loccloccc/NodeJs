import React from 'react'

export default function FormatName() {
    const user = {
        firstName: "Nguyễn Văn",
        lastName: " Nam"
    };
    function formatName(user:{firstName:string,lastName:string}):string{
        return user.firstName + user.lastName;
    } 

  return (
    <div>
      <b>Ho va ten : {formatName(user)}</b>
    </div>
  )
}
