export type Exam = "SSC CGL" | "SSC CHSL" | "SSC MTS" | "RRB NTPC" | "IBPS PO" | "IBPS Clerk";
export type Subject = "Quantitative Aptitude" | "General Intelligence & Reasoning" | "English Language" | "General Awareness" | "Computer Knowledge";
export type Difficulty = "Basic" | "Intermediate" | "Advanced";
export type Language = "english" | "hindi";

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: {
    english: string[];
    hindi: string[];
  };
  images: string[]; // Array of base64 image data strings
  audio: {
    english: string; // base64 audio data
    hindi: string;   // base64 audio data
  };
}