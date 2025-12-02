import React from 'react'


const commentData = [
    {
        name: "Sumit",
        comment: "this is coomment",
        replies: [
            {
                name: "Sumit",
                comment: "this is coomment",
                replies: []
            },  
            {
                name: "Sumit",
                comment: "this is coomment",
                replies: [
                    {
                        name: "Sumit",
                        comment: "this is coomment",
                        replies: []
                    },
                    {
                        name: "Sumit",
                        comment: "this is coomment",
                        replies: [
                            {
                                name: "Sumit",
                                comment: "this is coomment",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "Sumit Unhale",
                comment: "this is coomment 5",
                replies: []
            },
            {
                name: "Sumit UNhale",
                comment: "this is coomment 6",
                replies: []
            }
        ]
    },
    {
        name: "Sumit S UNhale",
        comment: "this is coomment 9",
        replies: []
    },
                {
        name: "Sumit S UNhale",
        comment: "this is coomment 9",
        replies: []
    },
                {
        name: "Sumit S UNhale",
        comment: "this is coomment 9",
        replies: []
    }
]


const CommentList = ({ comments }) => {
    return comments.map((comment, index) => 
    <div>
        <Comment key={index} data={comment} />
        <div className='ml-6 border-l border-black'>
           {comment.replies && <CommentList comments={comment.replies} />}
        </div>
    </div> 
    );
}


const Comment = ({data}) => {
    const { name, comment } = data;
    return <div className='mx-3 p-2 bg-gray-100 rounded my-2 flex shadow'>
        <img className='w-10 h-10 my-auto' src='https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0' />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
        </div>
    </div>
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
 