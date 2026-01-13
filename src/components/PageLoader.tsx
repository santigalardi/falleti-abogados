import { FaSpinner } from 'react-icons/fa';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <FaSpinner className="text-accent animate-spin text-4xl" />
    </div>
  );
};

export default PageLoader;
