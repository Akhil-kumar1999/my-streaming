
import CommentList from "./CommentList"

const commentsData = [
    {
        name:'akhil kumar',
        comment:"i Like this video what a perfect clarity and sound also , i like this content ",
        replies:[ {
            name:'akhil kumar',
            comment:"i Like this video what a perfect clarity and sound also , i like this content ",
            replies:[ {
                name:'akhil kumar',
                comment:"i Like this video what a perfect clarity and sound also , i like this content ",
                replies:[]
            }]
        }]
    },
    {
        name:'akhil kumar',
        comment:"i Like this video what a perfect clarity and sound also , i like this content ",
        replies:[ {
            name:'akhil kumar',
            comment:"i Like this video what a perfect clarity and sound also , i like this content ",
            replies:[]
        }]
    },
    {
        name:'akhil kumar',
        comment:"i Like this video what a perfect clarity and sound also , i like this content ",
        replies:[ {
            name:'akhil kumar',
            comment:"i Like this video what a perfect clarity and sound also , i like this content ",
            replies:[ {
                name:'akhil kumar',
                comment:"i Like this video what a perfect clarity and sound also , i like this content ",
                replies:[]
            }]
        }]
    },
    {
        name:'akhil kumar',
        comment:"i Like this video what a perfect clarity and sound also , i like this content ",
        replies:[ {
            name:'akhil kumar',
            comment:"i Like this video what a perfect clarity and sound also , i like this content ",
            replies:[ {
                name:'akhil kumar',
                comment:"i Like this video what a perfect clarity and sound also , i like this content ",
                replies:[]
            }]
        }]
    }
]




const ComContainer = ()=>{
    return(
        <div className="m-6 p-5 font-normal text-base ">
            <h1>Comments:  </h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default ComContainer