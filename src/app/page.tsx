import Link from 'next/link';
const Home =()=>{
    return (
        <div className="flex min-h-screen items-center justify-center ">
            Click <Link href="/documents/123">
            <span className="text-blue-400 underline">&nbsp;here&nbsp;</span>
            </Link>to go to the document Id
            <p className="m-6">Hello world</p>
        </div>
    )
}

export default Home;