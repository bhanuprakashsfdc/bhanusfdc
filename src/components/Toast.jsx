export default function Toast({ message, type = 'success' }) {
  const bgColor = type === 'success' 
    ? 'bg-emerald-600' 
    : type === 'error' 
      ? 'bg-red-600' 
      : 'bg-[var(--color-secondary-container)]';

  return (
    <div className={`toast ${bgColor} text-white`}>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined">
          {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
        </span>
        <span>{message}</span>
      </div>
    </div>
  );
}
