


function Collages({colleges}) {

    const filteredColleges  = colleges.filter((key) => key === "BIT")

    return (
        <>
      {
        filteredColleges .map((item) => (
            <p key={item} > Collage Name : {item} </p>
        ))
      }
        </>
    )
}

export default Collages;