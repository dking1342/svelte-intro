
export interface FormPollType {
  question:string;
  answerA:string;
  answerB:string;
}

interface PollSubType {
  value:string;
  errors:string;
  styles:boolean;
}

export interface Poll {
  question:PollSubType;
  answerA:PollSubType;
  answerB:PollSubType;
}

export interface PollType {
  value: string;
  errors: string;
  styles: boolean;
  name: string;
  labelTitle: string;
}