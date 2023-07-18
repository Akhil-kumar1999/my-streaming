import Comments from "./Comments"


const CommentList = ({comments})=>{
     return  comments.map((comments,i)=>{
        return <div>
               <Comments key={i} data = {comments}/>
               <div className="pl-4 border border-l-black ml-4">
               <CommentList comments={comments.replies} />
               </div>
               </div>
       
      }
      )
   
}

export default CommentList