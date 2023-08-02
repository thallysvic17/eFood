class AboutModel {
    imgBackground?: string
    title: string
    description: string
    id : number
  
    constructor(
        imgBackground: string,
        title: string,
        description: string,
        id: number
    ) {
        
        this.imgBackground = imgBackground
        this.title = title
        this.description =description
        this.id = id
      
    }
  }
  
  export default AboutModel