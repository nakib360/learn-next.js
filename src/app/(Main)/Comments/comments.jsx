import { use } from "react";

const CommentsCard = ({ commentsFallback }) => {
    const allComments = use(commentsFallback);
    return (
        <div className="space-y-10 ">
            {
                allComments.map(comment => (
                    <div key={comment.id}>
                        {comment.body}
                    </div>
                ))
            }
        </div>
    );
};

export default CommentsCard;