
//boxes: [ { id, width, height, backgroundColor }, ... ]
export interface IBox {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

export interface IBoxFormData {
  width: string,
  height: string,
  backgroundColor: string
}

// this legal?
export interface INewBoxFormProps {
  createBox: Function
}

export interface IBoxProps {
  id: string,
  width: number,
  height: number,
  backgroundColor: string,
  remove: Function
}