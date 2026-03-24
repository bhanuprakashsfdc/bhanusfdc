import { useReadingProgress } from '../hooks/useLocalStorage';

export default function ReadingProgress({ slug }) {
  const progress = useReadingProgress(slug);

  return (
    <div 
      className="reading-progress"
      style={{ width: `${progress}%` }}
    />
  );
}
