import { Suspense } from "react";
import CommentsCard from "./comments";

const CommentsPage = () => {
    const commentsFallback = fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(res => res.json());
    return (
        <div>
            Comments
            <Suspense fallback={<h1>Loading....</h1>}>
                <CommentsCard commentsFallback={commentsFallback}/>
            </Suspense>
        </div>
    );
};

export default CommentsPage;