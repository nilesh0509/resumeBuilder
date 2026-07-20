const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div>
      <div className="w-16 h-16 border-4 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin absolute top-0 left-0" style={{ animationDuration: '0.8s' }}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse-ring"></div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;