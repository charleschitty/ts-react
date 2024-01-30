

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

// this legal? YES
export interface INewBoxFormProps {
  createBox: Function
  // createBox: (height: number, width: number, backgroundColor: string) => void
}

//TODO: can extend IBox
export interface IBoxProps {
  id: string,
  width: number,
  height: number,
  backgroundColor: string,
  remove: Function
}

