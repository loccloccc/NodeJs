import React from 'react'

export default function Ex8() {
    const user =[
        {
            id:1,
            name:"John Witch",
            birt:"21/03/1999",
            sex:"nam",
            address:"An Do",
        },
        {
            id:2,
            name:"C.Ronaldo",
            birt:"21/03/1987",
            sex:"nam",
            address:"Bo Dau Nha",
        }
    ]
  return (
    <table style={{
        width:"100%",
        borderCollapse: "collapse"
    }}>
        <thead>
            <tr style={{ border: "1px solid grey" , backgroundColor:"gray"}} >
                <th>STT</th>
                <th colSpan={3} >Ho va ten</th>
                <th colSpan={2}>Ngay sinh</th>
                <th>Gioi tinh</th>
                <th colSpan={2}>Dia chi</th>
                <th colSpan={4}>Hanh dong</th>
        </tr>
        </thead>
        <tbody>
            {
            user.map((item,index)=>{
                return (
                    <tr key={index} style={{textAlign:"center",border: "1px solid gray"}}>
                    <td>{item.id}</td>
                    <td colSpan={3}>{item.name}</td>
                    <td colSpan={2}>{item.birt}</td>
                    <td>{item.sex}</td>
                    <td colSpan={2}>{item.address}</td>
                    <td colSpan={4} style={{display:"flex",justifyContent:"space-evenly"}}>
                        <button style={{border:"none" , borderRadius:"5px" , width:"50px" , height:"30px"}} >Sua</button>
                        <button style={{backgroundColor:"red" , color:"white", border:"none" , borderRadius:"5px" , width:"50px" , height:"30px"}}>Xoa</button>
                    </td>
                </tr>
                )
            })
        }
        </tbody>
    </table>
  )
}
