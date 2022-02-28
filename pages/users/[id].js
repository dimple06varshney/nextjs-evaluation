import { useRouter } from "next/router";
import Link from "next/link";
export default function userDetail({user}) {
    const router = useRouter();
    return <>
      <h1>Hello</h1>
      <h2>{user.data.email}</h2>
      <h2>{user.data.first_name}</h2>
      <h2>{user.data.last_name}</h2>
      <img src={user.data.avatar} alt={user.data.first_name}/>
      <Link href={`/users`}><button>Go Back</button></Link>
    </>
}
export async function getStaticPaths(){
    const req = await fetch(`https://reqres.in/api/users`)
    const data = await req.json();

    const paths = data.data.map((e)=>{
        return {
            params: {id: e.id.toString()}
        }
    })
   return {
       paths: paths,
       fallback: false
   }
}

export  async function getStaticProps({params})
{
    const id = params.id
    const req = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await req.json();

    return {
        props: {
            user: data
        }
    }
}
