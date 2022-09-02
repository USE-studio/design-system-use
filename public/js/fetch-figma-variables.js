import * as Figma from 'figma-js'

// const fetchFigmaVariables = () => {
class FetchFigmaVariables {
  constructor () {
    // Figma - start
    // this.accessToken = '249462-ec3f7631-8a9e-405d-a14f-70b523615b3b'
    this.accessToken = 'figd_BWSBin1Kv_G_AJFiIKlE1MH0DrZGu4KiuCnUQq9J'
    // this.accessToken = process.env.ACCESS_TOKEN
    this.client = Figma.Client({
      personalAccessToken: this.accessToken
    })

    this.init()
  }
  
  init () {
    console.log('fetching figma variables')

    // this.fetchFigmaFile()
    
    this.figmaFileFetch()
  }
  
  async figmaFileFetch () {
    let _this = this
    let fileId = '4AraRspiIhO6uWLsRP8EVD'
    // let fileId = '2FM0GRfjcIleAgPBOvBi4ELh'
    let result = await fetch('https://api.figma.com/v1/files/' + fileId , {
        method: 'GET',
        headers: {
            // 'X-Figma-Token': FigmaAPIKey
            'X-Figma-Token': this.accessToken
        }
    })

    let figmaFileStruct = await result.json()

    console.log(figmaFileStruct)
    
    // add this -->
    let figmaFrames = figmaFileStruct.document.children // 1
        .filter(child => child.type === 'CANVAS')[1].children // 2
        .filter(child => child.type === 'FRAME') // 3
        .map(frame => { // 4
            return {
                name: frame.name,
                id: frame.id
            }
        })
    
    // return figmaFrames
    console.log(figmaFrames)
  }

  fetchFigmaFile () {
    let _this = this

    // _this.client.projectFiles()
    // _this.client.Figma.currentFile()

    _this.client.file('4AraRspiIhO6uWLsRP8EVD').then(({ data }) => {
      // Store the data
      _this.figmaData = data
      
      // console.log(JSON.stringify( _this.figmaData ))
    })
  }
  
}

const fetchFigmaVariables = new FetchFigmaVariables()
// export fetchFigmaVariables