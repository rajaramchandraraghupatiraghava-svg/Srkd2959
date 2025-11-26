
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import PracticeScreen from './screens/PracticeScreen';
import { type Exam } from './types';

const App: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  const handleExamSelect = (exam: Exam) => {
    setSelectedExam(exam);
  };

  const handleGoHome = () => {
    setSelectedExam(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      {selectedExam ? (
        <PracticeScreen exam={selectedExam} onGoHome={handleGoHome} />
      ) : (
        <HomeScreen onExamSelect={handleExamSelect} />
      )}
    </div>
  );
};

export default App;
