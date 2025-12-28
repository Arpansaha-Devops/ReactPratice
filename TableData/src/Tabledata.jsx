


function Tabledata() {
    
    const users = [
        {
        name : "Arpan",
        id : 1,
        gamil : "arpansaha@gmail.com",
        city : "Delhi"
    },
        {
        name : "Tanmoy",
        id : 2,
        gamil : "tanmoydas@gmail.com",
        city : "Delhi"
    },
        {
        name : "Messi",
        id : 3,
        gamil :  "messi@gmail.com",
        city : "New york"
    },
        {
        name : "Ronaldo",
        id : 4,
        gamil : "ronaldo@gmail.com",
        city : "Saudi"
    },




]

    return(
        <>
        <table border={1} >
            <thead>

                <tr>
    <th>id</th>
    <th>name</th>
    <th>gamil</th>
    <th>city</th>
  </tr>

            </thead>

<tbody>

{
    users.map((key) =>   <tr  key={key.id} >
    <td>{key.id}</td>
    <td>{key.name}</td>
    <td>{key.gamil}</td>
    <td>{key.city}</td>
  </tr>)
 }


</tbody>
 
 
        </table>
        
        </>
    )
}

export default Tabledata;