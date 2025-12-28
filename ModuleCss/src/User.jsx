
import style from './Module/user.module.css' // This is called moduler css....
function User() {
    return(
        <>
        <h1 className={style.heading} >This Is My Card Component</h1>
        <img  className={style.image} src="https://media.istockphoto.com/id/1419988769/photo/porsche-911-turbo-s.jpg?s=612x612&w=0&k=20&c=KdoIXVhnHEJcJkvxHHkOHLyVcq7YtzGBG9QE8uBjI_4=" alt="Porsche" />
        <p>Car Name : Porsche</p>
        <p>Car Price : $600000</p>
        </>
        
    )
}

export default User;