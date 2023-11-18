const calculateformEl=document.getElementById("calculateForm")
const resultEl=document.getElementById("result")

const calculateMarks= (event) =>{
  const maxMarks=400
  event.preventDefault();
  console.log({event});

  const formData = new FormData(calculateformEl) 
  const data={}
  formData.forEach((value,key) => {
    data[key] = +value

  })
 const totalMarks = data.maths+ data.english+ data.hindi+ data.social 
 const percentage = Math.round((totalMarks / maxMarks) * 100)
 
 resultEl.innerText=`You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`
 

}