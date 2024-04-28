import React from 'react';
import ModalVideo from 'react-modal-video';

// Define the types for the props
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

// Use React.FC to define a functional component with specific props
const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <ModalVideo
      channel="custom"
      isOpen={isOpen}
      url={videoUrl}
      onClose={onClose}
    />
  );
};

export default VideoModal; 