
export default function Home(){
  return(
  
     <>
     <h1 className="font-mono text-4xl text-black-400 uppercase text-center h-30 w-90 bg-pink-400 border-4 rounded-xl  hover:bg-purple-500 hover:text-white">Welcome to the Home page</h1>
     <p className="font-mono">This is the content in home page</p>
     <button className="bg-yellow-400 w-30 h-10 rounded-xl">Sign Up</button>
     
     
    
     <div  className="flex gap-4"><div className="h-40 w-90 rounded-md bg-white shadow-lg shadow-blue-400 p-8 hover:bg-yellow-500 hover:text-white">
      <h1></h1>
      <p>Sakshi S</p>
     </div>
     <div className="h-40 w-90 rounded-md bg-white shadow-lg shadow-purple-400 p-8  hover:bg-red-500 hover:text-white">
      <h1>About Me</h1>
      <p>I am a student and I am from Mangalore.</p>
     </div> <div className="h-40 w-90 rounded-md bg-white shadow-lg shadow-pink-400 p-8  hover:bg-blue-500 hover:text-white">
      <h1>Education</h1>
      <p>I am studying in Sahyadri College Of Engineering And Management</p>
     <p>I completed my P.U in Carmel Composite P.U College, Modankapu</p>
     </div></div>
<div className="h-40 w-90 rounded-md bg-white shadow-lg shadow-pink-400 p-8  hover:bg-blue-500 hover:text-white">
  <h1>Skills</h1>
  <p>leadership,teamwork</p>
</div>
<div className="h-40 w-90 rounded-md bg-white shadow-lg shadow-pink-400 p-8  hover:bg-blue-500 hover:text-white">
  <h1>Projects</h1>
  <p>Built mini-project in P.U</p>
  <p>Participated in IIT BHU-Hackathon and Line-Follower Competition</p>
</div>

     
    </>
    
  )
}
