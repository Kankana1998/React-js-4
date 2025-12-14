import React, { useState } from 'react'

const commentData = [
    {
     name: 'Kankana Nath',
     text: 'This is an amazing video! Really enjoyed watching it. The content is very informative and well presented.',
     replies: [
        {
            name: 'John Doe',
            text: 'I completely agree! Great insights shared here.',
            replies: [],
        }
     ]
}, 
{
    name: 'Alex Morphey',
     text: 'I need a new React course. Can anyone recommend a good one?',
     replies: [
        {
            name: 'John Doe',
            text: 'Check out the channel for more React tutorials!',
            replies: [],
        }
     ]
}
];

const Comment = ({data, level = 0}) => {
    const {name, text, replies} = data;
    const [showReplies, setShowReplies] = useState(true);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100));

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    };

    return(
        <div className={`flex gap-3 ${level > 0 ? 'mt-3' : ''} animate-fade-in`}>
            <div className='flex-shrink-0'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm'>
                    {name[0]?.toUpperCase() || 'U'}
                </div>
            </div>
            <div className='flex-1'>
                <div className='bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors'>
                    <div className='flex items-center gap-2 mb-1'>
                        <p className='font-semibold text-sm text-gray-900'>{name}</p>
                        <span className='text-xs text-gray-500'>2 days ago</span>
                    </div>
                    <p className='text-sm text-gray-700 mb-3'>{text}</p>
                    
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                liked 
                                    ? 'bg-primary-100 text-primary-700' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' />
                            </svg>
                            {likes}
                        </button>
                        <button className='flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                            </svg>
                            Reply
                        </button>
                    </div>
                </div>
                
                {replies.length > 0 && (
                    <div className='mt-2 ml-4 pl-4 border-l-2 border-gray-200'>
                        <button
                            onClick={() => setShowReplies(!showReplies)}
                            className='text-xs text-primary-600 font-medium hover:text-primary-700 mb-2 flex items-center gap-1'
                        >
                            <svg className={`w-3 h-3 transition-transform ${showReplies ? 'rotate-90' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                            {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
                        </button>
                        {showReplies && (
                            <div className='space-y-3'>
                                {replies.map((reply, index) => (
                                    <Comment key={index} data={reply} level={level + 1} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return (
        <div className='space-y-4'>
            {comments.map((comment, index) => (
                <Comment key={index} data={comment} />
            ))}
        </div>
    );
};

const CommentsContainer = () => {
    const [newComment, setNewComment] = useState('');

    return (
        <div className='space-y-6'>
            <div className='flex items-center gap-3'>
                <h2 className='text-xl font-bold text-gray-900'>
                    {commentData.length} {commentData.length === 1 ? 'Comment' : 'Comments'}
                </h2>
            </div>

            {/* Add Comment */}
            <div className='flex gap-3'>
                <div className='flex-shrink-0'>
                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm'>
                        Y
                    </div>
                </div>
                <div className='flex-1'>
                    <input
                        type='text'
                        className='w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm'
                        placeholder='Add a comment...'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </div>
            </div>

            {/* Comments List */}
            <div className='space-y-4'>
                <CommentList comments={commentData} />
            </div>
        </div>
    );
};

export default CommentsContainer;