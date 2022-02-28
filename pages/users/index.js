import Link from "next/link";

const users = ({users})=>{
    return <>
     <div>
        { users.data.map((e)=>{
            return (
                <>
                <h1>{e.first_name}</h1>
                <Link href={`/users/`+ e.id} key={e.id}><button>view details</button></Link>
                </>
            )
        })}
     </div>
    </>
}

export  async function getStaticProps()
{
    const req = await fetch(`https://reqres.in/api/users`)
    const data = await req.json();
    return {
        props: {users: data}
    }
}

export default users
