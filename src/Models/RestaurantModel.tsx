class RestaurantModel {
  id: number;
  imgHeader: string;
  title: string;
  note?: string | number;
  description: string;
  tags: string[];

  constructor(
    id: number,
    imgHeader: string,
    title: string,
    note: string | number,
    description: string,
    tags: string[]
  ) {

    this.id = id
    this.imgHeader = imgHeader
    this.title = title
    this.note = note
    this.description = description
    this.tags = tags
  }
}

export default RestaurantModel


