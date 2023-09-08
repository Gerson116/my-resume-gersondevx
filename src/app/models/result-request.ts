

export class ResultRequest{
  success: boolean;
  message: string;
  data: any;
  error: any;

  constructor(){
    this.success = true;
    this.message = "";
  }
}
