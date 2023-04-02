export class Question {
  id: number = 0;
  label: string = '';
  text: string = '';
  options: string[] = [];

  constructor(id:number, label:string, text:string, options:string[]){
    this.id = id;
    this.label = label;
    this.text = text;
    this.options = options;
  }
}
