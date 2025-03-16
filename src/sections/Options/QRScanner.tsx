import React, { useState, useEffect, useRef } from 'react';
import { Upload, Camera } from 'lucide-react';
// import { Scan, Brain, Cuboid as Cube, BookOpen, Upload, Camera } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';

interface QRScannerProps {
  onClose: () => void;
  onScanSuccess: (scannedUrl: string) => void;
}


// QR Scanner component
const QRScanner: React.FC<QRScannerProps> = ({ onClose, onScanSuccess }) => {
  const [scanning, setScanning] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Import the HTML5QrCode library dynamically
    let html5QrCode: Html5Qrcode;
    
    const startScanner = async () => {
      try {
        const { Html5Qrcode } = await import('html5-qrcode');
        html5QrCode = new Html5Qrcode("reader");
        
        const qrboxFunction = (viewfinderWidth: number, viewfinderHeight: number) => {
          const minEdgePercentage = 0.7;
          const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
          const qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
          return { width: qrboxSize, height: qrboxSize };
        };
        
        await html5QrCode.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: qrboxFunction,
          },
          (decodedText: string) => {
            // On successful scan
            html5QrCode.stop();
            setScanning(false);
            onScanSuccess(decodedText);
          },
          (errorMessage: string) => {
            // Handling scan errors silently
            console.log(errorMessage);
          }
        );
      } catch (err) {
        setError("Unable to access camera. Please try uploading an image instead.");
        console.warn(err);
        setScanning(false);
      }
    };
    
    if (scanning && showCamera) {
      startScanner();
    }
    
    // Cleanup function
    return () => {
      if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop().catch((err: Error) => console.error(err));
      }
    };
  }, [onScanSuccess, scanning, showCamera]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const { Html5Qrcode } = await import('html5-qrcode');
      const html5QrCode = new Html5Qrcode("reader-upload");
      
      setError(null);
      
      // Process the file
      html5QrCode.scanFile(file, /* showImage */ true)
        .then((decodedText: string) => {
          onScanSuccess(decodedText);
        })
        .catch((err: string) => {
          setError("Could not detect a QR code in this image. Please try another image or use the camera.");
          console.warn(err);
        });
    } catch (err) {
      setError("Failed to process the image. Please try again.");
      console.warn(err);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const switchToCamera = () => {
    setShowCamera(true);
    setScanning(true);
    setError(null);
  };

  const switchToUpload = () => {
    setShowCamera(false);
    setScanning(false);
    setError(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      <div className="bg-valorant-black p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Scan QR Code</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex bg-valorant-grey rounded-lg overflow-hidden">
            <button 
              className={`px-4 py-2 flex items-center ${showCamera ? 'bg-valorant-red text-white' : 'text-gray-400'}`}
              onClick={switchToCamera}
            >
              <Camera className="w-4 h-4 mr-2" />
              Camera
            </button>
            <button 
              className={`px-4 py-2 flex items-center ${!showCamera ? 'bg-valorant-red text-white' : 'text-gray-400'}`}
              onClick={switchToUpload}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </button>
          </div>
        </div>
        
        {error ? (
          <div className="text-valorant-red p-4 text-center mb-4">
            {error}
          </div>
        ) : null}

        {showCamera ? (
          <>
            <div id="reader" className="w-full h-64 overflow-hidden rounded"></div>
            <p className="text-gray-400 text-center mt-4">
              Position the QR code within the frame to scan
            </p>
          </>
        ) : (
          <>
            <div id="reader-upload" className="w-full h-64 overflow-hidden rounded flex flex-col items-center justify-center bg-valorant-grey">
              <Upload className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-gray-400 text-center mb-4">
                Upload an image containing a QR code
              </p>
              <button 
                onClick={triggerFileUpload}
                className="bg-valorant-red text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Choose File
              </button>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </>
        )}
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={onClose}
            className="bg-valorant-red text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default QRScanner;
