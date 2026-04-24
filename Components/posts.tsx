

const Posts =async () => {
    let posts;
    try {
        const response = await fetch("http://localhost:3000/api/Posts",
            {
                cache:"no-cache"
            })
        if (response.ok){
            posts = await response.json()
        }
    }catch (error){
        console.log("something went wrong")
    }
    posts? console.log(posts): null
    return (
        <div className={"py-5 px-2 w-full h-fit overflow-x-scroll flex"}>
            <div className={"w-full "}>
                
            </div>
        </div>
    )
}
export default Posts
