

function User({displayAlert,name = "arpan"}) {
    
    return(
        <>
        <button  onClick={() => displayAlert(name )} > Click here </button>
        </>
    )
}

export default User;