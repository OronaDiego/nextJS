const Post = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await response.json();

    return (
        <div className="container m-auto flex my-10">

            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Post:</h2>
            <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
            {
                posts.map(item => (
                    <li>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
                    </li>
                ))
            }
            </ol>

        </div>
    )
}

export default Post;