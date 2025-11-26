import { type Exam, type Subject } from './types';

type Syllabus = {
  [key in Exam]: {
    [key in Subject]?: string[];
  };
};

export const EXAMS: Exam[] = ["SSC CGL", "SSC CHSL", "SSC MTS", "RRB NTPC", "IBPS PO", "IBPS Clerk"];

export const SYLLABUS: Syllabus = {
  "SSC CGL": {
    "Quantitative Aptitude": ["Number Systems", "Percentages", "Ratio & Proportion", "Time & Work", "Geometry"],
    "General Intelligence & Reasoning": ["Analogies", "Coding-Decoding", "Syllogism", "Blood Relations", "Venn Diagrams"],
    "English Language": ["Reading Comprehension", "Synonyms & Antonyms", "Idioms & Phrases", "One Word Substitution"],
    "General Awareness": ["History", "Geography", "Polity", "Current Affairs", "Science"],
  },
  "SSC CHSL": {
    "Quantitative Aptitude": ["Number Systems", "Simple & Compound Interest", "Algebra", "Mensuration"],
    "General Intelligence & Reasoning": ["Classification", "Series", "Direction Sense", "Puzzles"],
    "English Language": ["Fill in the Blanks", "Error Spotting", "Para Jumbles", "Active/Passive Voice"],
    "General Awareness": ["Static GK", "Economy", "Awards and Honors", "Important Dates"],
  },
  "SSC MTS": {
    "Quantitative Aptitude": ["Number Systems", "Percentages", "Time & Work", "Averages", "Profit & Loss"],
    "General Intelligence & Reasoning": ["Analogies", "Coding-Decoding", "Similarities and Differences", "Problem-Solving", "Non-verbal Reasoning"],
    "English Language": ["Vocabulary", "Grammar", "Sentence structure", "Synonyms & Antonyms", "Reading Comprehension"],
    "General Awareness": ["History", "Geography", "Art and Culture", "Economics", "General Science"],
  },
  "RRB NTPC": {
    "Quantitative Aptitude": ["Decimals", "Fractions", "LCM, HCF", "Profit and Loss"],
    "General Intelligence & Reasoning": ["Mathematical Operations", "Jumbling", "Data Interpretation", "Conclusions"],
    "General Awareness": ["Indian Railways", "Art and Culture", "Indian Literature", "UN and Other important World Organizations"],
  },
  "IBPS PO": {
    "Quantitative Aptitude": ["Data Interpretation", "Quadratic Equations", "Simplification", "Probability"],
    "General Intelligence & Reasoning": ["Seating Arrangements", "Puzzles", "Input-Output", "Inequalities"],
    "English Language": ["Cloze Test", "Sentence Improvement", "Vocabulary", "Grammar"],
    "Computer Knowledge": ["Basics of Computers", "MS Office", "Internet", "Networking"],
  },
  "IBPS Clerk": {
    "Quantitative Aptitude": ["Number Series", "Data Sufficiency", "Approximation", "Mixtures & Alligations"],
    "General Intelligence & Reasoning": ["Alphanumeric Series", "Logical Reasoning", "Order and Ranking"],
    "English Language": ["Word Association", "Spelling", "Sentence Correction"],
    "Computer Knowledge": ["Computer Hardware", "Software", "Keyboard Shortcuts", "Abbreviations"],
  },
};