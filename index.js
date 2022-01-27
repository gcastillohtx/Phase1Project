//// get all images // fetch 
getAllRecords()
const recordCollection = document.querySelector("#recordList")
const recordForm = document.querySelector("#new-record")

recordForm.addEventListener("submit", addFormToList)


function getAllRecords(){
    fetch("http://localhost:3000/records")
     .then(res => res.json())
     .then(recordArray => {
       recordArray.forEach(recordObj => {
        createImageTags(recordObj)
      })
    })
  }



// display images to top of page // 

function createImageTags(recordObj){
    const recordImg = document.createElement("img")
    recordImg.src = recordObj.record_image


  // recordImg.addEventListener('click', () => updateDisplay(recordObj))
  recordImg.addEventListener('click', function(e) {
    // add a single records details to the page
    // console.log(e);

    const displayImg = document.querySelector('.detail-image')
    displayImg.src = recordObj.artist_image
    displayImg.alt = recordObj.title

    const displayVideo = document.querySelector('#musicvideo')
    displayVideo.src = recordObj.video
    // console.log(recordObj.video)

    const displayRecordName = document.querySelector("#recordName")
    displayRecordName.textContent = "Album Title:" + recordObj.title

    const displayArtistName = document.querySelector(".artistName")
    displayArtistName.textContent = recordObj.artist

    




    
  })
  recordCollection.append(recordImg)
  // append each img tag to the dom inside of records-list  
 
}


function addFormToList(e) {
  e.preventDefault()
  const recordImg = document.createElement("img")
  recordImg.src = e.target.recordimg.value
  
  
  
  
  recordCollection.append(recordImg)
  // console.log(e)


}
