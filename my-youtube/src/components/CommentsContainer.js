import React from 'react'

const commentData = [
    {
     name: 'Kankana Nath',
     text: 'This is a hyoutubekenb jgj',
     replies: [
        {
            name: 'John Doe',
            text: 'New comment',
            replies: [],
        }
     ]
}, 
{
    name: 'Alex Morphey',
     text: 'I need a new RJS course',
     replies: [
        {
            name: 'John Doe',
            text: 'New comment',
            replies: [],
        }
     ]
}
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return(
         <div className='flex shadow-sm bg-gray-50 p-2 rounded-lg'>
        <img className='w-12 h-12' 
        alt='user'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
        <div className='px-3'>
         <p className='font-bold'>{name}</p>
         <p>{text}</p>
        </div>
    </div>
    );
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
              <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;